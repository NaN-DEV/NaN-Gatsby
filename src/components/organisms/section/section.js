import React from 'react';

// IMPORT COMPONENT START
import Hero from './hero/hero';
import Triangle from './triangle/triangle';
import Sell from './sell/Sell';

// CREATE NEW COMPONENT
const SectionComponent = props => {
  const { content } = props;
  return (
    <>
      {content.map((item, i) => {
        if (item.type === 'HeroFull' || item.type === 'HeroHalf' || item.type === 'HeroText') {
          return <Hero content={item} key={item.id} />;
        }
        if (item.type === 'Triangle') {
          return <Triangle content={content} key={item.id} index={i} />;
        }
        if (item.type === 'Sell') {
          return <Sell content={item} key={item.id} index={i} />;
        }
        return <p>secton problem</p>;
      })}
    </>
  );
};

export default SectionComponent;
