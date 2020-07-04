import styled, { css } from 'styled-components';

const cssHeader = css`
  width: 100%;
  height: 60px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  ${cssHeader}
  z-index: 9999;
  display: flex;
  background: black;
  position: absolute;
`;

export const HeaderStopBox = styled.div`
  ${cssHeader}
  display: block;
  position: relative;
  background: transparent;
`;
