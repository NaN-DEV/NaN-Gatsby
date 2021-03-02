// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Title, Excerpt } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Create new component
const SectionFullExcerptComponent = props => {
  const { content } = props;

  return (
    <>
      <Section theme={{ settings }}>
        <Title theme={{ settings }}>{content.title}</Title>
        {content.excerpt && <Excerpt theme={{ settings }}>{content.excerpt}</Excerpt>}
      </Section>
    </>
  );
};

// PropTpyes
SectionFullExcerptComponent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string,
  }),
};

// PropTypes default
SectionFullExcerptComponent.defaultProps = {
  content: PropTypes.shape({
    title: 'add title',
    excerpt: false,
  }),
};

export default SectionFullExcerptComponent;
