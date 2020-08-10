// IMPORT PLUGIN
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// CREATE NEW COMPONENT
class ScrollNextElementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastOffsetY: 0,
      nextUpSlide: 0,
      nextDownSlide: 0,
      timeBlock: 0,
    };
  }

  componentDidMount() {
    smoothscroll.polyfill();
    const { allSlide } = this.props;

    let previousOffsetY = window.pageYOffset;
    // Sprawdzam czy istnieją jakieś elementy do których ma przesiunąć ekran
    if (allSlide.length > 0) {
      // Wszystkie elementy oraz ich wysokośći
      let offsetAllElement = [];

      // Funkcja do ustalania wysokości wszystkich elementów
      const addOffsetAllElement = () => {
        // Czyszczę tablicę z wysokościami elementów
        offsetAllElement = [];

        // Ustalam czas blokady dla urządzeń mobilnych
        if (window.innerWidth < 768) {
          this.setState({
            timeBlock: 2000,
          });
        } else if (window.innerWidth >= 768) {
          this.setState({
            timeBlock: 1500,
          });
        }

        // Dodaję do  tablicy elementy

        allSlide.forEach((element, index) => {
          const elementOffset = document.getElementById(element).getBoundingClientRect().top + previousOffsetY;

          if (offsetAllElement[index - 1]) {
            if (elementOffset === offsetAllElement[index - 1].offsetElement) {
              return true;
            }
            return offsetAllElement.push({
              name: element,
              offsetElement: elementOffset,
            });
          }
          return offsetAllElement.push({
            name: element,
            offsetElement: elementOffset,
          });
        });
      };

      addOffsetAllElement();

      // sprawdzam czy nie zmienił się wymiar okna jeli tak dodaje na nowo do tablicy elementy do których mam scrolować

      window.addEventListener('resize', addOffsetAllElement);

      // jezeli istnieją sprawdzaj przy scrolowaniu aktualną pozycje ekranu

      window.addEventListener('scroll', () => {
        previousOffsetY = window.pageYOffset;
        const { lastOffsetY, nextDownSlide, nextUpSlide, timeBlock } = this.state;

        // Sprawdzam w którym kierunku scroluje dokument w Górę czy w  dół

        if (previousOffsetY > lastOffsetY) {
          // aktualizuje ostatni element

          this.setState({ lastOffsetY: previousOffsetY || 0 });

          // Sprawdzam który będzie kolejny  element przesuwajac  stronę w dół

          const downNextElement = offsetAllElement.filter(item => {
            return item.offsetElement > previousOffsetY - 70;
          });

          // Sprawdzam czy jakiś elementistnieje
          if (downNextElement.length > 0) {
            // Aktualizuje  w state kolejny element

            this.setState({
              nextDownSlide: downNextElement[0].offsetElement,
            });

            // Sprawdzam czy mam juz scrolować do kolejnego elementu
            if (nextDownSlide >= downNextElement[0].offsetElement || downNextElement[0].offsetElement < 100) {
              return true;
            }
            // Blokuje moliwość scrolowania
            document.body.style.overflow = 'hidden';

            // Przesuwam do kolejnego elementu
            window.scrollTo({
              top: downNextElement[0].offsetElement,
              behavior: 'smooth',
            });

            // Odblokowuje moliwośći scrolowania
            setTimeout(() => {
              document.body.style.overflow = 'auto';
            }, timeBlock);
          }
        } else {
          // aktualizuje ostatni element
          this.setState({ lastOffsetY: previousOffsetY || 0 });

          // Sprawdzam który będzie kolejny  element przesuwajac  stronę w dół
          const upNextElement = offsetAllElement.filter(item => {
            return item.offsetElement < previousOffsetY + 70;
          });

          // Sprawdzam czy jakiś elementistnieje
          if (upNextElement.length > 1) {
            // Aktualizuje  w state kolejny element
            this.setState({
              nextUpSlide: upNextElement[upNextElement.length - 1].offsetElement || 0,
            });

            // Sprawdzam czy mam juz scrolować do kolejnego elementu
            if (nextUpSlide <= upNextElement[upNextElement.length - 1].offsetElement || upNextElement[upNextElement.length - 1].offsetElement < 100) {
              return true;
            }

            // Blokuje moliwość scrolowania
            document.body.style.overflow = 'hidden';

            // Przesuwam do kolejnego elementu
            window.scrollTo({
              top: upNextElement[upNextElement.length - 1].offsetElement,
              behavior: 'smooth',
            });

            // Odblokowuje moliwośći scrolowania
            setTimeout(() => {
              document.body.style.overflow = 'auto';
            }, timeBlock);

            return true;
          }
        }
        return null;
      });
    }
  }

  render() {
    return null;
  }
}

// EXPORT NEW COMPONENT
export default ScrollNextElementComponent;
