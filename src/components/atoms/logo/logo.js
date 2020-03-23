// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Brand from './style/style';

// IMPORT SETTINGS STYLE
import { theme } from '../../../layouts/theme/settings';

// IMPORT IMAGES
import LogoSvg from '../../../assets/logo/logo.svg';

// CREATE NEW COMPONENT
const Logo = props => {
  const { link } = props;
  return (
    <Brand theme={theme}>
      <Link to={link} title="NaN JavaScript Developer" alt="Logo NaN">
        <LogoSvg />
      </Link>
    </Brand>
  );
};

export default Logo;

Logo.propTypes = {
  link: PropTypes.string,
};

Logo.defaultProps = {
  link: '/',
};
