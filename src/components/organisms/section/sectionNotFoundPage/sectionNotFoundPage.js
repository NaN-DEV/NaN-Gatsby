// IMPORT PLUGIN
import React from 'react';
import { Cycler } from 'react-text-scrambler';

// IMPORT STYLE
import { Section, BoxContent, Title } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';

// CREATE NEW COMPONENT

const SectionSellComponent = () => {
  const strings = ['Ups... Houston mamy problem!', 'Nie znalazłem tej strony :('];
  return (
    <>
      <Section theme={settings}>
        <Row newClass="row">
          <BoxContent>
            <Title theme={settings}>
              <Cycler duration={6000} strings={strings} />
            </Title>
            <Button type="link" content={{ title: 'Więc zobacz to :)', to: '/' }} parameters={{ newClass: 'button', colorStyle: 'secondary' }} />
          </BoxContent>
          <Mascot newClass="mascot" theme={settings} />
          <Icon type="triangle" parameters={{ color: 'secondary', newClass: 'triangle' }} />
        </Row>
      </Section>
    </>
  );
};

export default SectionSellComponent;
