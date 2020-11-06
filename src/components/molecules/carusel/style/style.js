import styled from 'styled-components';
import { Link } from 'gatsby';

export const BoxCarousel = styled.section`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: block;
    .button_back {
      left: 0;
      bottom: 0rem;
      position: absolute;
    }
    .button_next {
      position: absolute;
      right: 0;
      bottom: 0rem;
    }
  }
`;

export const BoxCarouselMobile = styled.section`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    .button_back {
      left: 0;
      bottom: 0rem;
      position: absolute;
    }
    .button_next {
      position: absolute;
      right: 0;
      bottom: 0rem;
    }
  }
`;

export const Item = styled.div`
  min-height: 500px;
  height: 50vh;
  width: 100%;
  &:after {
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    content: '';
    height: 100%;
    display: block;
    position: absolute;
    background-color: black;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    &:after {
      width: 50%;
    }
  }
`;

export const BoxLeft = styled(Link)`
  width: 50%;
  z-index: 1;
  color: white;
  height: 100vh;
  position: relative;
  background-color: black;

  .triangle {
    margin-right: auto;
    margin-bottom: auto;
    transform: scaleX(-1);
  }
`;

export const BoxRight = styled(Link)`
  width: 50%;
  z-index: 1;
  color: black;
  height: 100vh;
  position: relative;
  background-color: white;
  .triangle {
    margin-left: auto;
    margin-bottom: auto;
  }
  h1 {
    margin-left: 1.5rem;
  }
  p {
    margin-left: 1.5rem;
  }
`;

export const BoxFull = styled(Link)`
  width: 100%;
  z-index: 1;
  color: white;
  height: 100vh;
  position: relative;
  background-color: black;

  .triangle {
    margin-left: auto;
    margin-bottom: auto;
  }
`;

export const BoxTop = styled.div`
  width: 100%;
  height: 25vh;
  min-height: 25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const BoxBottom = styled.div`
  width: 100%;
  height: calc(25vh - 1.5rem);
  min-height: calc(25rem - 1.5rem);
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  display: block;
  font-size: 3rem;
  text-align: left;
  margin-bottom: 9rem;
  max-width: ${props => props.theme.max_width_half};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 3rem;
  }
`;

export const Category = styled.p`
  width: 100%;
  display: normal;
  text-align: left;
  font-size: 1.5rem;
`;
