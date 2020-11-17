import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 6rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.secondary};

  .row {
    align-items: center;
    padding: ${props => props.theme.break};
  }

  .logo {
    margin: 0 auto;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    .logo {
      margin: 0;
    }

    .row {
      padding: 0 ${props => props.theme.break};
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

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    flex: none;
    max-width: auto;
    padding: 0 ${props => props.theme.break};
  }
`;

export const Ul = styled.ul`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;

  a {
    font-weight: bold;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
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

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    flex: none;
    padding-top: 0;
    max-width: auto;
    padding-right: ${props => props.theme.break};
  }
`;
