const indexName = 'Posts';
const pageQuery = `{
  pages: allContentfulPost(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        id
        title
        tags {
          tagName
        }
        body {
          childMarkdownRemark {
            excerpt(format: PLAIN, pruneLength: 10000)
          }
        }
        author {
          name
          subtitle        
        }
      }
    }
  }
}`;
function pageToAlgoliaRecord({ node: { id, title, ...rest } }) {
  return {
    objectID: id,
    ...title,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: ['excerpt:20'] },
  },
];
module.exports = queries;
