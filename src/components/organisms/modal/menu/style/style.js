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
  background-color: ${props => props.theme.primary};

  .closed {
    margin-left: auto;
  }
`;

export const Header = styled.div`
  min-height: 7rem;
  position: relative;
`;

export const Content = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;

  .rowContent {
    padding: 0 ${props => props.theme.break};
  }
`;

export const MainManu = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  min-height: calc(100vh - 14rem);

  .buttonMenu {
    flex: 100%;
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: 20rem;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.break};
    background-color: ${props => props.theme.secondary};
    border: ${props => props.theme.border} solid ${props => props.theme.primary};

    @media (min-width: ${props => `${props.theme.breakpoint_mobile}px`}) {
      flex: 50%;
      max-width: 50%;
    }
    @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
      &:nth-child(1n + 1) {
        flex: 50%;
        max-width: 50%;
        border-left: 0 solid ${props => props.theme.primary};
      }
      &:nth-child(2n + 2) {
        flex: 50%;
        max-width: 50%;
        border-right: 0 solid ${props => props.theme.primary};
        border-left: ${props => props.theme.border} solid ${props => props.theme.primary};
      }
      &:nth-child(3n + 3) {
        flex: 25%;
        max-width: 25%;
        border-left: 0 solid ${props => props.theme.primary};
        border-right: ${props => props.theme.border} solid ${props => props.theme.primary};
      }
      &:nth-child(4n + 4) {
        flex: 50%;
        max-width: 50%;
        border-left: ${props => props.theme.border} solid ${props => props.theme.primary};
        border-right: ${props => props.theme.border} solid ${props => props.theme.primary};
      }
      &:nth-child(5n + 5) {
        flex: 25%;
        max-width: 25%;
        border-right: 0 solid ${props => props.theme.primary};
        border-left: ${props => props.theme.border} solid ${props => props.theme.primary};
      }
      &:nth-child(6n + 6) {
        flex: 100%;
        max-width: 100%;
        border-left: 0 solid ${props => props.theme.primary};
        border-right: 0 solid ${props => props.theme.primary};
      }
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  display: block;
  font-weight: bold;
  position: absolute;
  left: ${props => props.theme.break};
  bottom: ${props => props.theme.break};
  color: ${props => props.theme.priamry};
`;

export const Footer = styled.div`
  flex: 100%;
  max-width: 100%;
  min-height: 7rem;
  position: relative;
  .listLink {
    a {
      color: ${props => props.theme.secondary};
    }
    @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
      &:last-child {
        margin-left: auto;
      }
    }
  }
`;
