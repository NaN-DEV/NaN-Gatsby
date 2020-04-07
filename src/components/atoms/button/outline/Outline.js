// IMPORT PLUGIN START
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE START
import { Button, StyledLink } from './style/style';
import theme from '../../../../layouts/theme/settings2';

// CREATE NEW COMPONENT
const ButtonOutlineComponent = props => {
  const { link, title, secondary, style, className } = props;

  return (
    <>
      {link ? (
        <>
          <StyledLink
            to={link}
            theme={theme}
            style={style}
            className={className}
            secondary={secondary ? 1 : 0}
          >
            {title}
          </StyledLink>
        </>
      ) : (
        <>
          <Button
            to={link}
            theme={theme}
            style={style}
            className={className}
            secondary={secondary ? 1 : 0}
          >
            {title}
          </Button>
        </>
      )}
    </>
  );
};

export default ButtonOutlineComponent;

ButtonOutlineComponent.propTypes = {
  link: PropTypes.bool,
  style: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ButtonOutlineComponent.defaultProps = {
  link: null,
  style: null,
  className: null,
  secondary: false,
};
