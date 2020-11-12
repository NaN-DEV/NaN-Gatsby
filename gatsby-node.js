exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResults = await graphql(`
    query gatsbyNode {
      allDatoCmsProject {
        nodes {
          id
          slug
        }
      }
      allDatoCmsExpert {
        nodes {
          id
          slug
        }
      }
    }
  `);

  // BUILD PAGE PROJECT
  queryResults.data.allDatoCmsProject.nodes.forEach((content, index) => {
    createPage({
      path: `portfolio/project/${content.slug}`,
      component: require.resolve(`./src/templates/project.js`),
      context: { id: content.id, i: index },
    });
  });

  // BUILD PAGE EXPERT
  queryResults.data.allDatoCmsExpert.nodes.forEach((content, index) => {
    createPage({
      path: `team/expert/${content.slug}`,
      component: require.resolve(`./src/templates/expert.js`),
      context: { id: content.id, i: index },
    });
  });
};
