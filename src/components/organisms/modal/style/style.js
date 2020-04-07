import styled from 'styled-components';

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: block;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.primary};
`;

export const Header = styled.div`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;

  .button-clouse {
    margin-left: auto;
  }
`;
