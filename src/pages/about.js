// Import plugin
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Create new component
const IndexPage = ({ data }) => {
  const { title, image, name, surname, description, skills, stack } = data.datoCmsAbout;
  return (
    <>
      <Layout
        content={{
          title: data.datoCmsAbout.seo.title,
          image: data.datoCmsAbout.seo.image.url,
          description: data.datoCmsAbout.seo.description,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title,
          }}
        />
        <Section type="idExpert" content={{ image, name, surname, description }} />
        <Section type="skills" content={{ skills }} />
        <Section type="text" content={{ title: 'skills', tags: stack }} parameters={{ theme: 'dark' }} />
      </Layout>
    </>
  );
};

// GraphQl
export const query = graphql`
  query {
    datoCmsAbout {
      id
      title
      name
      surname
      description
      skills {
        id
        time
        description
        skill {
          title
        }
      }
      stack {
        id
        title
      }
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      seo {
        title
        description
        image {
          id
          url
        }
      }
    }
  }
`;

// Export component
export default IndexPage;
