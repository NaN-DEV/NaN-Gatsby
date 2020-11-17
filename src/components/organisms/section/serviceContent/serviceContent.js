// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import {
  Line,
  Image,
  Point,
  Title,
  Avatar,
  BoxSell,
  Section,
  Content,
  BoxPoint,
  BoxAvatar,
  BoxContent,
  Description,
  BoxNumeration,
} from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';
import Mascot from '../../../atoms/mascot/mascot';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

const serviceContentComponent = props => {
  const { id, newStyle, newClass, content } = props;

  return (
    <>
      <Section
        theme={settings}
        newStyle={newStyle}
        className={newClass}
        id={`${id}-serviceContentComponent-section-id`}
        key={`${id}-serviceContentComponent-section-key`}
      >
        <Row newClass="row">
          <BoxContent theme={settings}>
            {content.map((item, i) => {
              return (
                <>
                  <BoxNumeration theme={settings}>
                    <Sticky id={`${item.id}-point-sticky`} offsetTop={60}>
                      <BoxPoint theme={settings} id={`${item.id}-point-sticky`}>
                        <Point theme={settings}>{i + 1}</Point>
                        <Title>{item.title}</Title>
                      </BoxPoint>
                    </Sticky>
                  </BoxNumeration>
                  <Content theme={settings}>
                    <Description theme={settings} dangerouslySetInnerHTML={{ __html: item.description }} />
                    {item.image && (
                      <>
                        <Line />
                        <Image theme={settings} fluid={item.image.fluid} />
                      </>
                    )}
                  </Content>
                </>
              );
            })}
          </BoxContent>
          <BoxSell theme={settings}>
            <Sticky id="avatar" offsetTop={60}>
              <BoxAvatar id="avatar" theme={settings}>
                <Avatar theme={settings}>
                  <Mascot />
                </Avatar>
                <Button type="link" link="/sell" color="secondary" newClass="button" title="Wyceń projekt" />
              </BoxAvatar>
            </Sticky>
          </BoxSell>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
serviceContentComponent.propTypes = {
  id: PropTypes.string,
  newClass: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

serviceContentComponent.defaultProps = {
  id: null,
  content: null,
  newClass: null,
  newStyle: null,
};

export default serviceContentComponent;
