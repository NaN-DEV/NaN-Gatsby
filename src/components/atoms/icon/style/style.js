import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const mainStyleIcon = css`
  display: block;
  position: relative;
  ${props =>
    props.secondary &&
    css`
      color: ${props.theme.secondary};
    `}

  svg {
    display: block;
    height: ${props => (props.height ? `${props.height}rem` : `2.4rem`)};
    ${props =>
      props.secondary &&
      css`
        fill: ${props.theme.secondary};
      `}
  }
`;

const mainStyleIconHover = css`
  &:hover {
    svg {
      ${props =>
        props.secondary &&
        css`
          fill: ${props.theme.tertiary_3};
          stroke: ${props.theme.tertiary_3};
        `}
    }
  }
`;

export const DivIcon = styled.div`
  ${mainStyleIcon}
  ${mainStyleIconHover}
`;

export const LinkIcon = styled(Link)`
  ${mainStyleIcon}
`;

export const ButtonIcon = styled.button`
  ${mainStyleIcon}
  ${mainStyleIconHover}
  display: flex;
  min-width: 4.2rem;
  min-height: 4.2rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    ${props =>
      props.secondary &&
      css`
        background-color: ${props.theme.tertiary_1};
      `}
  }
`;
