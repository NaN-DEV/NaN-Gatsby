import styled from 'styled-components';

export const Section = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 7rem);
  background-color: ${props => props.theme.tertiary_6};

  .row {
    flex-direction: column;
    min-height: calc(100vh - 7rem);
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

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 100 1 auto;
  min-height: 20rem;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .button {
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  color: ${props => props.theme.secondary};
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 6rem;
  }
`;
