import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const mainStyleIcon = css`
  display: block;
  position: relative;

  svg {
    display: block;

    ${props =>
      props.height
        ? css`
            height: ${props.height}rem;
          `
        : css`
            height: 2.4rem;
          `}

          ${props =>
            props.icon === 'triangle' &&
            css`
              width: 35vw;
              height: auto;
              max-width: 60rem;
            `}

      ${props =>
        props.turn &&
        css`
          transform: rotate(180deg);
        `}

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
          fill: ${props.theme.primary};
          stroke: ${props.theme.primary};
        `}
    }
  }
`;

export const DivIcon = styled.div`
  ${mainStyleIcon}
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
        background-color: ${props.theme.secondary};
      `}
  }
`;
