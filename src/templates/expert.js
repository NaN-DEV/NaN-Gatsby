// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const expertPage = ({ data }) => {
  const { id, joke, name, lastName, image, hello } = data.datoCmsExpert;

  return (
    <>
      <Layout theme={settings} key="expertPage">
        <Section half type="hero" color="primary" title="Co robię <strong>na codzień ?</strong>" joke={joke} />
        <Section type="identificationExpert" id={id} image={image} nameExpert={`${name} ${lastName}`} description={hello} />
      </Layout>
    </>
  );
};

export const expertPageQuery = graphql`
  query expertPageQuery($id: String) {
    datoCmsExpert(id: { eq: $id }) {
      id
      slug
      name
      joke
      hello
      lastName
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default expertPage;
