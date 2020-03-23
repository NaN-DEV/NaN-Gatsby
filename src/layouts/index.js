// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE
import GlobalStyle from './theme/globalStyle';

// IMPORT SETTINGS STYLE
import { theme } from './theme/settings';

// IMPORT COMPONENT
import Footer from '../components/organisms/footer/footer';

const Root = () => {
  const FooterLink = [
    { id: 'Polityka-prywatności-link', link: '/', title: 'Polityka Prywatności' },
    { id: 'regulamin-link', link: '/', title: 'Regulamin' },
    { id: 'kontak-link', link: '/', title: 'Kontakt' },
  ];
  return (
    <>
      <GlobalStyle theme={theme} />
      <p>
        Lorem ipsumElitr dolor magna et elitr duo duo gubergren elitr ipsum, consetetur ipsum
        consetetur labore ipsum at sea. Amet elitr sed nonumy sanctus labore ea, sit diam takimata
        labore aliquyam lorem. Sit sed dolor eirmod nonumy dolores sadipscing eos ea, nonumy eos
        diam accusam stet dolores dolores, dolores voluptua erat amet.
      </p>
      <Footer link={FooterLink} />
    </>
  );
};

export default Root;
