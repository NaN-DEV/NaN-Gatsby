import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 7rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.secondary};

  .row {
    align-items: center;
  }

  .logo {
    margin: 0 auto;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    .logo {
      margin: 0;
    }

    .listLink {
      margin-left: auto;
    }
  }
`;

export const Copyright = styled.div`
  flex: 100%;
  display: flex;
  line-height: 1;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.break};

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: none;
    max-width: auto;
    padding: 0 ${props => props.theme.break};
  }
`;
