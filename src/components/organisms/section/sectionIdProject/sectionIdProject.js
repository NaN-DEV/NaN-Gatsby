// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Title, Image } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const SectionIdentificationProjectComponent = props => {
  const { content } = props;

  return (
    <>
      <Section theme={{ settings }}>
        <Title theme={{ settings }}>{content.link}</Title>
        <Button type="linkOut" content={{ title: 'live', to: `http://${content.link}` }} parameters={{ className: 'live', button: true }}>
          Zobacz na żywo
        </Button>
        <Image theme={{ settings }} fluid={content.image.fluid} />
      </Section>
    </>
  );
};

// PropTpyes
SectionIdentificationProjectComponent.propTypes = {
  content: PropTypes.shape({}),
};

SectionIdentificationProjectComponent.defaultProps = {
  content: PropTypes.shape({}),
};

export default SectionIdentificationProjectComponent;
