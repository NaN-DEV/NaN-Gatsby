// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import BoxStcky from './style/style';

// IMPORT COMPONENT
class StickyAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heightElement: 0,
      offsetElement: 0,
      offsetPageYOld: 0,
      heightContainer: 0,
      switchOnOff: false,
      scrollUpOrDown: 'down',
    };

    this.myRefContainer = React.createRef();

    this.switchSticky = this.switchSticky.bind(this);
    this.startAndStop = this.startAndStop.bind(this);
    this.heightContainer = this.heightContainer.bind(this);
    this.howDirectionScroll = this.howDirectionScroll.bind(this);
    this.elementOffsetYAndHeight = this.elementOffsetYAndHeight.bind(this);
  }

  componentDidMount() {
    this.switchSticky();
    this.heightContainer();
    this.elementOffsetYAndHeight();
    window.addEventListener('resize', this.switchSticky);
    document.addEventListener('scroll', this.startAndStop);
    document.addEventListener('scroll', this.howDirectionScroll);
  }

  componentWillUnmount() {
    this.heightContainer();
    this.elementOffsetYAndHeight();
    window.removeEventListener('resize', this.switchSticky);
    document.removeEventListener('scroll', this.startAndStop);
    document.removeEventListener('scroll', this.howDirectionScroll);
  }

  // Ustalam w którym kierunku scroluje + ustalam aktualna wysokość
  howDirectionScroll() {
    const { offsetPageYOld } = this.state;
    const howDirectionScrollOffset = window.pageYOffset;
    if (offsetPageYOld > howDirectionScrollOffset) {
      this.setState({
        scrollUpOrDown: 'up',
        offsetPageYOld: howDirectionScrollOffset,
      });
    } else {
      this.setState({
        scrollUpOrDown: 'down',
        offsetPageYOld: howDirectionScrollOffset,
      });
    }
  }

  // Ustalam wysokość od początku dokumentu + wysokosć kontenera
  heightContainer() {
    const container = this.myRefContainer.current;
    const height = container.clientHeight;
    this.setState({
      heightContainer: height,
    });
  }

  switchSticky() {
    if (window.innerWidth < settings.breakpoint_desktop) {
      this.setState({
        switchOnOff: false,
      });
    } else {
      this.setState({
        switchOnOff: true,
      });
    }
  }

  // Ustalam aktualna odległość od bierzącego kontenera
  elementOffsetYAndHeight() {
    const { id } = this.props;
    const height = document.getElementById(id).clientHeight;
    const offsetTop = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;
    this.setState({
      heightElement: height,
      offsetElement: offsetTop,
    });
  }

  startAndStop() {
    const { id, offsetTop } = this.props;
    const { offsetPageYOld, heightContainer, heightElement, offsetElement, scrollUpOrDown, switchOnOff } = this.state;
    const element = document.getElementById(id);
    const maxScrollTop = heightContainer - heightElement;
    const activeOffset = Math.abs(offsetElement - offsetTop - offsetPageYOld);
    const activeOffsetUp = offsetElement - offsetTop - offsetPageYOld;

    if (switchOnOff) {
      switch (scrollUpOrDown) {
        case 'down':
          if (offsetElement - offsetPageYOld <= offsetTop && maxScrollTop >= activeOffset) {
            element.style.position = 'absolute';
            element.style.top = `${activeOffset}px`;
          }
          break;
        case 'up':
          if (maxScrollTop >= activeOffset && offsetPageYOld + offsetTop >= offsetElement + heightElement / 2) {
            element.style.position = 'absolute';
            element.style.top = `${activeOffset}px`;
          } else if (activeOffsetUp > 0) {
            element.style.position = 'absolute';
            element.style.top = `0px`;
          }
          break;
        default:
      }
    } else {
      element.style.top = `0px`;
      element.style.position = 'relative';
    }
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <BoxStcky ref={this.myRefContainer}>{children}</BoxStcky>
      </>
    );
  }
}

// CREATE NEW COMPONENT

// PropTpyes
StickyAnimation.propTypes = {
  offsetTop: PropTypes.number,
  id: PropTypes.string.isRequired,
};

// PropTpyes default
StickyAnimation.defaultProps = {
  offsetTop: 80,
};

export default StickyAnimation;
