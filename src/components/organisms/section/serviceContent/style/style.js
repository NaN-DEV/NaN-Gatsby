import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

export const Section = styled.section`
  width: 100%;
  display: block;
  padding: 3rem 0;
  position: relative;
  color: ${props => props.theme.secondary};
  padding: ${props => props.theme.break} 0;
  background-color: ${props => props.theme.primary};
`;

export const BoxContent = styled.section`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: calc(100% - 25rem);
    max-width: calc(100% - 25rem);
  }
`;

export const BoxSell = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  display: block;
  position: fixed;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    left: auto;
    bottom: auto;
    width: 25rem;
    display: block;
    padding: 0 1.5rem;
    position: relative;
  }
`;

export const Avatar = styled.div`
  display: none;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 100%;
    height: 20rem;
    display: block;
    overflow: hidden;
    margin-bottom: 3rem;
    padding-top: 1.5rem;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const BoxAvatar = styled.div`
  width: 100%;
  display: block;

  button {
    margin: 1.5rem auto;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 22rem;
    min-height: 30rem;
    position: relative;
  }
`;

export const BoxNumeration = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  margin: 3rem 0;
  position: relative;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 25rem;
    margin: 3rem 0;
    max-width: 25rem;
  }
`;

export const BoxPoint = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    min-height: 23rem;
  }
`;

export const Point = styled.h1`
  display: none;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    opacity: 0.2;
    display: block;
    line-height: 1;
    font-size: 30rem;
    position: absolute;
  }
`;

export const Title = styled.p`
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.3rem;
`;

export const Content = styled.div`
  flex: 100%;
  display: block;
  margin: 3rem 0;
  max-width: 100%;
  min-height: 23rem;
  text-align: center;
  position: relative;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
    flex: calc(100% - 25rem);
    max-width: calc(100% - 25rem);
  }
`;

export const Description = styled.p`
  display: block;
  line-height: 1.6;
  font-size: 1.8rem;
  text-align: center;

  p {
    padding-bottom: 1.5rem;
  }
  strong {
    letter-spacing: 0.3rem;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 1px;
  display: block;
  margin: 3rem 25%;
  background-color: #fff;
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  opacity: 0.6;
  display: block;
  margin-top: 3rem;
  filter: grayscale(100%);
`;
