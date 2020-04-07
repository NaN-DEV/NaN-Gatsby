import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap:wrap;
  position: relative;
  text-decoration: none;
  transition: ${props => props.theme.animation_time};

  a {
    width: 100%;
    height: auto;
    padding: 1.5rem;
    max-width:100%;
   }
    

  p {
    font-size: 1.5rem;
    max-width: ${props => props.theme.max_width_half};
    padding-bottom: 15px;
    transition: ${props => props.theme.animation_time};
  }

  h1 {
    font-size: 1.5rem;
    max-width: ${props => props.theme.max_width_half};
    padding-bottom: 1.5rem;
    transition: ${props => props.theme.animation_time};
  }

  .triangle {
    left: 0;
    bottom: 3px;
    z-index: 10;
    position: absolute;
    transition: ${props => props.theme.animation_time};
  }

  .img {
    left: 60px;
    bottom: 0px;
    z-index: 0;
    position: absolute !important;
  }

  /* COLOR STYLE START */
  /* ################# */
  ${props =>
    props.size === 'FullWhite' &&
    css`
      background-color: ${props.theme.secondary};
      p,
      a,
      h1,
      button {
        color: ${props.theme.primary};
      }

      .triangle {
        border-bottom-color: ${props.theme.primary};
      }

      svg {
        path {
          fill: ${props.theme.primary};
        }
      }
      &:hover {
        p,
        a,
        h1,
        button {
          color: ${props.theme.primary_hover};
        }
        .triangle {
          border-bottom-color: ${props.theme.primary_hover} !important;
        }
        svg {
          path {
            fill: ${props.theme.primary_hover};
          }
        }
      }
    `}
${props =>
  props.size === 'HalfLight' &&
  css`
    background-color: ${props.theme.muted};
    p,
    a,
    h1,
    button {
      color: ${props.theme.secondary};
    }

    .triangle {
      border-bottom-color: ${props.theme.secondary} !important;
    }
    svg {
      path {
        fill: ${props.theme.secondary};
      }
    }
    &:hover {
      p,
      a,
      h1,
      button {
        color: ${props.theme.primary};
      }
      .triangle {
        border-bottom-color: ${props.theme.primary} !important;
      }
      svg {
        path {
          fill: ${props.theme.primary};
        }
      }
    }
  `} 
     ${props =>
       props.size === 'HalfBlack' &&
       css`
         background-color: ${props.theme.primary};
         p,
         a,
         h1,
         button {
           color: ${props.theme.secondary};
         }

         .triangle {
           border-bottom-color: ${props.theme.secondary} !important;
         }

         svg {
           path {
             fill: ${props.theme.secondary};
           }
         }
         &:hover {
           p,
           a,
           h1,
           button {
             color: ${props.theme.secondary_hover};
           }

           .triangle {
             border-bottom-color: ${props.theme.secondary_hover} !important;
           }
           svg {
             path {
               fill: ${props.theme.secondary_hover};
             }
           }
         }
       `} 


  /* COLOR STYLE STOP */
 /* ################ */



 /* RWD STYLE START */
 /* ############### */

@media (min-width: ${props => props.theme.breakpoint_desktop}) {
    a {
      padding: 3rem;
          ${props =>
            props.size === 'FullWhite'
              ? css`
                  max-width: ${props.theme.max_width};
                `
              : css`
                  max-width: ${props.theme.max_width_half};
                `}
    }

    h1 {
      font-size: 3rem;

    }

    ${props =>
      props.size === 'HalfLight' &&
      css`
        width: 50%;
      `}

    ${props =>
      props.size === 'HalfBlack' &&
      css`
        width: 50%;
      `}

     .img {
      width: 300px !important;
      height: 300px !important;
     }
  }
`;

export const Assets = styled.div`
  flex: 100%;
  min-height: calc(50vh - 15px);
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;

  .box {
    flex: 70%;
    max-width: 70%;
    min-height: 160px;
    overflow: hidden;
    position: relative;
  }
  .box-button {
    flex: 30%;
    max-width: 30%;
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: auto;
    }
  }
  ${props =>
    props.top &&
    css`
      align-items: flex-start;
      justify-content: flex-end;
      .triangle {
        top: 0;
        left: auto !important;
        right: 0;
        transform: rotate(90deg);
      }
      .img {
        top: 0;
        left: auto;
        right: 60px;
        bottom: auto;
        transform: rotate(180deg);
      }
    `}
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: calc(50vh - 30px);
    .box {
      height: 280px !important;
    }
  }
`;
export const Content = styled.div`
  flex: 100%;
  min-height: calc(50vh - 15px);
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .box {
    flex: 100%;
    max-width: 100%;

    overflow: hidden;
    height: 100%;
  }

  .box-button {
    flex: 30%;
    max-width: 30%;
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: auto;
    }
  }
  ${props =>
    props.bottom &&
    css`
      justify-content: flex-end;
      align-items: flex-end;
      .box {
        flex: 100%;
        height: auto;
        max-width: 100%;

        .box-button {
          max-width: 100%;
        }
      }
    `}
  @media (min-width: ${props => props.theme.breakpoint_desktop} ) {
    min-height: calc(50vh - 30px);
  }
`;
