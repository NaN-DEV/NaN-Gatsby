// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { LeftBox, RightBox, Title, Section, BoxOptions, Description, ElementOptions, BoxElementOptions, DescriptionOptionsIcon } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Sticky from '../../../atoms/sticky/sticky';
import ProgressBar from '../../../atoms/progressBar/progressBar';

// Create new component
const SectionFullText = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} key={key} id={id} colorStyle={parameters.color} newStyle={parameters.newStyle} className={parameters.newClass}>
        <Row newClass="row">
          <LeftBox theme={settings}>
            <Sticky id={`${id}-sticky`} offsetTop={120}>
              <Title theme={settings} id={`${id}-sticky`}>
                {content.title ? `${content.title}` : 'Add title'}
              </Title>
            </Sticky>
          </LeftBox>
          <RightBox theme={settings}>
            <Description theme={settings}>{content.description ? `${content.description}` : 'Add Description'}</Description>
            {content.options ? (
              <BoxOptions theme={settings}>
                {content.options.length > 0 && content.options[0].icon
                  ? content.options.map(icon => {
                      return (
                        <ElementOptions theme={settings} key={icon.id}>
                          <BoxElementOptions>
                            <Icon theme={settings} type={icon.icon} id={icon.id} parameters={{ newClass: 'icon' }} />
                            <DescriptionOptionsIcon theme={settings}>{icon.icon}</DescriptionOptionsIcon>
                          </BoxElementOptions>
                        </ElementOptions>
                      );
                    })
                  : null}
                {content.options.length > 0 && content.options[0].percent
                  ? content.options.map(percent => {
                      return (
                        <ProgressBar
                          type="ring"
                          id={`${percent.id}-id`}
                          key={`${percent.id}-key`}
                          content={{
                            unit: percent.unit,
                            value: percent.value,
                            percent: percent.percent,
                            description: percent.description,
                          }}
                          parameters={{ size: 250, duration: 6, color: 'primary' }}
                        />
                      );
                    })
                  : null}
              </BoxOptions>
            ) : null}
          </RightBox>
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
