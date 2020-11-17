// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Sell from './sell/sell';
import Hero from './hero/hero';
import Skils from './skils/skils';
import SellAds from './sellAds/sellAds';
import FullText from './fullText/fullText';
import Triangle from './triangle/triangle';
import HeroClassic from './heroClassic/heroClassic';
import Scrambler from './scramblerText/scramblerText';
import NotFoundPage from './notFoundPage/notFoundPage';
import ItemCategory from './itemCategory/itemCategory';
import ServiceContent from './serviceContent/serviceContent';
import IdentificationExpert from './identificationExpert/identificationExpert';
import IdentificationProject from './identificationProject/identificationProject';

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const {
    id,
    key,
    big,
    items,
    half,
    size,
    type,
    joke,
    image,
    brand,
    title,
    color,
    content,
    newClass,
    newStyle,
    children,
    category,
    description,

    nameProject,
    nameExpert,
    options,
  } = props;

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
            <Hero
              id={id}
              joke={joke}
              half={half}
              size={size}
              color={color}
              title={title}
              newClass={newClass}
              newStyle={newStyle}
              description={description}
            />
          </>
        );
      case 'heroClassic':
        return (
          <>
            <HeroClassic id={id} color={color} newClass={newClass} newStyle={newStyle} title={title} description={description} />
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
      case 'identificationExpert':
        return (
          <>
            <IdentificationExpert
              id={id}
              image={image}
              color={color}
              newClass={newClass}
              newStyle={newStyle}
              nameExpert={nameExpert}
              description={description}
            />
          </>
        );
      case 'fullText':
        return (
          <>
            <FullText
              id={id}
              big={big}
              key={key}
              color={color}
              title={title}
              options={options}
              newClass={newClass}
              newStyle={newStyle}
              description={description}
            />
          </>
        );
      case 'skils':
        return (
          <>
            <Skils content={content} color={color} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'itemCategory':
        return (
          <>
            <ItemCategory id={id} key={key} items={items} category={category} newClass={newClass} newStyle={newStyle} />
          </>
        );
      case 'serviceContent':
        return (
          <>
            <ServiceContent id={id} newClass={newClass} newStyle={newStyle} content={content} />
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
  joke: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  nameProject: PropTypes.string,
  nameExpert: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  key: null,
  half: null,
  size: null,
  joke: null,
  type: null,
  item: null,
  title: null,
  image: null,
  brand: null,
  color: null,
  options: null,
  content: null,
  newClass: null,
  newStyle: null,
  children: null,
  nameExpert: null,
  description: null,
  nameProject: null,
};

export default SectionComponent;
