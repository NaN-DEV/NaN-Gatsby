import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ModalBox = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  overflow-y: auto;
  padding-left: 0px;
  overflow-x: hidden;
`;

export const Modal = styled.div`
  top: 0;
  left: 0;
  display: block;
  overflow: auto;
  flex-wrap: wrap;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.settings.colorBackgroundDark};

  .closed {
    margin-left: auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.settings.break} 0;
`;

export const Content = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.break} 0;

  .row {
    align-items: center;
    min-height: calc(100vh - 14rem);
  }
`;

export const MainInfo = styled.p`
  flex: 100%;
  width: 100%;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.settings.colorText};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  min-height: 7rem;
  position: relative;
  padding: ${props => props.theme.settings.break} ${props => props.theme.settings.breakFat};
`;
