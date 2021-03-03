import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} 0;

  ${props => {
    switch (props.theme.theme) {
      case 'light':
        return css`
          background-color: ${props.theme.settings.colorBackgroundLight};
        `;
      default:
        return css`
          background-color: ${props.theme.settings.colorBackgroundDark};
        `;
    }
  }}
`;

export const Left = styled.div`
  flex: 100%;
  width: 100%;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 30rem;
    width: 30rem;
    text-align: left;
  }
`;

export const Right = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: calc(100% - 30rem);
    width: calc(100% - 30rem);
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 2rem;
  text-align: left;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
  }
`;

export const Box = styled.div`
  display: block;
  position: relative;
  max-width: max-content;
  margin: ${props => props.theme.settings.breakLight} ${props => props.theme.settings.break} ${props => props.theme.settings.breakLight} 0;

  svg {
    height: 3rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    margin-right: ${props => props.theme.settings.breakBig};
    margin-bottom: ${props => props.theme.settings.breakBig};

    svg {
      height: 9rem;
    }
  }
`;
