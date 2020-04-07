// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE
import GlobalStyle from './theme/globalStyle';

// IMPORT SETTINGS STYLE
import theme from './theme/settings2';

// IMPORT COMPONENT
import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';

const Root = props => {
  const { children } = props;
  const FooterLink = [
    { id: 'kontak-link', link: '/', title: 'Kontakt' },
    { id: 'regulamin-link', link: '/', title: 'Regulamin' },
    { id: 'Polityka-prywatności-link', link: '/', title: 'Polityka Prywatności' },
  ];
  return (
    <>
      <GlobalStyle theme={theme} />

      <Header />
      {children}
      <Footer links={FooterLink} />
    </>
  );
};

export default Root;
