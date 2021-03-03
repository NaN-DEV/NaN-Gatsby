import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 30rem;
  display: block;
  overflow: revert;
  position: relative;
  min-height: calc(100vh - 36rem);
  padding: ${props => props.theme.settings.breakFat} 0;

  .row {
    align-items: center;
    min-height: calc(100vh - 42rem);
  }

  .mascot {
    width: 9rem;
    display: block;
    position: absolute;
    bottom: ${props => props.theme.settings.break};
    left: ${props => props.theme.settings.breakFat};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    .mascot {
      width: 20rem;
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    .mascot {
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
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.settings.colorText};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 6rem;
  }
`;
