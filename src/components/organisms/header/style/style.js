import styled, { css } from 'styled-components';

const cssHeader = css`
  width: 100%;
  height: 6rem;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  ${cssHeader}
  z-index: 9999;
  display: flex;
  background: black;
  position: absolute;
  .row {
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 ${props => props.theme.break};
  }
  .logo,
  .search {
    margin-right: ${props => props.theme.break};
  }
`;

export const HeaderStopBox = styled.div`
  ${cssHeader}
  display: block;
  position: relative;
  background: transparent;
`;
