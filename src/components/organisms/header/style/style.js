import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  min-height: 7rem;
  display: flex;
  position: relative;
  padding: 1.5rem 3rem;
  background: ${props => props.theme.settings.colorBackgroundDark};

  .open {
    margin-left: auto;
  }
`;

export default Header;
