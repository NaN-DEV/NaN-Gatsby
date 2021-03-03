import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: revert;
  position: relative;
  padding: ${props => props.theme.settings.breakBig} 0;
`;

export const Left = styled.div`
  display: none;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 30rem;
    width: 30rem;
    display: block;
    overflow: revert;
    position: relative;
  }
`;

export const Right = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    justify-content: flex-start;
    flex: calc(100% - 30rem);
    width: calc(100% - 30rem);
  }
`;

export const Category = styled.div`
  position: relative;
  a {
    font-size: 2rem;
  }
  .desactive {
    cursor: no-drop;
    color: ${props => props.theme.settings.colorBackgroundDisactive};
  }
`;

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding-bottom: ${props => props.theme.settings.breakLight};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;

    &:nth-child(1n + 1) {
      padding-left: 0;
      padding-right: ${props => props.theme.settings.breakLight};
    }
    &:nth-child(2n + 2) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: 33.3333%;
    max-width: 33.333%;

    &:nth-child(1n + 1) {
      padding-left: 0;
      padding-right: ${props => props.theme.settings.breakLight};
    }
    &:nth-child(2n + 2) {
      padding-left: 0;
      padding-right: ${props => props.theme.settings.breakLight};
    }
    &:nth-child(3n + 3) {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
