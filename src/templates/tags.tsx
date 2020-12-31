import { Footer } from 'components/footer';
import { SiteNav } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostCard } from 'components/post';
import { graphql } from 'gatsby';
import { IndexLayout } from 'layouts';
import React from 'react';
import {
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
import { makeEndings } from 'utils/makeEndings';

import { css } from '@emotion/react';
import { TagTemplateProps } from '@types';

const Tags = ({ data }: TagTemplateProps): JSX.Element => {
  const { edges, totalCount } = data.allContentfulPost;
  const tagData = data.allContentfulTag.edges[0].node;
  return (
    <IndexLayout>
      <Seo
        seoTitle={tagData.tagName}
        seoDescription={tagData.description.childMarkdownRemark.excerpt}
        imageSrc={tagData.image.fixed.src}
      />
      <Wrapper>
        <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav />
            </div>
          </div>
          <ResponsiveHeaderBackground
            css={[outer, SiteHeaderBackground]}
            backgroundImage={tagData.image.fluid.src}
            className="site-header-background"
          >
            <SiteHeaderContent css={inner} className="site-header-content">
              <SiteTitle className="site-title">{tagData.tagName}</SiteTitle>
              <div css={[Stats]}>
                {makeEndings(totalCount)}
              </div>
            </SiteHeaderContent>
          </ResponsiveHeaderBackground>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <Details>{tagData.description.childMarkdownRemark.excerpt}</Details>
            <div css={[PostFeed]}>
              {edges.map(({ node }) => (
                <PostCard key={node.slug} post={node} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Tags;

// TAGS QUERY
export const pageQuery = graphql`
  query($tag: String) {
    allContentfulTag(filter: { slug: { eq: $tag } }) {
      edges {
        node {
          slug
          tagName
          description {
            childMarkdownRemark {
              htmlAst
              excerpt(format: PLAIN, pruneLength: 500)
              timeToRead
            }
          }
          image {
            fluid(maxWidth: 2000) {
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
      sort: { order: DESC, fields: updatedAt }
      filter: { tags: { elemMatch: { slug: { eq: $tag } } } }
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

const Stats = css`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 1px;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  white-space: nowrap;
`;
