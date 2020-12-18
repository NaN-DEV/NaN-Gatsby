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
  const { datoCmsServiceCategory, allDatoCmsService, allDatoCmsServiceCategory } = props.data;

  return (
    <>
      <Layout theme={settings}>
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            excerpt: props.pageContext.id === 'all' ? 'Chętnie pomogę !' : datoCmsServiceCategory.excerpt,
            title: props.pageContext.id === 'all' ? 'Planujesz jakiś projekt ?' : datoCmsServiceCategory.title,
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
                ? 'Rozumiem ze szukasz podwykonawcy do urzeczywistnienia Twoich marzeń ... spoko na luzie. Programowanie to moja pasja, tak wiec chętnie zaangażuje się w projekt. Poniej znajdziesz listę usług jakie moge dla Ciebie wykonać wraz z moimi przyjacółmi, jednak jeżeli czegoś Ci brakuje lub masz pytania śmiało pisz na hello@nan.nz ... nie gryzę jestem szczepiony i mam maseczkę, więc myślę że się dogadamy :)'
                : datoCmsServiceCategory.description,
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
    }
    allDatoCmsService {
      nodes {
        id
        title
        slug
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
  }
`;

// EXPORT NEW COMPONENT
export default servicesPageComponent;
