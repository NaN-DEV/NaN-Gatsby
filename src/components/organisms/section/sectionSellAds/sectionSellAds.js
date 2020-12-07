// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Cycler } from 'react-text-scrambler';
import { useStaticQuery, graphql } from 'gatsby';

// Import style
import { Section, Box, BoxContent, Title } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';

// Create new component
const SectionSellAdsComponent = props => {
  const { newStyle, newClass } = props;

  const { datoCmsSetting } = useStaticQuery(
    graphql`
      query {
        datoCmsSetting {
          sectionSellAds {
            title
          }
        }
      }
    `,
  );
  const mainText = [];

  datoCmsSetting.sectionSellAds.forEach(item => {
    mainText.push(item.title);
  });

  return (
    <Section theme={settings} newStyle={newStyle} className={newClass} id="sectionSellAds">
      <Row newClass="row" center>
        <Box>
          <BoxContent>
            <Title theme={settings}>
              <Cycler duration={6000} strings={mainText} />
            </Title>
            <Button type="linkIn" content={{ to: '/sell/', title: 'Wyceń projekt' }} parameters={{ color: 'secondary', newClass: 'button' }}>
              Wyceń projekt
            </Button>
          </BoxContent>
        </Box>
        <Box>
          <Mascot theme={settings} newClass="mascot" />
          <Icon theme={settings} type="triangle" parameters={{ color: 'secondary', newClass: 'triangle' }} />
        </Box>
      </Row>
    </Section>
  );
};

// PropTpyes
SectionSellAdsComponent.propTypes = {
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionSellAdsComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default SectionSellAdsComponent;
