import { Footer } from 'components/footer';
import { SiteNav } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostCard } from 'components/post';
import { graphql } from 'gatsby';
import { IndexLayout } from 'layouts';
import React from 'react';
import {
  PostFeed,
  ResponsiveHeaderBackground,
  SiteArchiveHeader,
  SiteDescription,
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderContent,
  SiteMain,
  SiteNavMain,
  SiteTitle,
  inner,
  outer,
} from 'styles/shared';

import { TagTemplateProps } from '@types';

const Tags = ({ data, location }: TagTemplateProps): JSX.Element => {
  const { edges, totalCount } = data.allContentfulPost;
  const tagData = data.allContentfulTag.edges[0].node;
  return (
    <IndexLayout>
      <Seo
        seoTitle={tagData.tagName}
        seoDescription={tagData.description?.raw}
        imageSrc={tagData.image?.fixed.src}
        pathname={location}
      />
      <Wrapper>
        <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav title={tagData.tagName} />
            </div>
          </div>
          <ResponsiveHeaderBackground
            css={[outer, SiteHeaderBackground]}
            backgroundImage={tagData.image?.fluid.src}
            className="site-header-background"
          >
            <SiteHeaderContent css={inner} className="site-header-content">
              <SiteTitle className="site-title">{tagData.tagName}</SiteTitle>
              <SiteDescription className="site-description">
                {tagData.description} A collection of {totalCount > 1 && `${totalCount} posts`}
                {totalCount === 1 && '1 post'}
                {totalCount === 0 && 'No posts'}
              </SiteDescription>
            </SiteHeaderContent>
          </ResponsiveHeaderBackground>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
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
    allContentfulTag(
      filter: {slug: {eq: $tag}} 
      ) {
      edges {
        node {
          slug
          tagName
          description {
            raw
          }
          image {
            fluid(maxWidth: 800) {
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
      sort: {order: DESC, fields: updatedAt},
      filter: {tags: {elemMatch: {slug: {eq: $tag}}}}
      ) {
      totalCount
      edges {
        node {
          title
          slug
          excerpt
          updatedAt(formatString: "dd MMM yyyy")
          tags {
              slug
              tagName
            }
          }
          hero {
            fluid(maxWidth: 2540)  {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              htmlAst
              timeToRead
            }
          }
          author {
            name
            subtitle
            avatar {
              fluid(maxWidth: 800)  {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }`;
