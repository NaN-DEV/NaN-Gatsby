// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Icon from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Search from './search/search';
import Triangle from './triangle/triangle';

// CREATE NEW COMPONENT

const IconComponent = props => {
  const {
    search,
    link,
    triangle,
    secondary,
    width,
    height,
    widthMobile,
    heightMobile,
    className,
  } = props;
  if (search) {
    if (link) {
      return (
        <Icon
          secondary={secondary ? 1 : 0}
          width={width}
          height={height}
          width_mobile={widthMobile}
          height_mobile={heightMobile}
          theme={theme}
          className={className}
        >
          <Link to={link}>
            <Search />
          </Link>
        </Icon>
      );
    }
    return (
      <Icon
        secondary={secondary ? 1 : 0}
        width={width}
        height={height}
        width_mobile={widthMobile}
        height_mmobile={heightMobile}
        theme={theme}
        className={className}
      >
        <Search />
      </Icon>
    );
  }
  if (triangle) {
    return (
      <Icon
        secondary={secondary ? 1 : 0}
        triangle={triangle ? 1 : 0}
        width={width}
        height={height}
        width_mobile={widthMobile}
        height_mmobile={heightMobile}
        theme={theme}
        className={className}
      >
        <Triangle secondary={secondary} className={className} />
      </Icon>
    );
  }
  return (
    <>
      <p>problem icon</p>
    </>
  );
};

export default IconComponent;

IconComponent.propTypes = {
  link: PropTypes.string,
  search: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  triangle: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  widthMobile: PropTypes.string,
  heightMobile: PropTypes.string,
};

IconComponent.defaultProps = {
  link: null,
  width: null,
  height: null,
  search: false,
  triangle: false,
  className: null,
  secondary: false,
  widthMobile: null,
  heightMobile: null,
};
