// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT COMPONENT

import Section from '../components/organisms/section/section';

// CREATE NEW COMPONENT
const IndexPage = ({ data }) => {
  const sectionOne = [
    {
      id: 'sectionHeroHome',
      type: 'HeroFull',
      color: 'primary',
      arrow: 'triangleSection1',
      textBold: 'Hello ',
      textNormal: 'wolrd !',
    },
  ];

  const sectionTwo = [
    {
      id: 'triangleSection1',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'FRONT END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection2',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection3',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection4',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection5',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection6',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection7',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection8',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection9',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection10',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection11',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
    {
      id: 'triangleSection12',
      type: 'Triangle',
      title:
        'Co to jest UX / UI ? Oraz czemu te zagadnienie jest aż tak ważne przy projektowaniu stron ?',
      category: 'BACK END DEVELOPER',
      image: data.file.childImageSharp.fixed,
      link: '/box',
    },
  ];
  const sectionTre = [
    {
      id: 'sellSection1',
      type: 'Sell',
      color: 'dark',
      textBold: 'Hej! ',
      textNormal: 'zróbmy coś razem ...',
      title: 'Wyceń Twój pomysł',
      link: '/sell',
    },
  ];
  return (
    <>
      <Section content={sectionOne} />
      <Section content={sectionTwo} />
      <Section content={sectionTre} />
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "bitmap.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
