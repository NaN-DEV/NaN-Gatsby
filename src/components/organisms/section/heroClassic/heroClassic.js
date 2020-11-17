// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Title, Description } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';

// CREATE NEW COMPONENT

const SectionHeroClassicComponent = props => {
  const { id, color, newStyle, newClass, title, description } = props;

  return (
    <>
      <Section
        color={color}
        theme={settings}
        newStyle={newStyle}
        className={newClass}
        id={`${id}-section-heroClassic-id`}
        key={`${id}-section-heroClassic-key`}
      >
        <Row newClass="row">
          <Title theme={settings} color={color}>
            {title}
          </Title>

          <Description theme={settings} color={color}>
            {description}
          </Description>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroClassicComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  description: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionHeroClassicComponent.defaultProps = {
  id: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
  description: 'Add descriptiond',
};

export default SectionHeroClassicComponent;
