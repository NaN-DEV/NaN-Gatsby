// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Create new component
const NotFoundPage = ({ data }) => {
  return (
    <Layout
      content={{
        title: data.datoCmsPage.seo.title,
        image: data.datoCmsPage.seo.image.url,
        description: data.datoCmsPage.seo.description,
      }}
    >
      <Section
        type="excerpt"
        content={{
          title: data.datoCmsPage.title,
          excerpt: data.datoCmsPage.excerpt,
        }}
      />
      <Section type="notFoundPage" />
    </Layout>
  );
};

// Query GraphQL
export const NotFoundPageQuery = graphql`
  query {
    datoCmsPage(tag: { title: { eq: "not-found-404" } }) {
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
  }
`;

// export

export default NotFoundPage;
