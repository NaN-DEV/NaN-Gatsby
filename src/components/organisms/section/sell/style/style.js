import styled from 'styled-components';

export const Section = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.primary};

  .row {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .mascot {
    width: 12rem;
    display: block;
    position: absolute;
    left: ${props => props.theme.break};
    bottom: ${props => props.theme.break};
  }

  .triangle {
    display: block;
    position: absolute;
    left: ${props => props.theme.break};
    bottom: ${props => props.theme.break};
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    .mascot {
      left: 1.5rem;
      width: 15rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    .mascot {
      left: 9rem;
      width: 18rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    .mascot {
      left: 10rem;
      width: 30rem;
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
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 4.2rem;
  }
`;
