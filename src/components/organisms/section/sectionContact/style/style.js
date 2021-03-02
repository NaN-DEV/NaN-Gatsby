import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: calc(100vh - 36rem);
  background-color: ${props => props.theme.settings.colorBackgroundDark};
  padding: ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakFat};
`;

export const CompanyData = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  align-items: flex-start;
  padding: ${props => props.theme.settings.break} 0;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 30rem;
    max-width: 30rem;
    padding: ${props => props.theme.settings.breakBig} 0;
  }
`;

export const Point = styled.li`
  display:flex;
  position: relative;
  text-overflow: nowrap;

   a {
     padding-left: ${props => props.theme.settings.breakLight};
   }

  ${props => {
    switch (props.theme.break) {
      case true:
        return css`
          padding-bottom: ${props.theme.settings.breakFat};
        `;
      default:
        return null;
    }
  }}
  
  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 2rem;

    a {
      font-size: 2rem;
    }
  }
`;

export const Important = styled.strong`
  font-weight: bold;
`;

export const FormBox = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  align-items: flex-start;
  padding: ${props => props.theme.settings.break} 0;

  .button {
    width: 100%;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
    padding: ${props => props.theme.settings.breakBig} 0 ${props => props.theme.settings.breakBig} 15rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    padding: ${props => props.theme.settings.breakBig} 0 ${props => props.theme.settings.breakBig} 30rem;
  }
`;

export const MascotBox = styled.div`
  left: 0;
  width: 100%;
  height: 20rem;
  display: block;
  overflow: hidden;
  margin-top: 3rem;
  position: relative;
  border-top: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};

  .mascot {
    top: -10rem;
    bottom: auto;
    width: 20rem;
    position: absolute;
    left: calc(50% - 10rem);
    transform: rotate(180deg);
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    top: 0;
    height: 100%;
    width: 11rem;
    border-top: none;
    margin-top: auto;
    position: absolute;
    border-left: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};

    .mascot {
      top: auto;
      left: -6rem;
      width: 15rem;
      bottom: 1rem;
      transform: rotate(0deg);
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    height: 100%;
    width: 20rem;
    border-top: none;
    position: absolute;
    border-left: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};

    .mascot {
      top: auto;
      bottom: 0;
      left: -12rem;
      width: 30rem;
      transform: rotate(0deg);
    }
  }
`;
