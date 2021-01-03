import styled, { css } from 'styled-components';

const cssHeader = css`
  width: 100%;
  min-height: 7rem;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  ${cssHeader}
  z-index: 9999;
  display: flex;
  position: fixed;
  background: black;

  .open {
    margin-left: auto;
  }
`;

export const HeaderStopBox = styled.div`
  ${cssHeader}
  display: block;
  position: relative;
  background: transparent;
`;
