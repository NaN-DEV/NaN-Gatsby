import styled from 'styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  overflow: revert;
  position: relative;
`;

export const Left = styled.div`
  width: 25rem;
  display: block;
  position: relative;
  padding: 0 0 0 1.5rem;
`;

export const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 25rem);
`;

export const BoxCategory = styled.div``;

export const Title = styled.h1`
  width: 100%;
  display: block;
  font-size: 3rem;
  text-align: left;
`;

export const ListCategory = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding-top: 1.5rem;
  position: relative;
`;

export const GoToLink = styled(Link)`
  font-size: 2.4rem;
  color: ${props => props.theme.primary};
`;

export const GoToLinkOff = styled.p`
  cursor: no-drop;
  font-size: 2.4rem;
  color: ${props => props.theme.tertiary_1};
`;

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding-top: ${props => props.theme.break};
  padding-left: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 33.3333%;
    max-width: 33.333%;
  }
`;
