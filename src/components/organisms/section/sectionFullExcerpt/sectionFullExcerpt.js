// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { LeftBox, RightBox, Title, Section, Description } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';

// Create new component
const SectionFullExcerptComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} key={key} id={id} style={parameters.style} className={parameters.className}>
        <Row newClass="row">
          <LeftBox theme={settings}>
            <Sticky id={`${id}-sticky`} offsetTop={120}>
              <Title id={`${id}-sticky`} theme={settings}>
                {content.title ? `${content.title}` : 'Add title'}
              </Title>
            </Sticky>
          </LeftBox>
          <RightBox theme={settings}>
            <Description theme={settings}>{content.description ? `${content.description}` : 'Add Description'}</Description>
          </RightBox>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionFullExcerptComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTypes default
SectionFullExcerptComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default SectionFullExcerptComponent;
