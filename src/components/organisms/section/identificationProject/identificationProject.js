// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import Sticky from '../../../atoms/sticky/sticky';

// IMPORT STYLE
import { Section, Left, Right, Brand, ProjectTitle, BigImage, Title } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const IdentificationProject = props => {
  const { id, image, brand, nameProject } = props;

  return (
    <>
      <Section theme={settings}>
        <Row theme={settings} newClass="row">
          <Left theme={settings}>
            <Brand theme={settings} fluid={brand.fluid} />
            <Sticky id={id} offsetTop={30}>
              <Title id={id} theme={settings}>
                Start
              </Title>
            </Sticky>
          </Left>
          <Right theme={settings}>
            <ProjectTitle theme={settings}>{nameProject}</ProjectTitle>
            <Button theme={settings} title="live" type="linkOut" newClass="button_live" link={`http://${nameProject}`} />
            <BigImage theme={settings} fluid={image.fluid} />
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
IdentificationProject.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  brand: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

IdentificationProject.defaultProps = {
  image: null,
  brand: null,
};

export default IdentificationProject;
