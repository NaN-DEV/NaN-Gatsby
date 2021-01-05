// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Left, Right, Title, Box, Section } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Sticky from '../../../atoms/sticky/sticky';

// Create new component
const SectionFullText = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} key={key} id={id} colorStyle={parameters.color} newStyle={parameters.newStyle} className={parameters.newClass}>
        <Row newClass="row">
          <Left theme={settings}>
            <Sticky id={`${id}-sticky`} offsetTop={120}>
              <Title theme={settings} id={`${id}-sticky`}>
                {content.title ? `${content.title}` : 'Add title'}
              </Title>
            </Sticky>
          </Left>
          <Right theme={settings}>
            {content.icons.map(icon => {
              return (
                <Box theme={settings} title={icon.icon}>
                  <Icon type={icon.icon} />
                </Box>
              );
            })}
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionFullText.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionFullText.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default SectionFullText;
