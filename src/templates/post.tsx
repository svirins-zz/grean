import { AuthorList } from 'components/author';
import { Comments } from 'components/comments/comments';
import { Footer } from 'components/footer';
import { SiteNav, SiteNavMain } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostContent, ReadNext } from 'components/post';
import { FeaturedIcon } from 'components/post/featuredIcon';
import { ShareButtons } from 'components/share/shareButtons';
import { Subscribe } from 'components/subscribe';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { IndexLayout } from 'layouts';
import { lighten, setLightness } from 'polished';
import React, { Fragment } from 'react';
import { colors } from 'styles/colors';
import { SiteMain, inner, outer } from 'styles/shared';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { PostTemplateProps } from '@types';

const SinglePostTemplate = ({ data, pageContext, location }: PostTemplateProps) => {
  const { pathname } = useLocation();
  const post = data.allContentfulPost.edges[0].node;
  const isFeatured = post.featured ? (<FeaturedIcon />) : null;
  const tagsDisplay = post.tags.map((tag, index) => {
    const isComma = (post.tags.length > 1 && index !== post.tags.length - 1) ? `,${' '}` : '';
    return (
      <PostCardPrimaryTag key={tag.slug}>
        <Link to={`/tags/${tag.slug}/`}>
          {tag.tagName}
        </Link>
        {isComma}
      </PostCardPrimaryTag>
    );
  });
  const authorsDisplay = post.author.map((author, index) => {
    const isComma = (post.author.length > 1 && index !== post.author.length - 1) ? `,${' '}` : '';
    return (
      <Fragment key={author.slug}>
        <Link to={`/author/${author.slug}/`}>
          {author.name}
        </Link>
        {isComma}
      </Fragment>
    );
  });
  const tagNames = post.tags.map(tag => tag.tagName);

  return (
    <IndexLayout className="post-template">
      <Seo
        seoTitle={post.title}
        seoDescription={post.body.childMarkdownRemark.excerpt}
        imageSrc={post.hero.fixed.src}
      />
      <Wrapper css={PostTemplate}>
        <header className="site-header">
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            {/* TODO: no-image css tag? */}
            <article css={[PostFull, !post.hero && NoImage]}>
              <PostFullHeader className="post-full-header">
                {tagsDisplay}
                {isFeatured}
                <PostFullTitle className="post-full-title">{post.title}</PostFullTitle>
                <PostFullCustomExcerpt className="post-full-custom-excerpt">
                  {post.body.childMarkdownRemark.excerpt}
                </PostFullCustomExcerpt>
                <PostFullByline className="post-full-byline">
                  <section className="post-full-byline-content">
                    <AuthorList authors={post.author} tooltip="large" />
                    <section className="post-full-byline-meta">
                      <h3 className="author-name">{authorsDisplay}</h3>
                      <div className="byline-meta-content">
                        <time className="byline-meta-date" dateTime={post.updatedAt.toString()}>
                          {post.updatedAt.toString()}
                        </time>
                        <span className="byline-reading-time">
                          <span className="bull">&bull;</span>{' '}
                          {post.body.childMarkdownRemark.timeToRead} min read
                        </span>
                      </div>
                    </section>
                  </section>
                </PostFullByline>
              </PostFullHeader>

              {post.hero && (
                <PostFullImage>
                  <Img style={{ height: '100%' }} fluid={post.hero.fluid} alt={post.title} />
                </PostFullImage>
              )}
              <PostContent
                htmlAst={post.body.childMarkdownRemark.htmlAst}
              />
              <ShareButtons
                title={post.title}
                url={location.href}
                twitterHandle="@Svirins"
                tags={tagNames ?? []}
              />
              <Comments />
              <Subscribe />
            </article>
          </div>
        </main>

        <ReadNext
          currentPageSlug={pathname}
          tags={post.tags}
          relatedPosts={data.relatedPosts}
          pageContext={pageContext}
        />

        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

// POST QUERY
export const query = graphql`
  query($slug: String, $primaryTag: String) {
    allContentfulPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          featured
          updatedAt(formatString: "d MMMM yyyy")
          tags {
            slug
            tagName
          }
          hero {
            fluid(maxWidth: 2540) {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed {
              src
            }
          }
          body {
            childMarkdownRemark {
              htmlAst
              timeToRead
              excerpt(format: PLAIN, pruneLength: 200)            }
          }
          author {
            name
            slug
            subtitle
            avatar {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
    relatedPosts: allContentfulPost(
      limit: 5
      sort: { order: DESC, fields: updatedAt }
      filter: { tags: { elemMatch: { slug: { eq: $primaryTag } } } }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          featured
          updatedAt(formatString: "d MMMM yyyy")
          tags {
            slug
            tagName
          }
          hero {
            fluid(maxWidth: 2540) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              excerpt(format: PLAIN, pruneLength: 200)
            }
          }
          author {
            name
            subtitle
            slug
            avatar {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
// styling goes here
const PostTemplate = css`
  .site-main {
    margin-top: 64px;
    background: #fff;
    padding-bottom: 4vw;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 70px 170px 50px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  @media (max-width: 1170px) {
    padding: 60px 11vw 50px;
  }

  @media (max-width: 800px) {
    padding-right: 5vw;
    padding-left: 5vw;
  }

  @media (max-width: 500px) {
    padding: 20px 0 35px;
  }
`;

const PostFullCustomExcerpt = styled.p`
  margin: 20px 0 0;
  color: var(--midgrey);
  font-family: Georgia, serif;
  font-size: 2.3rem;
  line-height: 1.4em;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 1.9rem;
    line-height: 1.5em;
  }

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)};
  }
