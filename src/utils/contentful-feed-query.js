const Query = `
{
  allContentfulPost(sort: { fields: updatedAt, order: DESC }) {
    edges {
      node {
        title
        slug
        updatedAt
        body {
          childMarkdownRemark {
            html
            excerpt(format: PLAIN, pruneLength: 300)
          }
        }
      }
    }
  }
}`;

module.exports = Query;
