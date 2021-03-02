/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import local style
import { ProgressBar, Box, Score, Unit, Svg, Circle, CircleBg, Description } from './style/style';

// Create new component
class ProgressBarRingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rState: 0,
      start: false,
      strokeDasharrayState: 0,
      strokeDashoffsetState: 0,
    };

    this.startAnimationProgressBar = this.startAnimationProgressBar.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.startAnimationProgressBar);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.startAnimationProgressBar);
  }

  startAnimationProgressBar() {
    const { start } = this.state;
    const { id } = this.props;

    if (window.pageYOffset >= document.getElementById(id).getBoundingClientRect().top + window.pageYOffset - window.innerHeight && !start) {
      this.calculatorProgress();
      this.setState({
        start: true,
      });
    } else {
      return null;
    }
  }

  calculatorProgress() {
    const radius = 200 / 2 - 9 * 2;
    const { percent } = this.props.content;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;

    this.setState({
      rState: radius,
      strokeDashoffsetState: offset,
      strokeDasharrayState: circumference,
    });
  }

  render() {
    const { id } = this.props.parameters;
    const { unit, value, description } = this.props.content;
    const { rState, strokeDashoffsetState, strokeDasharrayState, start } = this.state;

    return (
      <>
        <ProgressBar theme={{ settings }} id={id}>
          <Box>
            <Score>
              <CountUp start={0} end={start ? value : 0} duration={6} />
              <Unit>{unit}.</Unit>
            </Score>
            <Svg size={200} theme={{ settings }}>
              <CircleBg r={rState} cx={200 / 2} cy={200 / 2} theme={{ settings }} />
              <Circle
                r={rState}
                cx={200 / 2}
                cy={200 / 2}
                theme={{ settings }}
                strokeDasharray={strokeDasharrayState}
                strokeDashoffset={strokeDashoffsetState}
              />
            </Svg>
          </Box>
          <Description theme={{ settings }}>{description}</Description>
        </ProgressBar>
      </>
    );
  }
}

// PropTpyes
ProgressBarRingComponent.propTypes = {
  parameters: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,

  content: PropTypes.shape({
    percent: PropTypes.number,
    unit: PropTypes.string,
    value: PropTypes.string,
    description: PropTypes.string,
  }),
};

ProgressBarRingComponent.defaultProps = {
  content: PropTypes.shape({
    percent: 0,
    unit: null,
    value: null,
    description: null,
  }),
};

export default ProgressBarRingComponent;
