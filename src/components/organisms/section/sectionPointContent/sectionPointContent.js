// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Box, Content, Number, Point, Title, Description, Line, Image } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';

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
