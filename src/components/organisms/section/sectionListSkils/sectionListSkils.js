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
class SkilsSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listTime = [];
    const { content, parameters } = this.props;

    content.skils.forEach(skil => {
      const start = new Date();
      const stop = new Date(skil.sinceWhenYouCan);
      const differenceTime = start.getTime() - stop.getTime();
      listTime.push(Math.floor(differenceTime / 31536000000));
    });

    return (
      <>
        {content.skils
          ? content.skils.map((item, i) => {
              return (
                <Section
                  theme={settings}
                  dark={i % 2 === 0 ? 1 : 0}
                  style={parameters.newStyle}
                  id={`${item.id}-section-id`}
                  key={`${item.id}-section-key`}
                  className={parameters.newClass}
                >
                  <Row newClass="row">
                    <BoxTitle theme={settings}>
                      <Sticky id={`${item.id}-sticky-id`} offsetTop={120}>
                        <Title id={`${item.id}-sticky-id`} theme={settings}>
                          {item.skils.title}
                        </Title>
                      </Sticky>
                    </BoxTitle>
                    <BoxLeft site={i % 2 === 0 ? 1 : 0} theme={settings} order={i % 2 === 0 ? 1 : 0}>
                      <Score theme={settings}>
                        {listTime[i]} <Unit theme={settings}>{listTime[i] > 1 ? `${listTime[i] <= 4 ? 'lata' : 'lat'}` : 'rok'}</Unit>
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
  }
}

// PropTpyes
SkilsSectionComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SkilsSectionComponent.defaultProps = {
  content: null,
  parameters: false,
};

export default SkilsSectionComponent;
