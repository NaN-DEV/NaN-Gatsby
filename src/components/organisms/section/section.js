// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Sell from './sell/sell';
import Hero from './hero/hero';
import SellAds from './sellAds/sellAds';
import Triangle from './triangle/triangle';
import Scrambler from './sscramblerText/sscramblerText';
import NotFoundPage from './notFoundPage/notFoundPage';

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { type, title, description, size, color, newClass, newStyle, children, content, id } = props;

  // SELECT SECTION
  const renderSwitchWrap = wrap => {
    switch (wrap) {
      case 'scrambler':
        return (
          <>
            <Scrambler id={id} size={size} color={color} title={title} newClass={newClass} newStyle={newStyle}>
              {children}
            </Scrambler>
          </>
        );
      case 'triangle':
        return (
          <>
            <Triangle id={id} size={size} color={color} title={title} content={content} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'sell':
        return (
          <>
            <Sell id={id} size={size} color={color} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'sellAds':
        return (
          <>
            <SellAds id={id} size={size} color={color} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'notFoundPage':
        return (
          <>
            <NotFoundPage id={id} size={size} color={color} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'hero':
        return (
          <>
            <Hero id={id} size={size} color={color} title={title} newClass={newClass} newStyle={newStyle} description={description} />
          </>
        );
      default:
        return 'Please add type section :)';
    }
  };

  return renderSwitchWrap(type);
};

// PropTpyes
SectionComponent.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  description: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

SectionComponent.defaultProps = {
  id: null,
  type: null,
  title: null,
  size: 'full',
  content: null,
  newClass: null,
  newStyle: null,
  children: null,
  color: 'primary',
  description: null,
};

export default SectionComponent;
