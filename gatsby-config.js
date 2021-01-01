
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Addicts.ws',
    description: 'Врачи и психотерапевты об аддикции и методах ее лечения.',
    author: 'dr. Grean',
    siteUrl: 'https://addicts.ws',
    locale: 'ru-RU',
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://addicts.ws',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Addicts.ws',
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
        chunkSize: 10000,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 80,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WLHD5K8',
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
              maxWidth: 1040,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://addicts.ws',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Addicts.ws',
        short_name: 'Addicts.ws',
        description: 'Addicts.ws',
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: require('./src/utils/site-metadata-query.js'),
        feeds: [
          {
            serialize: require('./src/utils/serializeFn.js'),
            query: require('./src/utils/contentful-feed-query.js'),
            output: '/rss.xml',
            title: 'RSS Feed для Addicts.ws',
          },
        ],
      },
    },
  ],
};
