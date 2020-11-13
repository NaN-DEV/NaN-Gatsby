// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import Sticky from '../../../atoms/sticky/sticky';

// IMPORT STYLE
import { Section, BoxTitle, Title, BoxLeft, BoxRight, Score, Unit, Description } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';

// CREATE NEW COMPONENT
const SkilsSectionComponent = props => {
  const { content, newStyle, newClass } = props;

  const calculeTime = data => {
    const start = new Date();
    const stop = new Date(data);
    const differenceTime = start.getTime() - stop.getTime();
    return Math.floor(differenceTime / 31536000000);
  };

  return (
    <>
      {content
        ? content.map((item, i) => {
            return (
              <Section
                theme={settings}
                newStyle={newStyle}
                className={newClass}
                dark={i % 2 === 0 ? 1 : 0}
                id={`${item.id}-section-id`}
                key={`${item.id}-section-key`}
              >
                <Row newClass="row">
                  <BoxTitle theme={settings}>
                    <Sticky id={`${item.id}-sticky-id`} offsetTop={60}>
                      <Title id={`${item.id}-sticky-id`} theme={settings}>
                        {item.skils.name}
                      </Title>
                    </Sticky>
                  </BoxTitle>
                  <BoxLeft site={i % 2 === 0 ? 1 : 0} theme={settings} order={i % 2 === 0 ? 1 : 0}>
                    <Score theme={settings}>
                      {calculeTime(item.sinceWhenYouCan)} <Unit theme={settings}>{calculeTime(item.sinceWhenYouCan) > 1 ? 'lata' : 'rok'}</Unit>
                    </Score>
                  </BoxLeft>
                  <BoxRight site={i % 2 === 0 ? 1 : 0} theme={settings} order={i % 2 === 0 ? 1 : 0}>
                    <Description>
                      <>{item.description}</>
                    </Description>
                  </BoxRight>
                </Row>
              </Section>
            );
          })
        : null}
    </>
  );
};

// PropTpyes
SkilsSectionComponent.propTypes = {
  newClass: PropTypes.string,

  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SkilsSectionComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default SkilsSectionComponent;
