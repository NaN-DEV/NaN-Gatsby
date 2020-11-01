// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE
import { Section, Left, Right, Box, Avatar, ProjectTitle, BigImage } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const IdentificationProject = () => {
  return (
    <>
      <Section>
        <Row newClass="row">
          <Left>
            <Avatar />
          </Left>
          <Right>
            <Box>
              <ProjectTitle theme={settings}>instacase.pl</ProjectTitle>
              <Button />
              <Button />
            </Box>
            <BigImage />
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
IdentificationProject.propTypes = {};

IdentificationProject.defaultProps = {};

export default IdentificationProject;
