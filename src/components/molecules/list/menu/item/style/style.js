import styled from 'styled-components';

const Li = styled.li`
  padding: 3px;
  display: flex;
  height: 33.3333%;
  min-height: 15rem;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    text-decoration: none;
    justify-content: center;
    text-transform: uppercase;
    padding: ${props => props.theme.break_mobile};
    transition: ${props => props.theme.animation_time};
    background-color: ${props => props.theme.secondary};
    p {
      flex: 100%;
      width: 100%;
      line-height: 1;
      font-weight: 600;
      text-align: left;
      font-weight: bold;
      font-size: 1.5rem;
      color: ${props => props.theme.primary};
    }
    svg {
      margin-bottom: 15px;
    }
  }
  &:hover {
    a {
      background-color: ${props => props.theme.secondary_hover};
    }
  }
  &:nth-child(1) {
    flex: 50%;
    max-width: 50%;
    padding-top: 0;
    padding-left: 0;
  }
  &:nth-child(2) {
    flex: 50%;
    max-width: 50%;
    padding-top: 0;
    padding-right: 0;
  }
  &:nth-child(3) {
    flex: 50%;
    max-width: 50%;
    padding-left: 0;
  }
  &:nth-child(4) {
    flex: 50%;
    max-width: 50%;
    padding-right: 0;
  }
  &:nth-child(5) {
    flex: 50%;
    max-width: 50%;
    padding-left: 0;
    padding-bottom: 0;
  }
  &:nth-child(6) {
    flex: 50%;
    max-width: 50%;
    padding-right: 0;
    padding-bottom: 0;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    a {
      padding: ${props => props.theme.break_desctop};
    }
    p {
      font-size: 2.4rem;
    }

    &:nth-child(3) {
      flex: 25%;
      max-width: 25%;
    }
    &:nth-child(4) {
      flex: 50%;
      max-width: 50%;
      padding-right: 3px;
    }

    &:nth-child(5) {
      flex: 25%;
      max-width: 25%;
      padding-right: 0;
      padding-left: 3px;
      padding-bottom: 3px;
    }
    &:nth-child(6) {
      flex: 100%;
      max-width: 100%;
      padding-left: 0;
    }
  }
`;

export default Li;
