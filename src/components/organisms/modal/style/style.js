import styled, { createGlobalStyle, css } from 'styled-components';

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
  z-index: 9999;
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
  background-color: black;
  .row {
    padding: 0 ${props => props.theme.break} !important;
  }
  .closed {
    margin-left: auto;
  }
`;

export const Header = styled.div`
  flex: 100%;
  height: 6rem;
  display: flex;
  max-width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  align-items: flex-start;
  min-height: calc(100vh - 12rem);
`;

export const MainManu = styled.ul`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  min-height: calc(100vh - 12rem);
`;

export const BoxMenu = styled.li`
  flex: 50%;
  width: 50%;
  padding: 0 0.6rem 0.6rem 0;

  a {
    width: 100%;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    min-height: 20rem;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.break};
    background-color: ${props => props.theme.tertiary_1};
    &:hover {
      background-color: ${props => props.theme.tertiary_3};
      p {
        color: ${props => props.theme.primary};
      }
      svg {
        fill: ${props => props.theme.primary};
      }
    }
  }
  .icon-menu {
    margin-top: auto;
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    ${props =>
      props.size
        ? css`
            flex: ${`${props.size}%`};
            max-width: ${`${props.size}%`};
          `
        : css`
            flex: 100%;
            width: 100%;
          `}
  }
`;

export const MenuTitle = styled.p`
  width: 100%;
  display: block;
  margin-top: auto;
  text-align: left;
  font-weight: bold;
  color: ${props => props.theme.secondary};
`;

export const Ul = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  list-style: none;

  a {
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: none;
    max-width: auto;
  }
`;

export const Li = styled.li`
  flex: 100%;
  max-width: 100%;
  text-align: center;
  padding-top: ${props => props.theme.break};

  &:last-of-type {
    padding-right: 0;
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: none;
    padding-top: 0;
    max-width: auto;
    padding-right: ${props => props.theme.break};
  }
`;

export const Footer = styled.div`
  flex: 100%;
  min-height: 6rem;
  display: flex;
  max-width: 100%;
  align-items: center;
  .link {
    margin: 0 auto ${props => props.theme.break} auto;
    @media (min-width: ${props => props.theme.breakpoint_tablet}) {
      margin: 0;
    }
  }
  .right {
    @media (min-width: ${props => props.theme.breakpoint_tablet}) {
      margin-left: auto;
      margin-right: 0.3rem;
    }
  }
`;

export const Url = styled.a``;
