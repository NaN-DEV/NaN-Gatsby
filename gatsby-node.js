exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResults = await graphql(`
    query gatsbyNode {
      allDatoCmsPortfolio {
        nodes {
          id
          slug
          title
        }
      }
    }
  `);

  // BUILD LIST SERVICE IN CATEGORY

  queryResults.data.allDatoCmsPortfolio.nodes.forEach((content, index) => {
    createPage({
      path: `portfolio/projekt/${content.slug}`,
      component: require.resolve(`./src/templates/portfolio.js`),
      context: { id: content.id, i: index },
    });
  });
};
