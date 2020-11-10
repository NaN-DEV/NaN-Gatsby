// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Sell from './sell/sell';
import Hero from './hero/hero';
import SellAds from './sellAds/sellAds';
import FullText from './fullText/fullText';
import Triangle from './triangle/triangle';
import Scrambler from './scramblerText/scramblerText';
import NotFoundPage from './notFoundPage/notFoundPage';
import IdentificationProject from './identificationProject/identificationProject';

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { id, half, size, type, title, color, content, newClass, newStyle, children, description, image, brand, nameProject, options } = props;

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
            <Hero id={id} half={half} size={size} color={color} title={title} newClass={newClass} newStyle={newStyle} description={description} />
          </>
        );
      case 'identificationProject':
        return (
          <>
            <IdentificationProject
              id={id}
              half={half}
              size={size}
              image={image}
              color={color}
              title={title}
              brand={brand}
              newClass={newClass}
              newStyle={newStyle}
              nameProject={nameProject}
              description={description}
            />
          </>
        );
      case 'fullText':
        return (
          <>
            <FullText id={id} color={color} title={title} description={description} options={options} newClass={newClass} newStyle={newStyle} />
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
  half: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  nameProject: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  brand: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

SectionComponent.defaultProps = {
  id: null,
  type: null,
  title: null,
  half: null,
  image: null,
  brand: null,
  size: null,
  content: null,
  newClass: null,
  newStyle: null,
  children: null,
  options: null,
  color: null,
  description: null,
  nameProject: null,
};

export default SectionComponent;
