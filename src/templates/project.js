// Import plugin
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Create new component
const projectPageComponent = ({ data }) => {
  const { problem, link, image, projectMenager, target, process, score, technology, scoreStat, seo } = data.datoCmsProject;

  return (
    <>
      <Layout content={{ title: seo.title, description: seo.description, image: seo.image.url }}>
        <Section
          type="excerpt"
          content={{
            excerpt: problem,
          }}
        />

        <Section type="idProject" content={{ link, image, projectMenager }} />
        <Section type="text" parameters={{ theme: 'light', id: 'fullTextCel' }} content={{ title: 'cel', description: target }} />
        <Section type="text" parameters={{ theme: 'dark', id: 'fullTextProces' }} content={{ title: 'proces', description: process }} />
        <Section type="icon" parameters={{ theme: 'light', id: 'fullIconTechnology' }} content={{ title: 'technologie', icons: technology }} />
        <Section
          type="text"
          parameters={{ theme: 'dark', id: 'fullIconScore' }}
          content={{ title: 'wynik', description: score, options: scoreStat }}
        />
      </Layout>
    </>
  );
};

// GraphQL
export const projectPageQuery = graphql`
  query projectPageComponentGraphql($id: String) {
    datoCmsProject(id: { eq: $id }) {
      link
      score
      target
      problem
      process
      image {
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }

      technology {
        icon
      }
      scoreStat {
        id
        unit
        value
        percent
        description
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

// Export new component
export default projectPageComponent;
