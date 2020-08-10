// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
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

const SectionSellComponent = props => {
  const { newStyle, newClass } = props;
  const strings = ['Szukasz programisty ?', 'Właśnie go znalazłeś !'];
  return (
    <>
      <Section theme={settings} newStyle={newStyle} className={newClass} id="sell">
        <Row newClass="row" center>
          <BoxContent>
            <Title theme={settings}>
              <Cycler duration={3000} strings={strings} />
            </Title>
            <Button type="link" link="/sell" color="secondary" newClass="button" title="Wyceń projekt" />
          </BoxContent>
          <Mascot newClass="mascot" theme={settings} />
          <Icon secondary icon="triangle" newClass="triangle" />
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionSellComponent.propTypes = {
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionSellComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default SectionSellComponent;
