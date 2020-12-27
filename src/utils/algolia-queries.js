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

function pageToAlgoliaRecord(slug, title, excerpt) {
  return {
    objectID: slug,
    title,
    text: excerpt,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(({ node }) => pageToAlgoliaRecord(node.slug, node.title, node.body.childMarkdownRemark.excerpt)),
    indexName: 'ADDICT',
    settings: { attributesToSnippet: ['text:20'] },
    matchFields: ['title', 'text'],
    skipIndexing: true,
  },
];
module.exports = queries;
