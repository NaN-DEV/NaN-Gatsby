import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakFat};

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
  position: relative;

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-top: ${props => props.theme.settings.break};

    li {
      max-width: max-content;
      padding-top: 0;
      padding-left: 0;
      padding-right: ${props => props.theme.settings.break};
      padding-bottom: ${props => props.theme.settings.break};
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    .tags {
      padding-top: 0;
    }

    text-align: left;
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

export const Description = styled.p`
  display: block;
  text-align: left;
  position: relative;
  padding-top: ${props => props.theme.settings.break};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 2rem;
    padding-top: 0 !important;
  }
`;

export const Tag = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.settings.colorText};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    font-size: 3rem;
  }
`;

export const BoxOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: stretch;
  justify-content: center;
`;

export const ElementOptions = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    width: 33.3333%;
    flex: 33.3333%;
    padding: 0 0;
    &:nth-child(0n + 1) {
      justify-content: flex-start;
    }
    &:nth-child(0n + 2) {
      justify-content: center;
    }
    &:nth-child(0n + 3) {
      justify-content: flex-end;
    }
  }
`;

export const BoxElementOptions = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionOptionsIcon = styled.div`
  width: 100%;
  max-width: 300px;
  font-size: 2.4rem;
  padding: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;
