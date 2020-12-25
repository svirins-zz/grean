import frontImage from 'assets/img/frontImage.webp';
import siteLogo from 'assets/img/siteLogo.webp';
import { Footer } from 'components/footer';
import { SiteNav } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { Pagination, PostCard } from 'components/post';
import { graphql } from 'gatsby';
import { IndexLayout } from 'layouts';
import React from 'react';
import {
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteHeaderStyles,
  SiteMain,
  SiteTitle,
  inner,
  outer,
} from 'styles/shared';

import { css } from '@emotion/react';
import { IndexProps } from '@types';

// TODO: infer types from gatsby-typegen

const IndexPage: React.FC<IndexProps> = props => {
  return (
    <IndexLayout css={HomePosts}>
      <Seo
        imageSrc={frontImage}
        seoDescription={props.data.site.siteMetadata.description}
        seoTitle={props.data.site.siteMetadata.title}
      />
      <Wrapper>
        <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
          style={{
            backgroundImage: frontImage,
          }}
        >
          <div css={inner}>
            <SiteNav title={props.data.site.siteMetadata.title} />
            <SiteHeaderContent className="site-header-conent">
              <SiteTitle className="site-title">
                <img
                  style={{ maxHeight: '55px' }}
                  src={siteLogo}
                  alt={props.data.site.siteMetadata.title}
                />
              </SiteTitle>
              <SiteDescription>{props.data.site.siteMetadata.description}</SiteDescription>
            </SiteHeaderContent>
          </div>
        </div>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {props.data.allContentfulPost.edges.map((node, index) => {
                // filter out drafts in production
                return <PostCard key={node.node.slug} post={node.node} large={index === 0} />;
              })}
            </div>
          </div>
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

// ALL POSTS QUERY
export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: { fields: updatedAt, order: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          title
          slug
          updatedAt(formatString: "d MMMM yyyy")
          featured
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
              excerpt(format: PLAIN, pruneLength: 200)
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export default IndexPage;
