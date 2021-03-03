/* eslint-disable react/forbid-prop-types */
// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Left, Right, Title, BoxOptions, Description, Tag } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import List from '../../../molecules/list/list';
import Sticky from '../../../atoms/sticky/sticky';
import ProgressBar from '../../../atoms/progressBar/progressBar';

// Create new component
const SectionFullTextComponent = props => {
  const { content, parameters } = props;

  return (
    <>
      <Section theme={{ settings, theme: parameters.theme }}>
        <Row parameters={{}}>
          <Left theme={{ settings }}>
            <Sticky id={`${parameters.id}-sticky`} offsetTop={60}>
              <Title theme={{ settings }} id={`${parameters.id}-sticky`}>
                {content.title}
              </Title>
            </Sticky>
          </Left>
          <Right theme={{ settings }}>
            {content.description && <Description theme={{ settings }}>{content.description}</Description>}

            {content.tags && (
              <List type="level" parameters={{ className: 'tags' }}>
                {content.tags.map(tag => {
                  return <Tag theme={{ settings }}>#{tag.title}, </Tag>;
                })}
              </List>
            )}

            {content.options && (
              <BoxOptions theme={{ settings }}>
                {content.options.map(percent => {
                  return (
                    <ProgressBar
                      type="ring"
                      id={percent.id}
                      content={{
                        unit: percent.unit,
                        value: percent.value,
                        description: percent.description,
                      }}
                      parameters={{ id: percent.id, percent: percent.percent }}
                    />
                  );
                })}
              </BoxOptions>
            )}
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionFullTextComponent.propTypes = {
  content: PropTypes.shape({ options: PropTypes.array }),
};

SectionFullTextComponent.defaultProps = { content: PropTypes.shape({ options: null }) };

export default SectionFullTextComponent;
