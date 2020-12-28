
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Addict.cf',
    description: 'Врачи и психотерапевты об аддикции и методах ее лечения.',
    author: 'dr. Grean',
    siteUrl: 'https://addict.cf',
    lang: 'ru',
    keywords: ['Addiction', 'Therapy', 'Recovery', 'Blog'],
    coverImage: 'src/assets/img/hero.jpg',
    logo: 'src/assets/svg/logo.svg',
    facebook: '',
    twitter: '',
    showSubscribe: true,
    footer: 'авторский блог об аддикции',
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Addict.cf',
        short_name: 'addict',
        start_url: '/',
        display: 'browser',
        icon: 'src/assets/svg/logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        enablePartialUpdates: true,
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: require('./src/utils/algolia-queries.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TQ6RXGS',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://addict.cf',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Addict.cf',
        short_name: 'Addict.cf',
        description: 'Addict.cf',
        start_url: '/',
        lang: 'ru',
        display: 'standalone',
        icon: 'src/assets/svg/logo.svg',
        background_color: '#101010',
        theme_color: '#20263d',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'addict-cf',
      },
    },
  ],
};
