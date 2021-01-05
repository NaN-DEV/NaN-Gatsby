import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: revert;
  position: relative;
  padding-bottom: 3rem;
`;

export const Left = styled.div`
  display: none;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 25rem;
    width: 25rem;
    display: block;
    position: relative;
    justify-content: flex-start;
    margin-bottom: ${props => props.theme.break};
    .listCategory {
      padding-top: 3rem;

      .linkCategory {
        font-size: 1.8rem;
        font-weight: normal;
        text-transform: uppercase;
      }
      .bold {
        font-weight: bold;
      }
    }
  }
`;

export const Right = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: calc(100% - 25rem);
    width: calc(100% - 25rem);
    justify-content: flex-start;
  }
`;

export const Category = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  display: none;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 100%;
    display: block;
    font-size: 3rem;
    text-align: left;
    text-transform: uppercase;
  }
`;

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 33.3333%;
    max-width: 33.333%;
    padding-left: ${props => props.theme.break};
  }
`;
