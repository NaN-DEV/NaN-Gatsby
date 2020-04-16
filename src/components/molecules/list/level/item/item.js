// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../../../../../layouts/theme/settings2';
// IMPORT STYLE
import Li from './style/style';

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { link, title, secondary, length } = props;
  return (
    <>
      {link ? (
        <Li theme={theme} secondary={secondary ? 1 : 0} length={length}>
          <Link to={link}>{title}</Link>
        </Li>
      ) : (
        <Li theme={theme} secondary={secondary ? 1 : 0}>
          {title}
        </Li>
      )}
    </>
  );
};

export default LiComponent;

LiComponent.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

LiComponent.defaultProps = {
  link: '/',
};
