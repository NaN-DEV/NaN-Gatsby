// IMPORT PLUGIN
import React from 'react';

// IMPORT COMPONENT
import ScrollNextElement from './scrollNextElement/scrollNextElement';

// CREATE NEW COMPONENT
const AnimationComponent = props => {
  const { type, allSlide } = props;

  switch (type) {
    case 'scrollNextElement':
      return <ScrollNextElement allSlide={allSlide} />;
    default:
      return 'Please add type animation :) ';
  }
};

// EXPORT NEW COMPONENT
export default AnimationComponent;
