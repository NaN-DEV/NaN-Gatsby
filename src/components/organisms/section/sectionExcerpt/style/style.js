import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} 0;
  background-color: ${props => props.theme.settings.colorBackgroundLight};
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 2rem;
  text-align: left;
  padding-bottom: ${props => props.theme.break};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 4.5rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    margin-left: 30rem;
    flex: calc(100% - 30rem);
    width: calc(100% - 30rem);
  }
`;

export const Excerpt = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  text-align: left;
  position: relative;
  padding: ${props => props.theme.settings.break} 0 0 0;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 2rem;
    margin-left: 30rem;
    flex: calc(100% - 30rem);
    width: calc(100% - 30rem);
  }
`;
