exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResults = await graphql(`
    query gatsbyNode {
      allDatoCmsProject {
        nodes {
          id
          slug
          category {
            id
            title
          }
        }
      }
      allDatoCmsPortfolio {
        nodes {
          id
          slug
          title
        }
      }
      allDatoCmsExpert {
        nodes {
          id
          slug
          skils {
            id
            title
          }
        }
      }
      allDatoCmsSkil {
        nodes {
          id
          slug
        }
      }
      allDatoCmsService {
        nodes {
          id
          slug
          category {
            id
            title
          }
        }
      }
      allDatoCmsServiceCategory {
        nodes {
          id
          slug
          title
        }
      }
    }
  `);

  let posts = [];
  let categorys = [];
  const postsPerPage = 2;
  let postInCategoryAll = [];
  const numPages = postsAll => {
    return Math.ceil(postsAll.length / postsPerPage);
  };

  // BUILD PAGE LIST PROJECT IN PORTFOLIO

  // I set values
  postInCategoryAll = [];
  categorys = queryResults.data.allDatoCmsPortfolio.nodes;
  posts = queryResults.data.allDatoCmsProject.nodes;

  // Add posts by category
  categorys.forEach(category => {
    const postInCategory = [];
    posts.forEach(post => {
      return post.category.filter(postCategory => postCategory.id === category.id).length > 0 && postInCategory.push(post);
    });
    postInCategoryAll.push(postInCategory);
  });

  // Build page
  Array.from({ length: numPages(posts) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: require.resolve(`./src/templates/portfolio.js`),
      context: {
        id: 'all',
        title: false,
        slug: '/portfolio',
        currentPage: i + 1,
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });

  // Build page in category
  postInCategoryAll.forEach((category, indexCategory) => {
    Array.from({ length: numPages(category) }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/portfolio/${categorys[indexCategory].slug}` : `/portfolio/${categorys[indexCategory].slug}/${i + 1}`,
        component: require.resolve(`./src/templates/portfolio.js`),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          id: categorys[indexCategory].id,
          slug: i === 0 ? `/portfolio/${categorys[indexCategory].slug}` : `/portfolio/${categorys[indexCategory].slug}`,
        },
      });
    });
  });

  // BUILD PAGE PROJECT
  queryResults.data.allDatoCmsProject.nodes.forEach((content, index) => {
    createPage({
      path: `project/${content.slug}`,
      component: require.resolve(`./src/templates/project.js`),
      context: { id: content.id, i: index },
    });
  });

  // BUILD PAGE EXPERT
  queryResults.data.allDatoCmsExpert.nodes.forEach((content, index) => {
    createPage({
      path: `/expert/${content.slug}`,
      component: require.resolve(`./src/templates/expert.js`),
      context: { id: content.id, i: index },
    });
  });

  // BUILD PAGE LIST EXPERT

  // I set values
  postInCategoryAll = [];
  categorys = queryResults.data.allDatoCmsSkil.nodes;
  posts = queryResults.data.allDatoCmsExpert.nodes;

  // Add posts by category
  categorys.forEach(category => {
    const postInCategory = [];
    posts.map(post => {
      return post.skils.filter(postCategory => postCategory.id === category.id).length > 0 && postInCategory.push(post);
    });
    postInCategoryAll.push(postInCategory);
  });

  // Build page
  Array.from({ length: numPages(posts) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/partners` : `/partners/${i + 1}`,
      component: require.resolve(`./src/templates/partners.js`),
      context: {
        id: 'all',
        title: false,
        slug: '/partners',
        currentPage: i + 1,
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });

  // Build page in category
  postInCategoryAll.forEach((category, indexCategory) => {
    Array.from({ length: numPages(category) }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/partners/${categorys[indexCategory].slug}` : `/partners/${categorys[indexCategory].slug}/${i + 1}`,
        component: require.resolve(`./src/templates/partners.js`),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          id: categorys[indexCategory].id,
          slug: i === 0 ? `/partners/${categorys[indexCategory].slug}` : `/partners/${categorys[indexCategory].slug}`,
        },
      });
    });
  });

  // BUILD PAGE SERVICES
  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `service/${content.slug}`,
      component: require.resolve(`./src/templates/service.js`),
      context: { id: content.id, i: index },
    });
  });

  // BUILD PAGE LIST SERVICES

  // I set values
  postInCategoryAll = [];
  categorys = queryResults.data.allDatoCmsServiceCategory.nodes;
  posts = queryResults.data.allDatoCmsService.nodes;

  // Add posts by category
  categorys.forEach(category => {
    const postInCategory = [];
    posts.forEach(post => {
      return post.category.filter(postCategory => postCategory.id === category.id).length > 0 && postInCategory.push(post);
    });
    postInCategoryAll.push(postInCategory);
  });

  // Build page
  Array.from({ length: numPages(posts) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/services` : `/services/${i + 1}`,
      component: require.resolve(`./src/templates/services.js`),
      context: {
        id: 'all',
        title: false,
        slug: '/services',
        currentPage: i + 1,
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });

  // Build page in category
  postInCategoryAll.forEach((category, indexCategory) => {
    Array.from({ length: numPages(category) }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/services/${categorys[indexCategory].slug}` : `/services/${categorys[indexCategory].slug}/${i + 1}`,
        component: require.resolve(`./src/templates/services.js`),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          id: categorys[indexCategory].id,
          slug: i === 0 ? `/services/${categorys[indexCategory].slug}` : `/services/${categorys[indexCategory].slug}`,
        },
      });
    });
  });
};
