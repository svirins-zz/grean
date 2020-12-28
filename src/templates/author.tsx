import { Footer } from 'components/footer';
import { SiteNav } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostCard } from 'components/post';
import { graphql } from 'gatsby';
import { IndexLayout } from 'layouts';
import React from 'react';
import {
  AuthorProfileImage,
  Details,
  PostFeed,
  ResponsiveHeaderBackground,
  SiteArchiveHeader,
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderContent,
  SiteMain,
  SiteNavMain,
  SiteTitle,
  inner,
  outer,
} from 'styles/shared';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AuthorTemplateProps } from '@types';

const Author = ({ data }: AuthorTemplateProps) => {
  // TODO: implement multi-authors
  const author = data.allContentfulAuthor.edges[0].node;

  const { edges, totalCount } = data.allContentfulPost;
  // TODO:im[plement socials detection]
  const socialsDisplay = author.social.map((social: string) => {
    return (
      <AuthorSocialLink
        key={social}
        className="author-social-link"
      >
        <AuthorSocialLinkAnchor href={social} target="_blank" rel="noopener noreferrer">
          Facebook
        </AuthorSocialLinkAnchor>
      </AuthorSocialLink>
    );
  });

  return (
    <IndexLayout>
      <Seo
        seoTitle={author.name}
        seoDescription={author.subtitle}
        imageSrc={author.avatar.fixed.src}
      />
      <Wrapper>
        <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav />
            </div>
          </div>

          <ResponsiveHeaderBackground
            backgroundImage={author.profileImage.fixed.src}
            css={[outer, SiteHeaderBackground]}
            className="site-header-background"
          >
            <div css={inner}>
              <SiteHeaderContent css={AuthorHeader} className="site-header-content author-header">
                <img
                  style={{ marginTop: '8px' }}
                  css={[AuthorProfileImage, AuthorProfileBioImage]}
                  src={author.avatar.fluid.src}
                  alt={author.name}
                />
                <AuthHeaderContent className="author-header-content">
                  <SiteTitle className="site-title">{author.name}</SiteTitle>
                  <AuthorBio className="author-bio">{author.subtitle}</AuthorBio>
                  <div css={AuthorMeta} className="author-meta">
                    <div className="author-location" css={[HiddenMobile]}>
                      {author.location}
                    </div>
                    <div className="author-stats" css={[HiddenMobile]}>
                      {totalCount > 1 && `${totalCount} posts`}
                      {totalCount === 1 && '1 post'}
                      {totalCount === 0 && 'No posts'}
                    </div>
                    {socialsDisplay}
                  </div>
                </AuthHeaderContent>
              </SiteHeaderContent>
            </div>
          </ResponsiveHeaderBackground>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <Details>
              {author.personal_info.childMarkdownRemark.excerpt}
            </Details>
            <div css={[PostFeed]}>
              {edges.map(({ node }) => {
                return <PostCard key={node.slug} post={node} />;
              })}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

// ALL AUTHORS WITH CORRESPONDING POSTS QUERY

export const pageQuery = graphql`
  query($author: String) {
    allContentfulAuthor(filter: { slug: { eq: $author } } ) {
      edges {
        node {
          name
          slug
          subtitle
          location
          social
          personal_info {
            childMarkdownRemark {
              htmlAst
              excerpt(format: PLAIN, pruneLength: 300)
            }
          }
          avatar {
            fluid(maxWidth: 720) {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed {
              src
            }
          }
          profileImage {
            fluid(maxWidth: 2540) {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed {
              src
            }
          }
        }
      }
    }
    allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: { author: { elemMatch: { slug: { eq: $author } } } }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          featured
          updatedAt(formatString: "d MMM yyyy", locale: "ru-RU")
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
              htmlAst
              excerpt(format: PLAIN, pruneLength: 250)
              timeToRead
            }
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
  }
`;
// styling goes here
const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10vw 0 10px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 10px 0 0;

    /* no image */
    padding-bottom: 10px;
  }
`;

const AuthorMeta = css`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 1px;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  .author-location + .author-stats:before,
  .author-stats + .author-social-link:before,
  .author-social-link + .author-social-link:before {
    content: '•';
    display: inline-block;
    margin: 0 12px;
    color: #fff;
    opacity: 0.6;
  }

  @media (max-width: 500px) {
    margin-top: 8px;
  }

  @media (max-width: 700px) {
    .author-location,
    .author-stats,
    .author-stats + .author-social-link:first-of-type:before {
      display: none;
    }
  }
`;

const AuthorSocialLink = styled.span`
  display: inline-block;
  margin: 0;
  padding: 6px 0;
`;

const AuthorBio = styled.h2`
  z-index: 10;
  flex-shrink: 0;
  margin: 6px 0 0;
  max-width: 46em;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  opacity: 0.8;
`;

const AuthHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0 0 30px;
  @media (max-width: 500px) {
    align-items: center;
    margin: 16px 0 0 0;
  }
`;

// .site-header-content .author-profile-image
const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: -4px 0 0;
  width: 110px;
  height: 110px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
  border-radius: 100%;
`;

const AuthorSocialLinkAnchor = styled.a`
 
  font-weight: 600;

  color: #1877f2;
  :hover {
    text-decoration: underline;
    color:#408bee;
    opacity: 1;
  }
`;

export default Author;
