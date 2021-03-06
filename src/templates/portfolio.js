// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Create new component
const PortfolioPageComponent = props => {
  const { pageContext, data } = props;
  const { skip, slug, limit, currentPage, id } = pageContext;
  const { datoCmsPortfolio, datoCmsPage, allDatoCmsProject, allDatoCmsPortfolio } = data;

  return (
    <>
      <Layout
        content={{
          title: datoCmsPortfolio ? datoCmsPortfolio.seo.title : datoCmsPage.seo.title,
          description: datoCmsPortfolio ? datoCmsPortfolio.seo.description : datoCmsPage.seo.description,
          image: datoCmsPortfolio ? datoCmsPortfolio.seo.image.url : datoCmsPage.seo.image.url,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title: id === 'all' ? datoCmsPage.title : datoCmsPortfolio.title,
            excerpt: id === 'all' ? datoCmsPage.excerpt : datoCmsPortfolio.excerpt,
          }}
        />

        <Section
          type="categoryPortfolio"
          parameters={{
            skip,
            slug,
            limit,
            page: currentPage,
            id: id === 'all' ? 'all' : datoCmsPortfolio.id,
          }}
          content={{ category: allDatoCmsPortfolio.nodes, articles: allDatoCmsProject.nodes }}
        />
      </Layout>
    </>
  );
};

export const PortfolioPageQuery = graphql`
  query PortfolioPageComponentGraphql($id: String) {
    datoCmsPortfolio(id: { eq: $id }) {
      id
      title
      excerpt
      seo {
        title
        description
        image {
          url
        }
      }
    }
    datoCmsPage(tag: { title: { eq: "portfolio" } }) {
      title
      excerpt
      seo {
        title
        description
        image {
          url
        }
      }
    }
    allDatoCmsProject {
      nodes {
        slug
        title
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
        excerpt
        tag {
          title
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default PortfolioPageComponent;
