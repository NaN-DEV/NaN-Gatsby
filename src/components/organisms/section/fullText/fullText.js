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

const SectionHeroComponent = props => {
  const { id, size, half, newStyle, newClass } = props;
  return (
    <>
      <Section id={id} size={size} color="tertiary_4" theme={settings} newStyle={newStyle} className={newClass}>
        <Row newClass="row">
          <Title theme={settings}>test</Title>
          <Description theme={settings} half={half}>
            jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala
            bla bla bal jakiś tam test bala bala bla bla baljakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test
            bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla baljakiś tam test bala bala bla bla bal jakiś
            tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla
            baljakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala
            bla bla bal jakiś tam test bala bala bla bla baljakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test
            bala bala bla bla bal jakiś tam test bala bala bla bla bal jakiś tam test bala bala bla bla bal
          </Description>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroComponent.propTypes = {
  id: PropTypes.string,
  half: PropTypes.bool,
  size: PropTypes.string,

  newClass: PropTypes.string,

  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionHeroComponent.defaultProps = {
  id: null,
  half: false,
  size: 'full',
  newClass: null,
  newStyle: null,
};

export default SectionHeroComponent;
