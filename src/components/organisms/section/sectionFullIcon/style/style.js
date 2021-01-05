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
    switch (props.colorStyle) {
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

export const Left = styled.div`
  flex: 100%;
  width: 100%;
  position: relative;
  padding-top: 1.5rem;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 25rem;
    width: 25rem;
    text-align: left;
  }
`;
export const Right = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: calc(100% - 25rem);
    width: calc(100% - 25rem);
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Box = styled.div`
  display: block;
  position: relative;

  svg {
    opacity: 0.8;
    height: 10rem;
    margin: 1.5rem 6rem;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    svg {
      opacity: 0.8;
      height: 15rem;
      margin: 1.5rem 6rem;
    }
  }
`;
