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
  const postsPerPage = 9;
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
      path: i === 0 ? `/p` : `/p/${i + 1}`,
      component: require.resolve(`./src/templates/portfolio.js`),
      context: {
        id: 'all',
        title: false,
        slug: '/p',
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
        path: i === 0 ? `/p/${categorys[indexCategory].slug}` : `/p/${categorys[indexCategory].slug}/${i + 1}`,
        component: require.resolve(`./src/templates/portfolio.js`),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          id: categorys[indexCategory].id,
          slug: i === 0 ? `/p/${categorys[indexCategory].slug}` : `/p/${categorys[indexCategory].slug}`,
        },
      });
    });
  });

  // BUILD PAGE PROJECT
  queryResults.data.allDatoCmsProject.nodes.forEach((content, index) => {
    createPage({
      path: `p/p/${content.slug}`,
      component: require.resolve(`./src/templates/project.js`),
      context: { id: content.id, i: index },
    });
  });

  // BUILD PAGE SERVICES
  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `s/s/${content.slug}`,
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
      path: i === 0 ? `/s` : `/s/${i + 1}`,
      component: require.resolve(`./src/templates/services.js`),
      context: {
        id: 'all',
        title: false,
        slug: '/s',
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
        path: i === 0 ? `/s/${categorys[indexCategory].slug}` : `/s/${categorys[indexCategory].slug}/${i + 1}`,
        component: require.resolve(`./src/templates/services.js`),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          id: categorys[indexCategory].id,
          slug: i === 0 ? `/s/${categorys[indexCategory].slug}` : `/s/${categorys[indexCategory].slug}`,
        },
      });
    });
  });
};
