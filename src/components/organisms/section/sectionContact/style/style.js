import styled from 'styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 0;
  position: relative;
  align-items: center;
  display: flex;
  min-height: calc(100vh - 33rem);
  color: ${props => props.settings.secondary};
  background-color: ${props => props.settings.primary};
  .row {
    align-items: center;
  }
`;

export const FormBox = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  button {
    width: 100%;
    display: block;
  }
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    flex: 50%;
    max-width: 50%;
    padding-right: 6rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    font-size: 6rem;
  }
`;

export const Form = styled.form``;

export const DataBox = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    flex: 50%;
    max-width: 50%;
  }
`;

export const ListBox = styled.div`
  width: auto;
  margin: 0 auto;
  display: block;
`;

export const LisData = styled.ul`
  list-style: none;
  padding-bottom: 3rem;
`;

export const Point = styled.li`
  font-size: 2.4rem;
  padding: 0.3rem 0;
  position: relative;
  text-overflow: nowrap;
`;

export const Important = styled.strong`
  font-weight: bold;
`;

export const Tel = styled(Link)`
  padding-left: 1rem;
  color: ${props => props.settings.secondary};
`;

export const Mail = styled(Link)`
  padding-left: 1rem;
  color: ${props => props.settings.secondary};
`;

export const BoxError = styled.div``;

export const MascotBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 6rem 0;
  display: block;
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-top: ${props => props.settings.border} solid ${props => props.settings.secondary};

  .mascot {
    top: -10rem;
    bottom: auto;
    width: 20rem;
    position: absolute;
    left: calc(50% - 10rem);
    transform: rotate(180deg);
  }
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    margin: 0 0;
    height: 100%;
    width: 11rem;
    border-top: none;
    min-height: 75rem;
    border-left: ${props => props.settings.border} solid ${props => props.settings.secondary};

    .mascot {
      top: auto;
      bottom: 0;
      left: -9rem;
      width: 20rem;
      position: absolute;
      transform: rotate(0deg);
    }
  }
`;
