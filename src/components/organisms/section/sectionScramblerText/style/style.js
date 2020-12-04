import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  font-size: 3rem;
  align-items: center;
  letter-spacing: 0.3rem;
  height: calc(100vh - 7rem);

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

  .array {
    bottom: 0rem;
    display: block;
    position: absolute;
    left: calc(50% - 1.5rem);
    animation-duration: 1.2s;
    animation-name: ArrayAnimation;
    animation-iteration-count: infinite;

    @keyframes ArrayAnimation {
      0% {
        bottom: ${props => props.theme.break};
      }
      50% {
        bottom: 0rem;
      }
      100% {
        bottom: ${props => props.theme.break};
      }
    }
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
  position: relative;
  justify-content: center;
`;
