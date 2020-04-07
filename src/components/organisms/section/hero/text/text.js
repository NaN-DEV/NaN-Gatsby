// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE START
import Section from './style/style';

// CREATE NEW COMPONENT

const SectionText = props => {
  const { color, title, content } = props;
  return (
    <>
      <Section color={color}>
        <div className="row">
          <div className="left">
            <h1>{title}</h1>
          </div>
          <div className="right">{content}</div>
        </div>
      </Section>
    </>
  );
};

export default SectionText;
