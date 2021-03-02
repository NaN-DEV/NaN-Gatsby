import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakFat};
  background-color: ${props => (props.theme.theme ? props.theme.settings.colorBackgroundDark : props.theme.settings.colorBackgroundLight)};
`;

export const Title = styled.h1`
  padding-top: 1rem;
  padding-right: 1.5rem;
  max-width: max-content;
  font-size: 2rem;
  text-align: left;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 30rem;
    font-size: 3rem;
    max-width: 30rem;
    padding-top: 1.5rem;
  }
`;

export const Score = styled.h1`
  max-width: max-content;
  font-size: 3rem;
  text-align: left;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 30rem;
    max-width: 30rem;
    font-size: 4.5rem;
  }
`;

export const Unit = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Description = styled.p`
  flex: 100%;
  max-width: 100%;
  text-align: left;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
    padding-top: 1.5rem;
    flex: calc(100% - 60rem);
    max-width: calc(100% - 60rem);
  }
`;
