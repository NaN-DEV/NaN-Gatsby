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
  const { joke } = data.datoCmsExpert;
  console.log(data.datoCmsExpert);
  return (
    <>
      <Layout theme={settings} key="expertPage">
        <Section half type="hero" color="primary" title="Co robię <strong>na codzień ?</strong>" joke={joke} />
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
      lastName
      image {
        fluid {
          base64
          tracedSVG
          width
          height
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default expertPage;