`;

const PostFullByline = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 0;
  padding-top: 15px;
  /* border-top: 1px solid color(var(--lightgrey) l(+10%)); */
  border-top: 1px solid ${lighten('0.1', colors.lightgrey)};

  .post-full-byline-content {
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }

  .post-full-byline-content .author-list {
    justify-content: flex-start;
    padding: 0 12px 0 0;
  }

  .post-full-byline-meta {
    margin: 2px 0 0;
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)};
    font-size: 1.3rem !important;
    line-height: 1.1em;
    letter-spacing: 0.2px;
    text-transform: none;
  }

  .post-full-byline-meta h4, h3 {
    margin: 0 0 3px;
    font-size: 1.5rem;
    line-height: 1.4em;
    font-weight: 500;
  }

  .post-full-byline-meta h3 a {
    /* color: color(var(--darkgrey) l(+10%)); */
    color: ${lighten('0.1', colors.darkgrey)};
  }

  .post-full-byline-meta h3 a:hover {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .post-full-byline-meta .bull {
    display: inline-block;
    margin: 0 4px;
    opacity: 0.6;
  }

  @media (prefers-color-scheme: dark) {
    /* border-top-color: color(var(--darkmode) l(+15%)); */
    border-top-color: ${lighten('0.15', colors.darkmode)};

    .post-full-byline-meta h4 a {
      color: rgba(255, 255, 255, 0.75);
    }

    .post-full-byline-meta h4 a:hover {
      color: #fff;
    }
  }
`;

export const PostFullTitle = styled.h1`
  margin: 0 0 0.2em;
  color: ${setLightness('0.05', colors.darkgrey)};
  @media (max-width: 500px) {
    margin-top: 0.2em;
    font-size: 3.3rem;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const PostFullImage = styled.figure`
  margin: 25px 0 50px;
  height: 800px;
  background: ${colors.lightgrey} center center;
  background-size: cover;
  border-radius: 5px;

  @media (max-width: 1170px) {
    margin: 25px -6vw 50px;
    border-radius: 0;
    img {
      max-width: 1170px;
    }
  }

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;

const PostCardPrimaryTag = styled.span`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.blue};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

export default SinglePostTemplate;
