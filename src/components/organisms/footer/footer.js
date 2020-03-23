// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Footer from './style/style';

// IMPORT SETTINGS STYLE
import { theme } from '../../../layouts/theme/settings';

// IMPORT COMPONENT
import Logo from '../../atoms/logo/logo';
import List from '../../atoms/list/list';

// CREATE NEW COMPONENT
const FooterComponent = props => {
  const { links, copyright } = props;
  return (
    <Footer theme={theme}>
      <div className="row">
        <Logo className="logo" height="30px" link="/" />
        <p>{copyright}</p>
        <List level items={links} />
      </div>
    </Footer>
  );
};

export default FooterComponent;

FooterComponent.propTypes = {
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

FooterComponent.defaultProps = {
  copyright: 'Copyright 2016-2020',
};
