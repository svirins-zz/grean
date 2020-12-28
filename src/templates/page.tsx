import { Footer } from 'components/footer';
import { SiteNav, SiteNavMain } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostContent, ReadNext } from 'components/post';
import { graphql } from 'gatsby';
import { IndexLayout } from 'layouts';
import { lighten, setLightness } from 'polished';
import React from 'react';
import { colors } from 'styles/colors';
import { SiteMain, inner, outer } from 'styles/shared';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PageTemplateProps } from '@types';

const PageTemplate = ({ data }: PageTemplateProps) => {
  const page = data.allContentfulPage.edges[0].node;
  return (
    <IndexLayout className="post-template">
      <Seo
        seoTitle={page.title}
        seoDescription={page.markdown.childMarkdownRemark.excerpt}
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
            <article css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">{page.title}</PostFullTitle>
              </PostFullHeader>
              <PostContent htmlAst={page.markdown.childMarkdownRemark.htmlAst} />
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

// POST QUERY
export const query = graphql`
  query($slug: String) {
    allContentfulPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          markdown {
            childMarkdownRemark {
              htmlAst
              excerpt(format: PLAIN, pruneLength: 200)
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

export default PageTemplate;
