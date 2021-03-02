// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import ArticleShort from './articleShort/articleShort';

// Create new component
const ArticleComponent = props => {
  const { type, content, parameters } = props;
  switch (type) {
    case 'articleShort':
      return <ArticleShort content={content} parameters={parameters} />;

    default:
      return 'Please add type box :)';
  }
};

// PropTpyes
ArticleComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ArticleComponent;
