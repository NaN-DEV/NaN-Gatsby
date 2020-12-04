import styled from 'styled-components';
import { Link } from 'gatsby';

export const BoxCarousel = styled.section`
  display: none;

  @media (min-width: 768px) {
    width: 100%;
    display: block;

    .arrow {
      top: 2.5rem;
      left: 1rem;
      position: absolute;
      transform: rotate(90deg);
    }

    .buttonBack {
      left: 0;
      bottom: 0rem;
      position: absolute;
    }

    .buttonNext {
      right: 0;
      bottom: 0rem;
      position: absolute;
      transform: scaleX(-1);
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 500px;
  background-color: black;

  &:after {
    top: 0;
    right: 0;
    z-index: 0;
    width: 50%;
    content: '';
    height: 100%;
    display: block;
    position: absolute;
    background-color: white;
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
    transform: scaleX(-1) rotate(180deg);
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
    transform: rotate(180deg);
  }

  h1 {
    margin-left: 1.5rem;
  }

  p {
    margin-left: 1.5rem;
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
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
  }
`;

export const Category = styled.p`
  width: 100%;
  display: normal;
  text-align: left;
  font-size: 1.5rem;
`;
