// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from './settings/settings';

// IMPORT STYLE
import GlobalStyle from './style/style';

// IMPORT COMPONENT

import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';

// CREATE NEW COMPONENT
const Root = props => {
  const { children, color } = props;
  return (
    <>
      <GlobalStyle theme={settings} color={color} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

// EXPORT NEW COMPONENT
export default Root;
