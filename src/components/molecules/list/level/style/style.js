import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  list-style: none;

  a {
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: ${props =>
      props.breakpoint === 'mobile'
        ? props.theme.breakpoint_mobile
        : `${
            props.breakpoint === 'tablet'
              ? props.theme.breakpoint_tablet
              : props.theme.breakpoint_desktop
          }`}) {
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

  @media (min-width: ${props =>
      props.breakpoint === 'mobile'
        ? props.theme.breakpoint_mobile
        : `${
            props.breakpoint === 'tablet'
              ? props.theme.breakpoint_tablet
              : props.theme.breakpoint_desktop
          }`}) {
    flex: none;
    padding-top: 0;
    max-width: auto;
    padding-right: ${props => props.theme.break};
  }
`;
