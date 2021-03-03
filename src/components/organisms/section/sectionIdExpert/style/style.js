import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  overflow: revert;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} 0;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    padding: ${props => props.theme.settings.break} 0 ${props => props.theme.settings.breakBig} 0;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: block;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    width: 12rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    width: 30rem;
    position: relative;
    padding-top: 10rem;
  }
`;

export const Title = styled.p`
  display: none;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    top: 0rem;
    display: block;
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    padding-right: ${props => props.theme.settings.break};
  }
`;

export const Image = styled(BackgroundImage)`
  left: 0;
  top: 0rem;
  width: 12rem;
  z-index: 100;
  height: 12rem;
  display: block;
  margin-right: ${props => props.theme.settings.break};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    left: 0;
    top: -17rem;
    z-index: 100;
    height: 24rem;
    display: block;
    width: 20rem;
    position: absolute !important;
    left: -${props => props.theme.settings.borderFat};
    border: solid ${props => props.theme.settings.borderFat} ${props => props.theme.settings.colorBackgroundDark};
  }
`;

export const Right = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    width: calc(100% - 12rem);
    padding-left: ${props => props.theme.settings.break};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    padding-left: 0;
    width: calc(100% - 30rem);
  }
`;

export const NameExpert = styled.h1`
  width: 100%;
  font-size: 2rem;
  text-align: left;
  padding: ${props => props.theme.settings.break} 0;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    padding: 0;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    width: 100%;
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  display: block;
  text-align: left;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
    padding-top: 7rem;
  }
`;
