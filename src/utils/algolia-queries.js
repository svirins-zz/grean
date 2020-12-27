const pageQuery = `{
  pages: allContentfulPost {
    edges {
      node {
        slug
        title       
        body {
          childMarkdownRemark {
            excerpt(format: PLAIN, pruneLength: 10000)
          }
        }        
      }
    }
  }
}`;
// TODO: destructure excerpt
function pageToAlgoliaRecord({ node: { slug, title, ...rest } }) {
  return {
    objectID: slug,
    title,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: 'ADDICT',
    settings: { attributesToSnippet: ['excerpt:20'] },
    matchFields: ['slug', 'body'],
    // skipIndexing: true,
  },
];
module.exports = queries;
