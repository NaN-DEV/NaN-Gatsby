import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.settings.colorBackgroundLight};
  padding: ${props => props.theme.settings.break} ${props => props.theme.settings.breakFat};

  .listLink {
    width: auto;
    margin-left: auto;
  }
`;

export const Copyright = styled.div`
  display: none;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    max-width: auto;
    align-items: center;
    display: inline-block;
    max-width: max-content;
    justify-content: center;
    color: ${props => props.theme.settings.colorText};
    padding: 0 ${props => props.theme.settings.break};
  }
`;
