// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Create new component
const servicesPageComponent = props => {
  const { datoCmsServiceCategory, allDatoCmsService, allDatoCmsServiceCategory, datoCmsPage } = props.data;

  return (
    <>
      <Layout
        content={{
          title: datoCmsServiceCategory ? datoCmsServiceCategory.seo.title : datoCmsPage.seo.title,
          description: datoCmsServiceCategory ? datoCmsServiceCategory.seo.description : datoCmsPage.seo.description,
          image: datoCmsServiceCategory ? datoCmsServiceCategory.seo.image.url : datoCmsPage.seo.image.url,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title: props.pageContext.id === 'all' ? datoCmsPage.title : datoCmsServiceCategory.title,
            excerpt: props.pageContext.id === 'all' ? datoCmsPage.excerpt : datoCmsServiceCategory.excerpt,
          }}
        />

        <Section
          type="categoryServices"
          parameters={{
            skip: props.pageContext.skip,
            slug: props.pageContext.slug,
            limit: props.pageContext.limit,
            page: props.pageContext.currentPage,
            id: props.pageContext.id === 'all' ? 'all' : datoCmsServiceCategory.id,
          }}
          content={{ category: allDatoCmsServiceCategory.nodes, articles: allDatoCmsService.nodes }}
        />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query servicesPageComponentGraphql($id: String) {
    datoCmsServiceCategory(id: { eq: $id }) {
      id
      slug
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
    datoCmsPage(tag: { title: { eq: "services" } }) {
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
    allDatoCmsService {
      nodes {
        id
        slug
        tag {
          title
        }
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
        excerpt
        tag {
          id
          title
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default servicesPageComponent;
