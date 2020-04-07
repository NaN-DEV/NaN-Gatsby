// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Brand from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT IMAGES
import LogoSvg from '../../../assets/logo/logo.svg';

// CREATE NEW COMPONENT
const LogoComponent = props => {
  const { link, secondary, width, height, widthMobile, heightMobile } = props;
  return (
    <Brand
      theme={theme}
      secondary={secondary ? 1 : 0}
      width={width}
      height={height}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
    >
      <Link to={link} title="NaN JavaScript Developer" alt="Logo NaN">
        <LogoSvg />
      </Link>
    </Brand>
  );
};

export default LogoComponent;

LogoComponent.propTypes = {
  link: PropTypes.string,
  secondary: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  widthMobile: PropTypes.string,
  heightMobile: PropTypes.string,
};

LogoComponent.defaultProps = {
  link: '/',
  secondary: false,
  width: null,
  height: null,
  widthMobile: null,
  heightMobile: null,
};
