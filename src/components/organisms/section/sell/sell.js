// IMPORT PLUGIN
import React from 'react';

import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';

// CREATE NEW COMPONENT

const SectionHeroComponent = props => {
  const { id, color, newClass, newStyle } = props;

  return (
    <>
      <Section id={id} color={color} theme={settings} style={newStyle} className={newClass}>
        <Row className="row">dcd</Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroComponent.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionHeroComponent.defaultProps = {
  id: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
};

export default SectionHeroComponent;
