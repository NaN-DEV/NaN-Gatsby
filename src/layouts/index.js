// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from './settings/settings';

// IMPORT STYLE
import GlobalStyle from './style/style';

// IMPORT COMPONENT

import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';
import Animation from '../components/atoms/animation/animation';

// CREATE NEW COMPONENT
const Root = props => {
  const { children } = props;
  const test = ['hero', 'article-triangle-0', 'article-triangle-1', 'article-triangle-2', 'article-triangle-3', 'sell'];
  return (
    <>
      <GlobalStyle theme={settings} />
      <Header />
      <Animation type="scrollNextElement" allSlide={test} />
      {children}
      <Footer />
    </>
  );
};

// EXPORT NEW COMPONENT
export default Root;
