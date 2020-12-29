const serializeFn = ({ query: { site, allContentfulPost } }) => {
  return allContentfulPost.edges.map(edge => {
    return { ...edge.node.title, description: edge.node.body.childMarkdownRemark.excerpt,
      date: edge.node.updatedAt,
      url: `${site.siteMetadata.siteUrl}/pages/${edge.node.slug}`,
      guid: `${site.siteMetadata.siteUrl}/pages/${edge.node.slug}`,
      custom_elements: [{ 'content:encoded': edge.node.body.childMarkdownRemark.html }] };
  });
};

module.exports = serializeFn;
