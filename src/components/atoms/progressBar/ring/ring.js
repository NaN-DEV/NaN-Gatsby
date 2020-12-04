/* eslint-disable consistent-return */
// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

// IMPORT STYLE SETTING

import settings from '../../../../layouts/settings/settings';

// IMPORT LOCAL STYLE

import {
  Svg,
  Circle,
  CircleBg,
  ProgressBarBox,
  ProgressBarUnit,
  ProgressBarScore,
  ProgressBarBoxOptions,
  ProgressBarDescription,
} from './style/style';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

class ProgressBarRing extends React.Component {
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
    const { size, percent } = this.props;
    const radius = size / 2 - 9 * 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;

    this.setState({
      rState: radius,
      strokeDashoffsetState: offset,
      strokeDasharrayState: circumference,
    });
  }

  render() {
    const { id, color, size, newClass, newStyle, description, value, unit, duration, key } = this.props;
    const { rState, strokeDashoffsetState, strokeDasharrayState, start } = this.state;

    return (
      <>
        <ProgressBarBoxOptions theme={settings} id={id} newClass={newClass} newStyle={newStyle} key={key}>
          <ProgressBarBox>
            <ProgressBarScore>
              <CountUp start={0} end={start ? value : 0} duration={duration} />
              <ProgressBarUnit>{unit}.</ProgressBarUnit>
            </ProgressBarScore>
            <Svg color={color} size={size} theme={settings}>
              <CircleBg color={color} r={rState} cx={size / 2} cy={size / 2} theme={settings} />
              <Circle
                r={rState}
                cx={size / 2}
                cy={size / 2}
                color={color}
                theme={settings}
                strokeDasharray={strokeDasharrayState}
                strokeDashoffset={strokeDashoffsetState}
              />
            </Svg>
            <ProgressBarDescription theme={settings}>{description}</ProgressBarDescription>
          </ProgressBarBox>
        </ProgressBarBoxOptions>
      </>
    );
  }
}

// PropTpyes
ProgressBarRing.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  newClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ProgressBarRing.defaultProps = {
  key: null,
  color: null,
  size: null,
  newClass: null,
  newStyle: null,
};

export default ProgressBarRing;
