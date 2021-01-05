import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  min-height: calc(100vh - 7rem);
  padding: ${props => props.theme.break};
  background-color: ${props => props.theme.primary};

  .row {
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 6rem);
  }

  .mascot {
    left: 5rem;
    width: 19rem;
    display: block;
    position: absolute;
    bottom: ${props => props.theme.break};
  }

  .triangle {
    z-index: 10;
    width: 100%;
    height: auto;
    display: block;
    max-width: 60rem;
    position: absolute;
    bottom: 0;
    left: 0;

    svg {
      width: 100%;
      height: auto;
      max-width: 60rem;
    }
  }
  @media (min-width: ${props => `${props.theme.breakpoint_mobile}px`}) {
    .mascot {
      left: 6rem;
      width: 30rem;
    }
  }
  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    .mascot {
      left: 6rem;
      width: 35rem;
    }
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    .mascot {
      left: 6rem;
      width: 40rem;
    }
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 100%;
  display: block;
  font-size: 2.4rem;
  text-align: center;
  margin: ${props => props.theme.break} 0;
  color: ${props => props.theme.secondary};
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 4.2rem;
  }
`;
