import { myContext } from 'context';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from '@reach/router';

// add detailed seo props
export const Seo = ({
  seoTitle,
  seoDescription,
  imageSrc,
}: {
  seoTitle: string;
  seoDescription: string;
  imageSrc: any;
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
            siteUrl
          }
        }
      }
    `,
  );
  const context = useContext(myContext);
  const { pathname } = useLocation();

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
          name: 'og:image',
          content: imageSrc,
        },
        {
          name: 'og:image:height',
          content: 640,
        },
        {
          name: 'og:image:width',
          content: 480,
        },
        {
          name: 'og:url',
          content: `site.siteMetadata.siteUrl${pathname}`,
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
