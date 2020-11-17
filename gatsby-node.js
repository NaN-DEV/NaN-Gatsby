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
      allDatoCmsPortfolio {
        nodes {
          id
          slug
        }
      }
      allDatoCmsService {
        nodes {
          id
          slug
        }
      }
    }
  `);

  // BUILD PAGE PORTFOLIO
  queryResults.data.allDatoCmsPortfolio.nodes.forEach((content, index) => {
    createPage({
      path: `portfolio/${content.slug}`,
      component: require.resolve(`./src/templates/portfolio.js`),
      context: { id: content.id, i: index },
    });
  });

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

  // BUILD PAGE SERVICE

  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `services/${content.slug}`,
      component: require.resolve(`./src/templates/service.js`),
      context: { id: content.id, i: index },
    });
  });
};
