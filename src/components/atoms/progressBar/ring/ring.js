// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE SETTING

import settings from '../../../../layouts/settings/settings';

// IMPORT LOCAL STYLE

import { Svg, Circle, CircleBg } from './style/style';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

class ProgressBarRing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rState: 0,
      strokeDasharrayState: 0,
      strokeDashoffsetState: 0,
    };
  }

  componentDidMount() {
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
    const { id, color, size, newClass, newStyle } = this.props;
    const { rState, strokeDashoffsetState, strokeDasharrayState } = this.state;

    return (
      <>
        <Svg id={id} color={color} size={size} newClass={newClass} newStyle={newStyle} theme={settings}>
          <CircleBg color={color} r={rState} cx={size / 2} cy={size / 2} theme={settings} />
          <Circle
            r={rState}
            cx={size / 2}
            cy={size / 2}
            color={color}
            strokeDashoffset={strokeDashoffsetState}
            strokeDasharray={strokeDasharrayState}
            theme={settings}
          />
        </Svg>
      </>
    );
  }
}

// PropTpyes
ProgressBarRing.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ProgressBarRing.defaultProps = {
  id: null,
  color: null,
  size: null,
  newClass: null,
  newStyle: null,
};

export default ProgressBarRing;
