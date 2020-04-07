import styled from 'styled-components';

const Header = styled.header`
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: ${props => props.theme.animation_time};
  background-color: ${props => props.theme.primary};

  form {
    padding: 0 30px;
  }

  form {
    display: none;
  }

  .button-hamburger {
    margin-left: auto;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    form {
      display: block;
    }
  }
`;

export default Header;
