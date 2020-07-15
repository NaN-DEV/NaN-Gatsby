import styled, { css } from 'styled-components';

const Row = styled.div`
  width:100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: ${props => props.theme.break};
  max-width: ${props => props.theme.max_width};

  ${props =>
    props.half &&
    props.desctop &&
    props.right &&
    css`
      @media (min-width: ${props.theme.breakpoint_desktop}) {
        margin-right: ${props.theme.break};
        max-width: ${props.theme.max_width_half};
      }
    `}

    ${props =>
      props.half &&
      props.desctop &&
      props.left &&
      css`
        @media (min-width: ${props.theme.breakpoint_desktop}) {
          width: auto;
          margin-left: ${props.theme.break};
          max-width: ${props.theme.max_width_half};
        }
      `}

      ${props =>
        props.half &&
        props.tablet &&
        props.right &&
        css`
          @media (min-width: ${props.theme.breakpoint_tablet}) {
            width: auto;
            margin-right: ${props.theme.break};
            max-width: ${props.theme.max_width_half};
          }
        `}

        ${props =>
          props.half &&
          props.tablet &&
          props.left &&
          css`
            @media (min-width: ${props.theme.breakpoint_tablet}) {
              width: auto;
              margin-left: ${props.theme.break};
              max-width: ${props.theme.max_width_half};
            }
          `}

          ${props =>
            props.half &&
            props.mobile &&
            props.right &&
            css`
              @media (min-width: ${props.theme.breakpoint_mobile}) {
                width: auto;
                margin-right: ${props.theme.break};
                max-width: ${props.theme.max_width_half};
              }
            `}

            ${props =>
              props.half &&
              props.mobile &&
              props.left &&
              css`
                @media (min-width: ${props.theme.breakpoint_mobile}) {
                  width: auto;
                  margin-left: ${props.theme.break};
                  max-width: ${props.theme.max_width_half};
                }
              `}
        


`;

export default Row;
