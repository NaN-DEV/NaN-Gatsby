import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  min-height: 7rem;
  position: relative;
  padding: ${props => props.theme.settings.break} 0;
  background: ${props => props.theme.settings.colorBackgroundDark};

  .open {
    margin-left: auto;
  }
`;

export default Header;
