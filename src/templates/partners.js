// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Import settings style
import settings from '../layouts/settings/settings';

// Create new component
const partnersPageComponent = props => {
  const { datoCmsSkil, allDatoCmsExpert, allDatoCmsSkil } = props.data;
  return (
    <>
      <Layout theme={settings} key="projectPage">
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            excerpt: props.pageContext.id === 'all' ? 'Lista osób których chętnie polecam klientom' : datoCmsSkil.excerpt,
            title: props.pageContext.id === 'all' ? 'Fachowcy godni polecenia' : datoCmsSkil.title,
          }}
        />

        <Section
          type="fullExcerpt"
          id={`${props.pageContext.id}-fullExcerpt-id`}
          key={`${props.pageContext.id}-fullExcerpt-key`}
          content={{
            title: 'Hej !',
            description:
              props.pageContext.id === 'all'
                ? 'Hej , sam jako programista sporo poświęcam czasu na naukę programowania i poprostu nie ma moliwości abym był dobry w UX czy SEO dla tego te aby obsłuyć kompleksowo klientów którzy nie znają brany it '
                : datoCmsSkil.description,
          }}
        />

        <Section
          type="categoryPartners"
          parameters={{
            skip: props.pageContext.skip,
            slug: props.pageContext.slug,
            limit: props.pageContext.limit,
            page: props.pageContext.currentPage,
          }}
          key={`${props.pageContext.id}-categoryServices-key`}
          content={{ category: allDatoCmsSkil.nodes, articles: allDatoCmsExpert.nodes }}
          id={props.pageContext.id === 'all' ? `${props.pageContext.id}-categoryServices-id` : datoCmsSkil.id}
        />
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query partnersPageComponentGraphql($id: String) {
    datoCmsSkil(id: { eq: $id }) {
      id
      title
      excerpt
      description
    }
    allDatoCmsExpert {
      nodes {
        id
        name
        surname
        slug
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
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
export default partnersPageComponent;
