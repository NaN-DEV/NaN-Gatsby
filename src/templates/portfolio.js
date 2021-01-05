// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const portfolioPageComponent = props => {
  const { datoCmsPortfolio, allDatoCmsProject, allDatoCmsPortfolio } = props.data;
  const allCategory = allDatoCmsPortfolio.nodes.filter(category => category.tag.title === 'ALL')[0];

  return (
    <>
      <Layout
        theme={settings}
        parameters={{
          title: datoCmsPortfolio ? datoCmsPortfolio.seo.title : allCategory.seo.title,
          description: datoCmsPortfolio ? datoCmsPortfolio.seo.description : allCategory.seo.description,
          image: datoCmsPortfolio ? datoCmsPortfolio.seo.image.url : allCategory.seo.image.url,
        }}
      >
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            title: props.pageContext.id === 'all' ? allCategory.title : datoCmsPortfolio.title,
            excerpt: props.pageContext.id === 'all' ? allCategory.excerpt : datoCmsPortfolio.excerpt,
          }}
        />

        <Section
          type="fullExcerpt"
          id={`${props.pageContext.id}-fullExcerpt-id`}
          key={`${props.pageContext.id}-fullExcerpt-key`}
          content={{
            title: 'Hej !',
            description: props.pageContext.id === 'all' ? allCategory.description : datoCmsPortfolio.description,
          }}
        />

        <Section
          type="categoryPortfolio"
          parameters={{
            skip: props.pageContext.skip,
            slug: props.pageContext.slug,
            limit: props.pageContext.limit,
            page: props.pageContext.currentPage,
          }}
          key={`${props.pageContext.id}-categoryServices-key`}
          content={{ category: allDatoCmsPortfolio.nodes, articles: allDatoCmsProject.nodes }}
          id={props.pageContext.id === 'all' ? `${props.pageContext.id}-categoryServices-id` : datoCmsPortfolio.id}
        />

        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query portfolioPageComponentGraphql($id: String) {
    datoCmsPortfolio(id: { eq: $id }) {
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
    allDatoCmsProject {
      nodes {
        id
        link
        slug
        title
        image {
          url
          title
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
    allDatoCmsPortfolio {
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
export default portfolioPageComponent;
