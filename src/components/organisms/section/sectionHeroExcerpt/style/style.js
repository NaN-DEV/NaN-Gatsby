import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.break} 0;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  .row {
    align-items: center;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 6rem;
  }
`;

export const Excerpt = styled.p`
  flex: 100%;
  width: 100%;
  text-align: center;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
  }
`;
