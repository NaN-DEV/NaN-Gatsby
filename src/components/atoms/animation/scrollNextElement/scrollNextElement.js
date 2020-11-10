/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

// CREATE NEW COMPONENT
class ScrollNextElementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopTimeFor: 0,
      nextElement: 0,
      offsetPageYOld: 0,
      shiftDirection: 'down',
      allElementsOffsetToWindowTop: [],
    };
    this.scrollUpOrDown = this.scrollUpOrDown.bind(this);
    this.whoIsNextElement = this.whoIsNextElement.bind(this);
    this.timeStopForDevices = this.timeStopForDevices.bind(this);
    this.addAllElementsOffsetTop = this.addAllElementsOffsetTop.bind(this);
  }

  // Wykonuje po zmontowaniu komponentu
  componentDidMount() {
    smoothscroll.polyfill();
    this.timeStopForDevices();
    this.addAllElementsOffsetTop();
    document.addEventListener('scroll', this.scrollUpOrDown);
    document.addEventListener('scroll', this.whoIsNextElement);
    document.addEventListener('resize', this.timeStopForDevices);
    window.addEventListener('resize', this.addAllElementsOffsetTop);
  }

  // Usuwam funkcje gdy nie uywam komponentu
  componentWillUnmount() {
    smoothscroll.polyfill();
    this.timeStopForDevices();
    this.addAllElementsOffsetTop();
    document.removeEventListener('scroll', this.scrollUpOrDown);
    document.removeEventListener('scroll', this.whoIsNextElement);
    document.removeEventListener('resize', this.timeStopForDevices);
    window.removeEventListener('resize', this.addAllElementsOffsetTop);
  }

  // Funkcja sprawdza czy lecę w dół czy w górę
  scrollUpOrDown() {
    // Pobieram potrzebny state
    const { offsetPageYOld } = this.state;

    // Srawdzam o ile px został przewinięty dokument
    const offsetPageY = window.pageYOffset;

    // Sprawdzam czy przewijam w górę czy w dół
    if (offsetPageY > offsetPageYOld) {
      this.setState({
        shiftDirection: 'down',
      });
    } else {
      this.setState({
        shiftDirection: 'up',
      });
    }
    // Dodaję aktualną pozycje dokumentu
    this.setState({
      offsetPageYOld: offsetPageY,
    });
  }

  // Ustalam zatrzymanie czasu dla urządzeń
  timeStopForDevices() {
    if (window.innerWidth < 768) {
      this.setState({
        stopTimeFor: 2000,
      });
    } else {
      this.setState({
        stopTimeFor: 1500,
      });
    }
  }

  // Ustalam odległosć między wszystkimi elementami a górną krawędzią
  addAllElementsOffsetTop() {
    const { allSlide } = this.props;
    const { allElementsOffsetToWindowTop } = this.state;
    // eslint-disable-next-line array-callback-return
    allSlide.map((item, i) => {
      if (allSlide[i - 1] === item) {
        return true;
      }
      allElementsOffsetToWindowTop.push(document.getElementById(item).getBoundingClientRect().top + window.pageYOffset);
    });
  }

  whoIsNextElement() {
    // Pobieram sobie potrzebne stany
    const { allElementsOffsetToWindowTop, nextElement, stopTimeFor, offsetPageYOld, shiftDirection } = this.state;

    // Sprawdzam w którym kierunku scrolujemy
    switch (shiftDirection) {
      case 'down':
        // Sprawdzam kolejność elementów do których będę przesuwał ekran scrolując w dół
        const whoIsNextElementScrollDown = allElementsOffsetToWindowTop.filter(item => {
          return item > offsetPageYOld - 70;
        });

        // Sprawdzam następny element
        if (whoIsNextElementScrollDown.length > 0) {
          this.setState({
            nextElement: whoIsNextElementScrollDown[0],
          });

          // Sprawdzam czy mam juz scrolować do kolejnego elementu
          if (nextElement >= whoIsNextElementScrollDown[0] || whoIsNextElementScrollDown[0] < 100) {
            return true;
          }

          // Blokuje moliwość scrolowania
          document.body.style.overflow = 'hidden';

          // Przesuwam do kolejnego elementu
          window.scrollTo({
            top: whoIsNextElementScrollDown[0],
            behavior: 'smooth',
          });

          // Odblokowuje moliwośći scrolowania
          setTimeout(() => {
            document.body.style.overflow = 'auto';
          }, stopTimeFor);
        }

        break;
      default:
        // Sprawdzam kolejność elementów do których będę przesuwał ekran scrolując w górę
        const whoIsNextElementScrollUp = allElementsOffsetToWindowTop.filter(item => {
          return item < offsetPageYOld + 70;
        });
        if (whoIsNextElementScrollUp.length > 1) {
          this.setState({
            nextElement: whoIsNextElementScrollUp[whoIsNextElementScrollUp.length - 1] || 0,
          });
        }
        // Sprawdzam czy mam juz scrolować do kolejnego elementu
        if (
          nextElement <= whoIsNextElementScrollUp[whoIsNextElementScrollUp.length - 1] ||
          whoIsNextElementScrollUp[whoIsNextElementScrollUp.length - 1] < 100
        ) {
          return true;
        }
        // Blokuje moliwość scrolowania
        document.body.style.overflow = 'hidden';

        // Przesuwam do kolejnego elementu
        window.scrollTo({
          top: whoIsNextElementScrollUp[whoIsNextElementScrollUp.length - 1],
          behavior: 'smooth',
        });

        // Odblokowuje moliwośći scrolowania
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, stopTimeFor);
    }
    return null;
  }

  render() {
    return null;
  }
}

// PropTpyes
ScrollNextElementComponent.propTypes = {
  allSlide: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

// EXPORT NEW COMPONENT
export default ScrollNextElementComponent;
