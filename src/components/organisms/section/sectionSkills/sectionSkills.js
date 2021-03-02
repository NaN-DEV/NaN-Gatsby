/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Title, Score, Unit, Description } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Create new component
class SectionSkillsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listTime = [];
    const { content } = this.props;

    content.skills.forEach(skill => {
      const start = new Date();
      const stop = new Date(skill.time);
      const differenceTime = start.getTime() - stop.getTime();
      listTime.push(Math.floor(differenceTime / 31536000000));
    });

    return (
      <>
        {content.skills.map((item, i) => {
          return (
            <Section theme={{ settings, theme: i % 2 }} key={i}>
              <Title theme={{ settings }}>{item.skill.title}</Title>
              <Score theme={{ settings, order: i % 2 }}>
                {listTime[i]} <Unit theme={{ settings }}>{listTime[i] > 1 ? `${listTime[i] <= 4 ? 'lata' : 'lat'}` : 'rok'}</Unit>
              </Score>
              <Description theme={{ settings, order: i % 2 }}>
                <>{item.description}</>
              </Description>
            </Section>
          );
        })}
      </>
    );
  }
}

// PropTpyes
SectionSkillsComponent.propTypes = {
  content: PropTypes.shape({
    skills: PropTypes.array.isRequired,
  }).isRequired,
};

export default SectionSkillsComponent;
