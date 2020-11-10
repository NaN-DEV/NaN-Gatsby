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
      <Section key={id} color={color} theme={settings} newStyle={newStyle} className={newClass}>
        <Row newClass="row">
          <Title theme={settings}>{title ? `${title}` : 'Add title'}</Title>
          <Description theme={settings}>{description ? `${description}` : 'Add Description'}</Description>
          {options ? (
            <BoxOptions theme={settings}>
              {options[0].icon
                ? options.map(itemIcon => {
                    return (
                      <>
                        <ElementOptions theme={settings} key={itemIcon.id}>
                          <BoxElementOptions>
                            <Icon id={itemIcon.id} icon={itemIcon.icon} theme={settings} newClass="icon" />
                            <DescriptionOptionsIcon theme={settings}>{itemIcon.icon}</DescriptionOptionsIcon>
                          </BoxElementOptions>
                        </ElementOptions>
                      </>
                    );
                  })
                : null}
              {options[0].percent
                ? options.forEach(percent => {
                    return (
                      <>
                        <ElementOptions theme={settings} key={percent.id}>
                          <BoxElementOptions theme={settings}>
                            <TitleOptions>
                              {percent.value}
                              <TitleUnit>{percent.unit}.</TitleUnit>
                            </TitleOptions>
                            <ProgressBar type="ring" color="primary" size={250} percent={percent.percent} />
                            <DescriptionOptionsProgressBar theme={settings}>{percent.description}</DescriptionOptionsProgressBar>
                          </BoxElementOptions>
                        </ElementOptions>
                      </>
                    );
                  })
                : null}
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
  color: null,
  title: null,
  newClass: null,
  newStyle: null,
  description: null,
};

export default SectionFullText;
