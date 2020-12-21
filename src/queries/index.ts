const postsResult = await graphql(`
{
  allContentfulPost(limit: 100, sort: {fields: date, order: ASC}) {
    edges {
      node {
        slug
        title
        date(formatString: "MMM DD YYYY")
        excerpt
        tags {
          ... on ContentfulTag {
            tagName
          }
        }
        body {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
        author {
          name
          id
          social
          subtitle
          personal_info {
            childMarkdownRemark {
              html
            }
          }
          avatar {
            fluid(maxWidth: 480) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
        hero {
          fluid(maxWidth: 3720) {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}
`);
const authorsResult = await graphql(`
{
  allContentfulAuthor {
    edges {
      node {
        avatar {
          fluid(maxWidth: 720)  {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
        id
        name
        social
        slug
        subtitle
        personal_info {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}  
`);
const tagsResult = await graphql(`
{
  allContentfulTag {
    edges {
      node {
        tagName
        slug
        description {
          raw
        }
        image {
          fluid(maxWidth: 720) {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}
`);