/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

// CREATE NEW COMPONENT
class ScrollNextElementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      heightWindows: 0,
      offsetPageYOld: 0,
      wheelActionNumber: 0,
      topEdgesAllElements: [],
    };

    this.animationScollUp = this.animationScollUp.bind(this);
    this.animationScollDown = this.animationScollDown.bind(this);
    this.scrollDirectionNow = this.scrollDirectionNow.bind(this);
    this.addTopEdgesAllElement = this.addTopEdgesAllElement.bind(this);
  }

  componentDidMount() {
    smoothscroll.polyfill();
    this.addTopEdgesAllElement();
    document.addEventListener('scroll', this.scrollDirectionNow);
    window.addEventListener('resize', this.addTopEdgesAllElement);
  }

  componentWillUnmount() {
    smoothscroll.polyfill();
    this.addTopEdgesAllElement();
    document.removeEventListener('scroll', this.scrollDirectionNow);
    window.removeEventListener('resize', this.addTopEdgesAllElement);
  }

  addTopEdgesAllElement = () => {
    const AllEdge = [];
    const { parameters } = this.props;

    parameters.slide.forEach((element, i) => {
      const topEdgeElement = document.getElementById(element);
      if (i > 0 && AllEdge[i - 1] === topEdgeElement.getBoundingClientRect().top + window.pageYOffset) return null;
      AllEdge.push(topEdgeElement.getBoundingClientRect().top + window.pageYOffset);
    });

    this.setState({
      heightWindows: window.innerHeight,
      topEdgesAllElements: AllEdge,
    });
  };

  scrollDirectionNow = () => {
    const { offsetPageYOld } = this.state;

    const offsetPageYNow = window.pageYOffset;

    if (offsetPageYNow > offsetPageYOld) {
      this.animationScollDown();
    } else {
      this.animationScollUp();
    }

    this.setState({
      offsetPageYOld: offsetPageYNow,
    });
  };

  animationScollDown = () => {
    const edgeTopWindow = window.pageYOffset;
    const { wheelActionNumber, topEdgesAllElements, heightWindows } = this.state;

    this.setState({
      wheelActionNumber: wheelActionNumber + 1,
    });

    const isItLastAction = new Promise(resolve => {
      setTimeout(resolve, 60, this.state.wheelActionNumber);
    });

    isItLastAction.then(values => {
      if (this.state.wheelActionNumber === values) {
        const index = topEdgesAllElements.findIndex(el => {
          return el >= edgeTopWindow;
        });

        if (index >= 0) {
          if (topEdgesAllElements[index] < heightWindows + edgeTopWindow && topEdgesAllElements[topEdgesAllElements.length - 1] > edgeTopWindow) {
            window.scrollTo({
              top: topEdgesAllElements[index] - 70,
              behavior: 'smooth',
            });
          }
        }

        this.setState({
          activeIndex: index,
        });
      }
    });
  };

  animationScollUp = () => {
    const edgeTopWindow = window.pageYOffset;
    const { wheelActionNumber, topEdgesAllElements, heightWindows, activeIndex } = this.state;

    this.setState({
      wheelActionNumber: wheelActionNumber + 1,
    });

    const isItLastAction = new Promise(resolve => {
      setTimeout(resolve, 40, this.state.wheelActionNumber);
    });

    isItLastAction.then(values => {
      if (this.state.wheelActionNumber === values) {
        if (activeIndex > 0) {
          if (topEdgesAllElements[activeIndex - 1] < heightWindows + edgeTopWindow) {
            window.scrollTo({
              top: topEdgesAllElements[activeIndex - 1] - 70,
              behavior: 'smooth',
            });
          }
        }
      }
    });
  };

  render() {
    return null;
  }
}

// PropTpyes
ScrollNextElementComponent.propTypes = {
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

// EXPORT NEW COMPONENT
export default ScrollNextElementComponent;
