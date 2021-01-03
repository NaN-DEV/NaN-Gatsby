// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Box, Content, Number, Point, Title, Description, Line, Image, Sell, Avatar } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';
import Mascot from '../../../atoms/mascot/mascot';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

const serviceContentComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} newStyle={parameters.newStyle} className={parameters.newClass} id={id} key={key}>
        <Row newClass="row">
          <Content theme={settings}>
            {content.description.map((item, i) => {
              return (
                <>
                  <Row newClass="row">
                    <Number theme={settings}>
                      <Sticky id={item.id} offsetTop={120}>
                        <Box id={item.id} className="box">
                          <Point theme={settings}>{i + 1}</Point>
                          <Title theme={settings}>{item.title}</Title>
                        </Box>
                      </Sticky>
                    </Number>
                    <Description theme={settings}>
                      <Box dangerouslySetInnerHTML={{ __html: item.description }} />
                      {item.image && (
                        <>
                          <Line />
                          <Image theme={settings} fluid={item.image.fluid} />
                        </>
                      )}
                    </Description>
                  </Row>
                </>
              );
            })}
          </Content>
          <Sell theme={settings}>
            <Sticky id="avatar" offsetTop={120}>
              <Box id="avatar" theme={settings}>
                <Avatar theme={settings}>
                  <Mascot />
                </Avatar>
                <Button type="linkIn" content={{ to: '/sell' }} parameters={{ color: 'secondary', newClass: 'button' }}>
                  Wyceń projekt
                </Button>
              </Box>
            </Sticky>
          </Sell>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
serviceContentComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
serviceContentComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default serviceContentComponent;