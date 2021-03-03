import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  background-color: ${props => props.theme.settings.colorBackgroundDark};

  .row {
    align-items: center;
    min-height: calc(100vh - 14rem);
  }

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    font-size: 6rem;
    letter-spacing: 0.6rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 2.4rem;
  text-align: center;
  position: relative;
  justify-content: center;
  color: ${props => props.theme.settings.colorText};
  padding: ${props => props.theme.settings.break} ${props => props.theme.settings.breakFat};
`;

export const ContentStatic = styled.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: normal;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 4.5rem;
  }
`;
export const ContentScrambler = styled.span`
  width: 100%;
  display: block;
  color: ${props => props.theme.settings.colorTextActive};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    width: auto;
    display: inline-block;
  }
`;
