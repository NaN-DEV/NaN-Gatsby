// Import plugin
import React from 'react';
import { Cycler } from 'react-text-scrambler';

// Import style
import { Section, BoxContent, Title } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Mascot from '../../../atoms/mascot/mascot';

// Create new component
const SectionSellComponent = () => {
  const strings = ['ku**a', '404'];
  return (
    <>
      <Section theme={{ settings }}>
        <Row parameters={{}}>
          <BoxContent>
            <Title theme={{ settings }}>
              <Cycler duration={1000} strings={strings} />
            </Title>
          </BoxContent>
          <Mascot newClass="mascot" theme={{ settings }} />
        </Row>
      </Section>
    </>
  );
};

export default SectionSellComponent;
