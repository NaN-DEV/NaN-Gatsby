import styled from 'styled-components';

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} 0;
  background-color: ${props => props.theme.settings.colorBackgroundDark};
`;

export const Step = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;


  &::before {
    display: block;
    font-size: 15rem;
    font-weight: bold;
    position: relative;
    text-align: center;
    line-height: 12rem;
    content: "${props => props.theme.number}";
    color: ${props => props.theme.settings.colorBackgroundDisactive};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    min-height: 15rem;
       
       &::before {
         width: 100%;
         font-size: 20rem;
         line-height: 15rem;
         position: absolute;
         text-align: center;
       }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex:30rem;
    max-width:30rem;
    min-height: 30rem;

     &::before {
       font-size: 40rem;
       line-height: 30rem;
     }
   }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  display: block;
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  position: relative;
  letter-spacing: 0.3rem;
  padding: 0 ${props => props.theme.settings.breakFat};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Box = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: ${props => props.theme.settings.breakBig} 0;

  .CheckBox {
    flex: 100%;
    max-width: 100%;
    padding: ${props => props.theme.settings.breakLight} 0;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    .CheckBox {
      flex: 33.3333%;
      max-width: 33.3333%;
      padding: 0 0 0 ${props => props.theme.settings.breakLight};
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
  }
`;

export const Half = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  .list {
    display: none;
  }

  .button {
    width: 100%;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    height: 100%;
    display: flex;
    max-width: 50%;
    flex-direction: column;
    justify-content: center;
    padding: ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakBig} 0;

    .list {
      display: block;
      padding-left: 10rem;
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    .list {
      padding-left: 20rem;
    }
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

export const Point = styled.p`
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
`;
