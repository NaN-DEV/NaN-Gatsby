// IMPORT PLUGIN
import React from 'react';
import Typist from 'react-typist';

// IMPORT STYLES
import Section from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../../layouts/theme/settings2';

// IMPORT COMPONENT START
import Row from '../../../../atoms/row/row';
import Animation from '../../../../atoms/animation/animation';

// IMPORT COMPONENT STOP
const SectionHeroFullComponent = props => {
  const { content } = props;
  const { size, color, id, textBold, textNormal, arrow } = content;
  return (
    <>
      <Section full={size} secondary={color === 'secondary' ? 1 : 0} key={id} theme={theme}>
        <Row className="row">
          <Typist>
            <span>
              <strong>{textBold}</strong>
              {textNormal}
            </span>
          </Typist>

          <div className="arrow">
            {color === 'secondary' ? (
              <Animation click={arrow} primary />
            ) : (
              <Animation click={arrow} secondary />
            )}
          </div>
        </Row>
      </Section>
    </>
  );
};

export default SectionHeroFullComponent;
