// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Title, Image } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// Create new component
const SectionIdentificationProjectComponent = props => {
  const { content } = props;

  return (
    <>
      <Section theme={{ settings }}>
        <Row parameters={{}}>
          <Title theme={{ settings }}>{content.link}</Title>
          <Button type="linkOut" content={{ title: 'live', to: `http://${content.link}` }} parameters={{ className: 'live', button: true }}>
            Zobacz na żywo
          </Button>
          <Image theme={{ settings }} fluid={content.image.fluid} />
        </Row>
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
