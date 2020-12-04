// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import BoxArticle from './boxArticle/boxArticle';

// CREATE NEW COMPONENT
const BoxComponent = props => {
  const { type, id, key, to, title, image, newClass, newStyle } = props;
  switch (type) {
    case 'article':
      return <BoxArticle id={id} to={to} key={key} title={title} image={image} newStyle={newStyle} className={newClass} />;

    default:
      return 'Please add type box :)';
  }
};

// PropTpyes
BoxComponent.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  key: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

BoxComponent.defaultProps = {
  id: null,
  to: null,
  key: null,
  type: null,
  title: null,
  image: null,
  onClick: null,
  newClass: null,
  newStyle: null,
};

export default BoxComponent;
