// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Box, Title, BigImage } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const IdentificationProject = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} id={id} key={key} style={parameters.style} className={parameters.newClass}>
        <Row theme={settings} newClass="row">
          <Box theme={settings}>
            <Title theme={settings}>{content.link}</Title>
            <Button
              type="linkOut"
              content={{ title: 'live', to: `http://${content.link}` }}
              parameters={{ newClass: 'buttonLive', color: 'primary' }}
            >
              Zobacz na żywo
            </Button>
            <BigImage theme={settings} fluid={content.image.fluid} />
          </Box>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
IdentificationProject.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

IdentificationProject.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default IdentificationProject;
