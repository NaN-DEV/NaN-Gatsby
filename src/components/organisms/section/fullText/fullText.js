// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import {
  Title,
  Section,
  TitleUnit,
  BoxOptions,
  Description,
  TitleOptions,
  ElementOptions,
  BoxElementOptions,
  DescriptionOptionsIcon,
  DescriptionOptionsProgressBar,
} from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import ProgressBar from '../../../atoms/progressBar/progressBar';

// CREATE NEW COMPONENT

const SectionFullText = props => {
  const { id, color, title, description, options, newStyle, newClass } = props;

  return (
    <>
      <Section id={id} color={color} theme={settings} newStyle={newStyle} className={newClass}>
        <Row newClass="row">
          <Title theme={settings}>{title ? `${title}` : 'Add title'}</Title>
          <Description theme={settings}>{description ? `${description}` : 'Add Description'}</Description>
          {options ? (
            <BoxOptions theme={settings}>
              {options[0].icon &&
                options.map(item => {
                  return (
                    <>
                      <ElementOptions theme={settings}>
                        <BoxElementOptions>
                          <Icon id={item.id} icon={item.icon} theme={settings} newClass="icon" />
                          <DescriptionOptionsIcon theme={settings}>{item.icon}</DescriptionOptionsIcon>
                        </BoxElementOptions>
                      </ElementOptions>
                    </>
                  );
                })}
              {options[0].percent &&
                options.map(item => {
                  return (
                    <>
                      <ElementOptions theme={settings}>
                        <BoxElementOptions theme={settings}>
                          <TitleOptions>
                            {item.value}
                            <TitleUnit>{item.unit}.</TitleUnit>
                          </TitleOptions>
                          <ProgressBar type="ring" color="primary" size={250} percent={item.percent} />
                          <DescriptionOptionsProgressBar theme={settings}>{item.description}</DescriptionOptionsProgressBar>
                        </BoxElementOptions>
                      </ElementOptions>
                    </>
                  );
                })}
            </BoxOptions>
          ) : null}
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionFullText.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  description: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionFullText.defaultProps = {
  id: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
  description: 'Add description',
};

export default SectionFullText;
