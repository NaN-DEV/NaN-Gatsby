import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  padding: 3rem 0;
  position: relative;
  padding: ${props => props.theme.break} 0;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `;
      default:
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `;
    }
  }}

  .row {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 6rem;
  }
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  font-weight: normal;
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
  }
`;
