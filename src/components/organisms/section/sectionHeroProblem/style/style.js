import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  padding: ${props => props.theme.break} 0;
  position: relative;
  ${props => {
    switch (props.colorStyle) {
      case 'primary':
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `;
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
`;

export const Title = styled.p`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: ${props => props.theme.break};

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 25rem;
    max-width: 25rem;
    text-align: left;
  }
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  font-weight: normal;
  padding-right: ${props => props.theme.break};

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
    text-align: left;
    min-height: 15rem;
    flex: calc(25rem - 100%);
  }
`;
