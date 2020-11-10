// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
// import { StickyContainer, Sticky } from 'react-sticky';

// IMPORT STYLE
import { Title, Section, BoxOptions, Description, ElementOptions, BoxElementOptions, DescriptionOptionsIcon } from './style/style';

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
                ? options.map(percent => {
                    return (
                      <>
                        <ProgressBar
                          size={250}
                          type="ring"
                          duration={6}
                          color="primary"
                          id={percent.id}
                          key={percent.id}
                          unit={percent.unit}
                          value={percent.value}
                          percent={percent.percent}
                          description={percent.description}
                        />
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
