// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Carousel from '../components/molecules/carusel/carusel';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const projectPageComponent = ({ data }) => {
  const { id, problem, link, image, projectMenager, target, process, score, job, jobTechnology, scoreStat, seo } = data.datoCmsProject;

  return (
    <>
      <Layout theme={settings} parameters={{ title: seo.title, description: seo.description, image: seo.image.url }}>
        <Section
          type="heroProblem"
          id={`${id}-heroProblem-id`}
          key={`${id}-heroProblem-key`}
          parameters={{ color: 'primary' }}
          content={{ title: 'Problem', description: problem }}
        />
        <Section
          type="identificationProject"
          content={{ link, image, projectMenager }}
          parameters={{ color: 'primary' }}
          id={`${id}-identificationProject-id`}
          key={`${id}-identificationProject-key`}
        />
        <Section
          type="fullText"
          id={`${id}-fullText-cel-id`}
          key={`${id}-fullText-cel-key`}
          parameters={{ color: 'tertiary_4' }}
          content={{ title: 'Cel', description: target }}
        />
        <Section
          type="fullText"
          id={`${id}-fullText-proces-id`}
          key={`${id}-fullText-proces-key`}
          parameters={{ color: 'tertiary_3' }}
          content={{ title: 'Proces', description: process }}
        />
        <Section
          type="fullText"
          id={`${id}-fullText-wynik-id`}
          key={`${id}-fullText-wynik-key`}
          parameters={{ color: 'tertiary_2' }}
          content={{ title: 'Wynik', description: score, options: scoreStat }}
        />
        <Section
          type="fullText"
          id={`${id}-fullText-prace-id`}
          key={`${id}-fullText-prace-key`}
          parameters={{ color: 'tertiary_1' }}
          content={{ title: 'Prace', description: job, options: jobTechnology }}
        />

        <Carousel id={`${id}-carousel-prace-id`} key={`${id}-carousel-prace-key`} content={{ nodes: data.allDatoCmsProject.nodes }} />

        <Section type="sellAds" />
      </Layout>
    </>
  );
};

// QUERY GRAPHQL

export const projectPageQuery = graphql`
  query projectPageComponentGraphql($id: String) {
    datoCmsProject(id: { eq: $id }) {
      id
      job
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
      projectMenager {
        name
        surname
        image {
          fluid(maxWidth: 220) {
            ...GatsbyDatoCmsFluid
          }
        }
      }

      jobTechnology {
        id
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
        twitterCard
        image {
          id
          url
        }
      }
    }
    allDatoCmsProject {
      nodes {
        id
        slug
        title
        category {
          id
          slug
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default projectPageComponent;
