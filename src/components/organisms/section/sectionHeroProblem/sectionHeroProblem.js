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

const SectionHeroProblemComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} id={id} key={key} colorStyle={parameters.color} style={parameters.style} className={parameters.newClass}>
        <Row newClass="row">
          <Title dangerouslySetInnerHTML={{ __html: content.title }} theme={settings} />
          <Description theme={settings}>{content.description}</Description>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroProblemComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTypes
SectionHeroProblemComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default SectionHeroProblemComponent;
