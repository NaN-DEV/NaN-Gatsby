// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
// import { StickyContainer, Sticky } from 'react-sticky';

// IMPORT STYLE
import { LeftBox, RightBox, Title, Section, BoxOptions, Description, ElementOptions, BoxElementOptions, DescriptionOptionsIcon } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Sticky from '../../../atoms/sticky/sticky';
import ProgressBar from '../../../atoms/progressBar/progressBar';

// CREATE NEW COMPONENT
const SectionFullText = props => {
  const { id, key, color, title, description, options, newStyle, newClass } = props;

  return (
    <>
      <Section key={key} id={id} color={color} theme={settings} newStyle={newStyle} className={newClass}>
        <Row newClass="row">
          <LeftBox theme={settings}>
            <Sticky id={`${id}-sticky`} offsetTop={60}>
              <Title id={`${id}-sticky`} theme={settings}>
                {title ? `${title}` : 'Add title'}
              </Title>
            </Sticky>
          </LeftBox>
          <RightBox theme={settings}>
            <Description theme={settings}>{description ? `${description}` : 'Add Description'}</Description>
            {options ? (
              <BoxOptions theme={settings}>
                {options[0].icon
                  ? options.map(itemIcon => {
                      return (
                        <ElementOptions theme={settings} key={itemIcon.id}>
                          <BoxElementOptions>
                            <Icon id={itemIcon.id} icon={itemIcon.icon} theme={settings} newClass="icon" />
                            <DescriptionOptionsIcon theme={settings}>{itemIcon.icon}</DescriptionOptionsIcon>
                          </BoxElementOptions>
                        </ElementOptions>
                      );
                    })
                  : null}
                {options[0].percent
                  ? options.map(percent => {
                      return (
                        <ProgressBar
                          size={250}
                          type="ring"
                          duration={6}
                          color="primary"
                          unit={percent.unit}
                          value={percent.value}
                          id={`${percent.id}-id`}
                          key={`${percent.id}-key`}
                          percent={percent.percent}
                          description={percent.description}
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
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionFullText.defaultProps = {
  color: null,
  title: null,
  newClass: null,
  newStyle: null,
  description: null,
};

export default SectionFullText;
