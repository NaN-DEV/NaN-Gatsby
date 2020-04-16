import React from 'react';

// IMPORT COMPONENT START
import Text from './text/text';
import Full from './full/full';

// IMPORT COMPONENT STOP

const SectionHeroComponent = props => {
  const { content } = props;
  if (content.type === 'HeroFull') {
    return <Full content={content} key={content.id} />;
  }
  if (content.type === 'HeroText') {
    return <Text content={content} key={content.id} />;
  }
  return <p>Not found section hero</p>;
};

export default SectionHeroComponent;
