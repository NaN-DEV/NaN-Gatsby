// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Left, Right, Title, Box, Section } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Icon from '../../../atoms/icon/icon';
import Sticky from '../../../atoms/sticky/sticky';

// Create new component
const SectionFullText = props => {
  const { content, parameters } = props;

  return (
    <>
      <Section theme={{ settings, theme: parameters.theme }}>
        <Left theme={{ settings }}>
          <Sticky id={`${parameters.id}-sticky`} offsetTop={60}>
            <Title theme={{ settings }} id={`${parameters.id}-sticky`}>
              {content.title}
            </Title>
          </Sticky>
        </Left>
        <Right theme={{ settings }}>
          {content.icons.map(icon => {
            return (
              <Box theme={{ settings }} title={icon.icon}>
                <Icon type={icon.icon} />
              </Box>
            );
          })}
        </Right>
      </Section>
    </>
  );
};

// PropTpyes
SectionFullText.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionFullText.defaultProps = {
  content: null,
  parameters: false,
};

export default SectionFullText;
