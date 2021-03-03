import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  padding: ${props => props.theme.settings.breakBig} ${props => props.theme.settings.breakFat};
`;

export const ContentBox = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  flex-direction: row;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
    padding-right: ${props => props.theme.settings.break};
  }
`;

export const PointBox = styled.div`
  flex: 30rem;
  width: 30rem;
`;

export const Point = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: ${props => props.theme.settings.break} ;



  &::before {
    display: block;
    font-size: 15rem;
    font-weight: bold;
    position: relative;
    text-align: center;
    line-height: 12rem;
    content: "${props => props.number}";
    color: ${props => props.theme.settings.colorBackgroundDisactive};
  }

    @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
       min-height: 30rem;

         &::before {
           width: 100%;
           font-size: 40rem;
           line-height: 30rem;
           position: absolute;
           text-align: center;
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
  padding-left: ${props => props.theme.settings.break};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
    text-align: center;
    padding: 0 ${props => props.theme.settings.break};
  }
`;

export const Content = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding-bottom: ${props => props.theme.settings.breakFat};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
    padding-bottom: ${props => props.theme.settings.breakBig};
  }
`;

export const Description = styled.div`
  text-align: left;
  position: relative;
  padding-right: ${props => props.theme.settings.break};

  p {
    text-align: left !important;
    padding-bottom: ${props => props.theme.settings.breakFat};

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  ul,
  ol {
    padding: revert;
    margin-bottom: ${props => props.theme.settings.breakFat};
    li {
      text-align: left !important;
      padding-top: ${props => props.theme.settings.break};
    }
  }

  blockquote {
    max-width: 100%;
    height: auto;
    border-radius: 0.6rem;
    padding: ${props => props.theme.settings.break};
    margin: ${props => props.theme.settings.break} 0;
    border: 0.1rem solid ${props => props.theme.settings.colorBorder};
    background-color: ${props => props.theme.settings.colorMainBackGround};

    p {
      width: 100%;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;

      &::before {
        content: '„';
      }
      &::after {
        content: '”';
      }
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  flex: 50%;
  max-width: 50%;
  height: ${props => props.theme.settings.border};
  margin: ${props => props.theme.settings.break} auto;
  background-color: ${props => props.theme.settings.colorBorder};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    margin: ${props => props.theme.settings.breakFat} auto;
  }
`;

export const Image = styled(GatsbyImage)`
  flex: 100%;
  width: 100%;
  display: block;
  filter: grayscale(100%);
`;

export const SaleBox = styled.div`
  left: 0;
  bottom: 0;
  flex: 100%;
  width: 100%;
  z-index: 99;
  display: block;
  position: fixed;
  background-color: ${props => props.theme.settings.colorBorder};
  padding: ${props => props.theme.settings.break} ${props => props.theme.settings.breakFat};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    padding: 0;
    left: auto;
    flex: 30rem;
    width: 30rem;
    bottom: auto;
    position: relative;
    background-color: transparent;
  }
`;

export const Sale = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Avatar = styled.div`
  display: none;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    height: 30rem;
    display: block;
    overflow: hidden;
    padding-top: ${props => props.theme.settings.break};
    margin-bottom: ${props => props.theme.settings.break};
    background-color: ${props => props.theme.settings.colorBackgroundLight};
  }
`;
