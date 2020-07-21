// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SVG
import Alien from '../../../assets/avatar/alien.svg';

// CREATE NEW COMPONENT

class MascotComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    const mascot = document.querySelector('.mascot');
    const eye = mascot.querySelector('.eye');
    document.addEventListener('mousemove', e => {
      const widthPosition = (e.clientX * 100) / window.innerWidth;
      const heightPosition = (e.clientY * 100) / window.innerHeight;
      if (widthPosition >= 15 && widthPosition <= 80) {
        this.setState({
          x: -25 + (widthPosition * 50) / 100,
        });
      }
      if (heightPosition >= 15 && heightPosition <= 80) {
        this.setState({
          y: -25 + (heightPosition * 50) / 100,
        });
      }
      const { x, y } = this.state;
      eye.style.transform = `translate(${x}px,${y}px)`;
    });
  }

  render() {
    const { newClass, newStyle } = this.props;
    return (
      <>
        <Alien className={`mascot ${newClass}`} style={newStyle} />
      </>
    );
  }
}

// PropTpyes
MascotComponent.propTypes = {
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MascotComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default MascotComponent;
