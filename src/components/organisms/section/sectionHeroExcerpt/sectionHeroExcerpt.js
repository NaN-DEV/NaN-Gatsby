// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Title, Excerpt } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';

// CREATE NEW COMPONENT

const SectionHeroComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <Section theme={settings} id={id} key={key} style={parameters.style} className={parameters.className}>
      <Row newClass="row">
        <Title theme={settings}>{content.title ? content.title : 'Add title'}</Title>
        <Excerpt theme={settings}>{content.excerpt ? content.excerpt : 'Add excerpt'}</Excerpt>
      </Row>
    </Section>
  );
};

// PropTpyes
SectionHeroComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTypes default
SectionHeroComponent.defaultProps = {
  id: null,
  key: null,
  content: false,
  parameters: false,
};

export default SectionHeroComponent;
