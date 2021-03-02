// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import Article from './style/style';

// Import setting style
import settings from '../../../../layouts/settings/settings';

// Create new component
const articleShortComponent = props => {
  const { content, parameters } = props;

  return (
    <Article theme={{ settings }} to={parameters.to} title={content.title}>
      {content.title}
    </Article>
  );
};

// PropTpyes
articleShortComponent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
  }),
  parameters: PropTypes.shape({
    to: PropTypes.string,
  }),
};

// PropTpyes default
articleShortComponent.defaultProps = {
  content: PropTypes.shape({
    title: 'add title',
  }),
  parameters: PropTypes.shape({
    to: '/',
  }),
};

export default articleShortComponent;
