// Import plugin
import React from 'react';
import { Cycler } from 'react-text-scrambler';

// Import style
import { Section, BoxContent, Title } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Mascot from '../../../atoms/mascot/mascot';

// Create new component
const SectionSellComponent = () => {
  const strings = ['ku**a', '404'];
  return (
    <>
      <Section theme={{ settings }}>
        <BoxContent>
          <Title theme={{ settings }}>
            <Cycler duration={1000} strings={strings} />
          </Title>
        </BoxContent>
        <Mascot newClass="mascot" theme={{ settings }} />
      </Section>
    </>
  );
};

export default SectionSellComponent;
