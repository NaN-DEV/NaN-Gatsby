// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Title, Description, Joke } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';

// CREATE NEW COMPONENT

const SectionHeroComponent = props => {
  const { id, size, half, color, title, newStyle, newClass, description, joke } = props;

  return (
    <>
      <Section id={id} size={size} color={color} theme={settings} newStyle={newStyle} className={newClass}>
        <Row newClass="row">
          <Title dangerouslySetInnerHTML={{ __html: title }} theme={settings} half={half} joke={joke} />
          {joke && (
            <>
              <Joke theme={settings} half={half}>
                {joke}
              </Joke>
            </>
          )}
          {description && (
            <>
              <Description theme={settings} half={half}>
                {description}
              </Description>
            </>
          )}
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroComponent.propTypes = {
  id: PropTypes.string,
  half: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  description: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionHeroComponent.defaultProps = {
  id: null,
  half: false,
  size: 'full',
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
  description: 'Add descriptiond',
};

export default SectionHeroComponent;
