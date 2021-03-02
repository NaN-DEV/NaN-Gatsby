import styled from 'styled-components';

export const ProgressBar = styled.div`
  margin: 3rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 20rem;
  align-items: flex-start;
`;

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  display: block;
  position: relative;
`;

export const Svg = styled.svg`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
`;

export const Circle = styled.circle`
  z-index: 1;
  stroke-width: 9;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  fill: transparent !important;
  transition: stroke-dashoffset 6s;
  stroke: ${props => props.theme.settings.colorTextActive};
`;

export const CircleBg = styled.circle`
  z-index: 0;
  stroke-width: 9;
  position: absolute;
  fill: transparent !important;
  stroke: ${props => props.theme.settings.colorBackgroundDisactive};
`;

export const Score = styled.p`
  width: 100%;
  display: block;
  font-size: 3rem;
  margin-top: 8rem;
  font-weight: bold;
  text-align: center;
  position: absolute;
  text-overflow: ellipsis;
`;

export const Unit = styled.span`
  padding: 0 0.6rem;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
`;
