import styled, { css } from 'styled-components';

export const Svg = styled.svg`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;

export const Circle = styled.circle`
  z-index: 1;
  stroke-width: 9;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  fill: transparent !important;
  transition: stroke-dashoffset 3s;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          stroke: ${props.theme.secondary} !important;
        `;
      case 'primary':
        return css`
          stroke: ${props.theme.primary} !important;
        `;
      default:
        return css`
          stroke: ${props.theme.primary} !important;
        `;
    }
  }}
`;

export const CircleBg = styled.circle`
  z-index: 0;
  stroke-width: 9;
  position: absolute;

  fill: transparent !important;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          stroke: ${props.theme.primary} !important;
        `;
      case 'primary':
        return css`
          stroke: ${props.theme.secondary} !important;
        `;
      default:
        return css`
          stroke: ${props.theme.secondary} !important;
        `;
    }
  }}
`;
