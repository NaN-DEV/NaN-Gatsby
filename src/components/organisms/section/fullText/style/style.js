import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 6rem 0;
  flex-wrap: wrap;
  min-height: 50vh;
  position: relative;
  flex-direction: column;
  justify-content: center;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `;
      case 'tertiary_1':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_1};
        `;
      case 'tertiary_2':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_2};
        `;
      case 'tertiary_3':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_3};
        `;
      case 'tertiary_4':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_4};
        `;
      default:
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `;
    }
  }}
`;

export const Title = styled.h1`
  flex: 100%;
  width: 1005;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 25rem;
    width: 25rem;
    text-align: left;
  }
`;

export const Description = styled.p`
  display: block;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  font-weight: normal;
  flex: calc(100% - 25rem);
  width: calc(100% - 25rem);
  padding-right: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    text-align: left;
    flex: calc(100% - 25rem);
    width: calc(100% - 25rem);
  }
`;
