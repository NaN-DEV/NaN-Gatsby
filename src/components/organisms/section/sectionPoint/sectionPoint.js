// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, ContentBox, PointBox, Point, Title, Content, Description, Line, Image, SaleBox, Sale, Avatar } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';
import Mascot from '../../../atoms/mascot/mascot';
import Button from '../../../atoms/button/button';

// Create new component
const serviceContentComponent = props => {
  const { content } = props;

  return (
    <>
      <Section theme={{ settings }}>
        <Row parameters={{}}>
          <ContentBox theme={{ settings }}>
            {content.description.map((item, i) => {
              return (
                <>
                  <PointBox theme={{ settings }}>
                    <Sticky id={item.id} offsetTop={60}>
                      <Point theme={{ settings }} id={item.id} number={i + 1}>
                        <Title theme={{ settings }}>{item.title}</Title>
                      </Point>
                    </Sticky>
                  </PointBox>

                  <Content theme={{ settings }}>
                    <Description theme={{ settings }} dangerouslySetInnerHTML={{ __html: item.description }} />
                    {item.image && (
                      <>
                        <Line theme={{ settings }} />
                        <Image theme={{ settings }} fluid={item.image.fluid} />
                      </>
                    )}
                  </Content>
                </>
              );
            })}
          </ContentBox>

          <SaleBox theme={{ settings }}>
            <Sticky id="avatar" offsetTop={120}>
              <Sale id="avatar" theme={{ settings }}>
                <Avatar theme={{ settings }}>
                  <Mascot />
                </Avatar>
                <Button type="linkIn" content={{ to: '/sell' }} parameters={{ button: true }}>
                  Wyceń projekt
                </Button>
              </Sale>
            </Sticky>
          </SaleBox>
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
