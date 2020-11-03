// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Title, Description, BoxOptions, ElementOptions, DescriptionOptions, BoxElementOptions } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';

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
              {options[0].icon
                ? options.map(item => {
                    return (
                      <>
                        <ElementOptions theme={settings}>
                          <BoxElementOptions>
                            <Icon id={item.id} icon={item.icon} theme={settings} newClass="icon" />
                            <DescriptionOptions theme={settings}>{item.icon}</DescriptionOptions>
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
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
  description: 'Add description',
};

export default SectionFullText;
