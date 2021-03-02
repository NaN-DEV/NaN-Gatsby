// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Sell from './sectionSell/sectionSell';

import IdExpert from './sectionIdExpert/sectionIdExpert';

import Text from './sectionText/sectionText';
import Icon from './sectionIcon/sectionIcon';
import Skills from './sectionSkills/sectionSkills';
import SectionContact from './sectionContact/sectionContact';
import Excerpt from './sectionExcerpt/sectionExcerpt';

import Scrambler from './sectionScramblerText/sectionScramblerText';
import NotFoundPage from './sectionNotFoundPage/sectionNotFoundPage';
import Point from './sectionPoint/sectionPoint';
import CategoryServices from './sectionCategoryServices/sectionCategoryServices';
import CategoryPortfolio from './sectionCategoryPortfolio/sectionCategoryPortfolio';
import IdProject from './sectionIdProject/sectionIdProject';

// Create new component
const SectionComponent = props => {
  const { type, parameters, content } = props;

  switch (type) {
    case 'scrambler':
      return <Scrambler content={content} parameters={parameters} />;
    case 'sell':
      return <Sell />;
    case 'notFoundPage':
      return <NotFoundPage />;
    case 'idProject':
      return <IdProject content={content} />;
    case 'idExpert':
      return <IdExpert content={content} parameters={parameters} />;
    case 'text':
      return <Text content={content} parameters={parameters} />;
    case 'icon':
      return <Icon content={content} parameters={parameters} />;
    case 'excerpt':
      return <Excerpt content={content} />;
    case 'skills':
      return <Skills content={content} />;
    case 'categoryServices':
      return <CategoryServices parameters={parameters} content={content} />;
    case 'categoryPortfolio':
      return <CategoryPortfolio parameters={parameters} content={content} />;
    case 'point':
      return <Point content={content} />;

    case 'contact':
      return <SectionContact content={content} />;
    default:
      return 'Please add type section :)';
  }
};

// PropTpyes
SectionComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SectionComponent;
