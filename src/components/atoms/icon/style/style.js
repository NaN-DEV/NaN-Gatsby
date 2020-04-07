import styled from 'styled-components';

const Icon = styled.div`
  width: ${props =>
    props.triangle
      ? '15rem'
      : `${props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`}`};
  height: ${props =>
    props.triangle
      ? '9rem'
      : `${props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`}`};
  a {
    width: ${props =>
      props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`};
    height: ${props =>
      props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`};
  }
  svg {
    width: ${props =>
      props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`};
    height: ${props =>
      props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`};
    path {
      fill: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: ${props =>
      props.triangle
        ? '29rem'
        : `${props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`}`};
    height: ${props =>
      props.triangle
        ? '18rem'
        : `${
            props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`
          }`};
    a {
      width: ${props =>
        props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`};
      height: ${props =>
        props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`};
      svg {
        width: ${props =>
          props.width_mobile ? props.width_mobile : `${props.width ? props.width : '3rem'}`};
        height: ${props =>
          props.height_mobile ? props.height_mobile : `${props.height ? props.height : '3rem'}`};
      }
    }
  }
`;

export default Icon;
