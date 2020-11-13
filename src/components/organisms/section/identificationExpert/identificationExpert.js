// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Left, Right, FaceExpert, NameExpert, Description, Title, BoxData } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const identificationExpertComponent = props => {
  const { id, description, image, nameExpert } = props;

  return (
    <>
      <Section theme={settings}>
        <Row theme={settings} newClass="row">
          <Left theme={settings}>
            <FaceExpert theme={settings} fluid={image.fluid} />
            <Title id={id} theme={settings}>
              Witam
            </Title>
          </Left>
          <Right theme={settings}>
            <BoxData>
              <NameExpert theme={settings}>{nameExpert}</NameExpert>
              <Button theme={settings} title="Portfolio" type="linkOut" newClass="button_live" link="/" />
            </BoxData>
            <Description theme={settings}>{description}</Description>
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
identificationExpertComponent.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  brand: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

identificationExpertComponent.defaultProps = {
  id: null,
  brand: null,
  description: null,
};

export default identificationExpertComponent;
