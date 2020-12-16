// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Sell from './sectionSell/sectionSell';
import HeroClassic from './heroClassic/heroClassic';
import SellAds from './sectionSellAds/sectionSellAds';
import NotFoundPage from './notFoundPage/notFoundPage';
import IdExpert from './sectionIdExpert/sectionIdExpert';
import Triangle from './sectionTriangle/sectionTriangle';
import FullText from './sectionFullText/sectionFullText';
import ListSkils from './sectionListSkils/sectionListSkils';
import ServiceContent from './serviceContent/serviceContent';
import SectionContact from './sectionContact/sectionContact';
import HeroExcerpt from './sectionHeroExcerpt/sectionHeroExcerpt';
import FullExcerpt from './sectionFullExcerpt/sectionFullExcerpt';
import HeroProblem from './sectionHeroProblem/sectionHeroProblem';
import Scrambler from './sectionScramblerText/sectionScramblerText';
import CategoryPartners from './sectionCategoryPartners/sectionCategoryPartners';
import CategoryServices from './sectionCategoryServices/sectionCategoryServices';
import CategoryPortfolio from './sectionCategoryPortfolio/sectionCategoryPortfolio';
import IdentificationProject from './sectionIdentificationProject/sectionIdentificationProject';

// Create new component
const SectionComponent = props => {
  const { id, key, type, title, color, newClass, newStyle, description, parameters, content } = props;

  // Select section
  const renderSwitchWrap = wrap => {
    switch (wrap) {
      case 'scrambler':
        return (
          <>
            <Scrambler id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'triangle':
        return (
          <>
            <Triangle id={id} content={content} parameters={parameters} />
          </>
        );
      case 'sell':
        return (
          <>
            <Sell id={id} key={key} />
          </>
        );
      case 'sellAds':
        return (
          <>
            <SellAds id={id} key={key} />
          </>
        );
      case 'notFoundPage':
        return (
          <>
            <NotFoundPage id={id} key={key} />
          </>
        );
      case 'heroClassic':
        return (
          <>
            <HeroClassic id={id} color={color} newClass={newClass} newStyle={newStyle} title={title} description={description} />
          </>
        );
      case 'heroExcerpt':
        return (
          <>
            <HeroExcerpt id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'heroProblem':
        return (
          <>
            <HeroProblem id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'identificationProject':
        return (
          <>
            <IdentificationProject id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'idExpert':
        return (
          <>
            <IdExpert id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'fullText':
        return (
          <>
            <FullText id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'fullExcerpt':
        return (
          <>
            <FullExcerpt id={id} key={key} content={content} parameters={parameters} />
          </>
        );
      case 'listSkils':
        return (
          <>
            <ListSkils id={id} key={key} content={content} parameters={parameters} />
          </>
        );

      case 'categoryServices':
        return (
          <>
            <CategoryServices id={id} key={key} parameters={parameters} content={content} />
          </>
        );
      case 'categoryPortfolio':
        return (
          <>
            <CategoryPortfolio id={id} key={key} parameters={parameters} content={content} />
          </>
        );
      case 'categoryPartners':
        return (
          <>
            <CategoryPartners id={id} key={key} parameters={parameters} content={content} />
          </>
        );
      case 'serviceContent':
        return (
          <>
            <ServiceContent id={id} newClass={newClass} newStyle={newStyle} content={content} />
          </>
        );
      case 'contact':
        return (
          <>
            <SectionContact id={id} key={key} parameters={parameters} content={content} />
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
};

// PropTyoes default
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
  nameExpert: null,
  description: null,
  nameProject: null,
};

export default SectionComponent;
