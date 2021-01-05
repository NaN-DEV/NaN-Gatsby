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
  const allSkils = allDatoCmsSkil.nodes.filter(category => category.tag.title === 'ALL')[0];

  return (
    <>
      <Layout
        theme={settings}
        parameters={{
          title: datoCmsSkil ? datoCmsSkil.seo.title : allSkils.seo.title,
          description: datoCmsSkil ? datoCmsSkil.seo.description : allSkils.seo.description,
          image: datoCmsSkil ? datoCmsSkil.seo.image.url : allSkils.seo.image.url,
        }}
      >
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            title: props.pageContext.id === 'all' ? allSkils.title : datoCmsSkil.title,
            excerpt: props.pageContext.id === 'all' ? allSkils.excerpt : datoCmsSkil.excerpt,
          }}
        />

        <Section
          type="fullExcerpt"
          id={`${props.pageContext.id}-fullExcerpt-id`}
          key={`${props.pageContext.id}-fullExcerpt-key`}
          content={{
            title: 'Hej !',
            description: props.pageContext.id === 'all' ? allSkils.description : datoCmsSkil.description,
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
        description
        tag {
          id
          title
        }
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
  }
`;

// EXPORT NEW COMPONENT
export default partnersPageComponent;
