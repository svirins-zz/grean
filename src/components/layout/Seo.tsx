import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { myContext } from '../../context';

// add detailed seo props
export const Seo = ({
  seoTitle,
  seoDescription,
}: {
  seoTitle: string;
  seoDescription: string;
}): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
            keywords
          }
        }
      }
    `,
  );
  const context = useContext(myContext);

  const classDarkMode = context.darkMode?.isDark ? 'dark' : '';
  // TODO: check if add class to html tag works
  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang ?? 'en',
        class: classDarkMode,
      }}
      title={`${site.siteMetadata.title} | ${seoTitle}`}
      meta={[
        {
          name: 'charSet',
          content: 'utf-8',
        },
        {
          name: 'description',
          content: seoDescription ?? site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: seoTitle ?? site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: seoDescription ?? site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: seoTitle ?? site.siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: seoDescription ?? site.siteMetadata.description,
        },
      ]}
    />
  );
};



