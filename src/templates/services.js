// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const servicesPageComponent = props => {
  const { datoCmsServiceCategory, allDatoCmsService, allDatoCmsServiceCategory, datoCmsServicesCategory } = props.data;

  return (
    <>
      <Layout
        theme={settings}
        parameters={{
          title: datoCmsServiceCategory ? datoCmsServiceCategory.seo.title : datoCmsServicesCategory.seo.title,
          description: datoCmsServiceCategory ? datoCmsServiceCategory.seo.description : datoCmsServicesCategory.seo.description,
          image: datoCmsServiceCategory ? datoCmsServiceCategory.seo.image.url : datoCmsServicesCategory.seo.image.url,
        }}
      >
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            title: props.pageContext.id === 'all' ? datoCmsServicesCategory.title : datoCmsServiceCategory.title,
            excerpt: props.pageContext.id === 'all' ? datoCmsServicesCategory.excerpt : datoCmsServiceCategory.excerpt,
          }}
        />

        <Section
          type="fullExcerpt"
          id={`${props.pageContext.id}-fullExcerpt-id`}
          key={`${props.pageContext.id}-fullExcerpt-key`}
          content={{
            title: 'Hej !',
            description: props.pageContext.id === 'all' ? datoCmsServicesCategory.description : datoCmsServiceCategory.description,
          }}
        />

        <Section
          type="categoryServices"
          parameters={{
            skip: props.pageContext.skip,
            slug: props.pageContext.slug,
            limit: props.pageContext.limit,
            page: props.pageContext.currentPage,
          }}
          key={`${props.pageContext.id}-categoryServices-key`}
          content={{ category: allDatoCmsServiceCategory.nodes, articles: allDatoCmsService.nodes }}
          id={props.pageContext.id === 'all' ? `${props.pageContext.id}-categoryServices-id` : datoCmsServiceCategory.id}
        />

        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query servicesPageComponentGraphql($id: String) {
    datoCmsServiceCategory(id: { eq: $id }) {
      id
      title
      excerpt
      description
      seo {
        title
        twitterCard
        description
        image {
          id
          url
          author
        }
      }
    }
    allDatoCmsService {
      nodes {
        id
        title
        slug
        tag {
          title
        }
        image {
          alt
          title
          url
          fluid {
            ...GatsbyDatoCmsFluid
          }
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
    datoCmsServicesCategory {
      id
      title
      excerpt
      description
      seo {
        title
        twitterCard
        description
        image {
          id
          url
          author
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default servicesPageComponent;
