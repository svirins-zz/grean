import { format } from 'date-fns';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import { lighten, setLightness } from 'polished';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { AuthorList } from 'components/author';
import { Footer } from 'components/footer';
import { SiteNavMain, SiteNav } from 'components/header';
import { Wrapper, Seo } from 'components/layout';
import { ReadNext, PostContent } from 'components/post';
import { Subscribe } from 'components/subscribe';
import { IndexLayout } from 'layouts';
import { colors } from 'styles/colors';
import { SiteMain, inner, outer } from 'styles/shared';
import { PageTemplateProps } from '@types';

const PageTemplate = ({ data, pageContext, location }: PageTemplateProps) => {
  const post = data.markdownRemark;
  let width = '';
  let height = '';
  if (post.frontmatter.image?.childImageSharp) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
    height = String(Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio);
  }

  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'dd LLL yyyy');

  return (
    <IndexLayout className="post-template">
      <Seo
        seoTitle={}
        seoDescription={}
        imageSrc={}
      />
      <Wrapper css={PostTemplate}>
        <header className="site-header">
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isPost post={post.frontmatter} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            {/* TODO: no-image css tag? */}
            <article css={[PostFull, !post.frontmatter.image && NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTags className="post-full-tags">
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <Link to={`/tags/${_.kebabCase(post.frontmatter.tags[0])}/`}>
                      {post.frontmatter.tags[0]}
                    </Link>
                  )}
                </PostFullTags>
                <PostFullTitle className="post-full-title">{post.frontmatter.title}</PostFullTitle>
                <PostFullCustomExcerpt className="post-full-custom-excerpt">
                  {post.frontmatter.excerpt}
                </PostFullCustomExcerpt>
                <PostFullByline className="post-full-byline">
                  <section className="post-full-byline-content">
                    <AuthorList authors={post.frontmatter.author} tooltip="large" />
                    <section className="post-full-byline-meta">
                      <h4 className="author-name">
                        {post.frontmatter.author.map(author => (
                          <Link key={author.id} to={`/author/${_.kebabCase(author.id)}/`}>
                            {author.id}
                          </Link>
                        ))}
                      </h4>
                      <div className="byline-meta-content">
                        <time className="byline-meta-date" dateTime={datetime}>
                          {displayDatetime}
                        </time>
                        <span className="byline-reading-time">
                          <span className="bull">&bull;</span> {post.timeToRead} min read
                        </span>
                      </div>
                    </section>
                  </section>
                </PostFullByline>
              </PostFullHeader>

              {post.frontmatter.image?.childImageSharp && (
                <PostFullImage>
                  <Img
                    style={{ height: '100%' }}
                    fluid={post.frontmatter.image.childImageSharp.fluid}
                    alt={post.frontmatter.title}
                  />
                </PostFullImage>
              )}
              <PostContent htmlAst={post.htmlAst} />

              {/* The big email subscribe modal content */}
              {config.showSubscribe && <Subscribe title={config.title} />}
            </article>
          </div>
        </main>

        <ReadNext
          currentPageSlug={location.pathname}
          tags={post.frontmatter.tags}
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
  query($slug: String, $primaryTag: String)
  {
    allContentfulPost(
      filter: { slug: { eq: $slug } }
    ) {
      edges {
        node {
          slug
          title
          date(formatString: "MMM DD YYYY")
          excerpt
          tags {
            ... on ContentfulTag {
              tagName
            }
          }
          body {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
          author {
            name
            social
            subtitle
            personal_info {
              childMarkdownRemark {
                html
              }
            }
            avatar {
              fluid(maxWidth: 480) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
          hero {
            fluid(maxWidth: 3720) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
    relatedPosts: allContentfulPost(
      filter: { frontmatter: { tags: { in: [$primaryTag] }, draft: { ne: true } } }
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
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

const PostFullTags = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.3rem;
  line-height: 1.4em;
  font-weight: 600;
  text-transform: uppercase;
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
    font-size: 1.2rem;
    line-height: 1.2em;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  .post-full-byline-meta h4 {
    margin: 0 0 3px;
    font-size: 1.3rem;
    line-height: 1.4em;
    font-weight: 500;
  }

  .post-full-byline-meta h4 a {
    /* color: color(var(--darkgrey) l(+10%)); */
    color: ${lighten('0.1', colors.darkgrey)};
  }

  .post-full-byline-meta h4 a:hover {
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

export default PageTemplate;
