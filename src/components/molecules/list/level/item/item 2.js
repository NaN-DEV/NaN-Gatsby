// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// IMPORT STYLE
import Li from './style/style';

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { link, title } = props;
  return (
    <>
      {link ? (
        <Li>
          <Link to={link}>{title}</Link>
        </Li>
      ) : (
        <Li>{title}</Li>
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
