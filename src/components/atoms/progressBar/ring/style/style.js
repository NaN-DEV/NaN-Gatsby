import styled, { css } from 'styled-components';

export const ProgressBarBoxOptions = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  padding: 3rem 0;
  flex-wrap: wrap;
  justify-content: center;
  .icon {
    display: flex;
    justify-content: center;
    svg {
      height: 25rem;
    }
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 33.3333%;
    flex: 33.3333%;
    padding: 0 0;
    &:nth-child(0n + 1) {
      justify-content: flex-start;
    }
    &:nth-child(0n + 2) {
      justify-content: center;
    }
    &:nth-child(0n + 3) {
      justify-content: flex-end;
    }
  }
`;

export const ProgressBarBox = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const ProgressBarScore = styled.p`
  margin-top: 11rem;
  width: 100%;
  display: block;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  position: absolute;
  text-overflow: ellipsis;
`;

export const ProgressBarUnit = styled.span`
  padding: 0 0.3rem;
  font-size: 1.5rem;
`;

export const ProgressBarDescription = styled.div`
  width: 100%;
  max-width: 250px;
  font-size: 2.4rem;
  padding: 1.5rem 0;
  text-align: center;
`;

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
  transition: stroke-dashoffset 6s;
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
