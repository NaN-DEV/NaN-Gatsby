import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: block;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Modal = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: block;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.primary};
`;

export const Header = styled.header`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  max-height: 30px;

  .button-clouse {
    margin-left: auto;
  }

  .switch-language-radio-box {
    justify-content: flex-end;
    padding: 0 ${props => props.theme.break_mobile};
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    max-height: 60px;
    .switch-language-radio-box {
      padding: 0 ${props => props.theme.break_desctop};
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  min-height: 600px;
  padding: ${props => props.theme.break_mobile} 0;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: calc(100vh - 180px);
    padding: ${props => props.theme.break_desctop} 0;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 200vw;
  display: flex;
  flex: 0 0 200vw;
  min-height: 600px;
  transition: ${props => props.theme.animation_time_slow};
  transform: ${props => (props.active ? `translateX(-50%)` : `translateX(-0%)`)};

  @media (min-width: ${props => props.theme.max_width}) {
    flex: ${props => props.theme.max_width_4k};
    width: ${props => props.theme.max_width_4k};
  }
`;

export const Avatar = styled.div`
  width: 100%;
  height: 200px;
  flex: 0 0 100%;
  overflow: hidden;
  margin-top: 6px;
  background: ${props => props.theme.secondary};
  svg {
    top: 10px;
    margin: 0 auto;
    display: block;
    max-width: 250px;
    position: relative;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    margin-top: 0;
    svg {
      top: 30px;
      position: relative;
    }
  }
`;

export const ListButton = styled.ul`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: center;
  li {
    position: relative;
    white-space: nowrap;
    padding-right: ${props => props.theme.break_desctop};
  }
  li:last-of-type {
    padding-right: 0;
    &::after {
      display: none;
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    li {
      justify-content: left;
      &::after {
        top: 9px;
        content: '/';
        z-index: 999;
        right: 1.2rem;
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;
        color: ${props => props.theme.secondary};
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 60px;
  position: relative;
  align-items: center;

  button {
    font-size: 3rem;
  }
`;

export const Left = styled.div`
  order: 1;
  flex: 0 0 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  ${props =>
    props.start &&
    css`
      align-items: center;
      justify-content: flex-start;
    `}
          ${props =>
            props.center &&
            css`
              align-items: center;
              justify-content: center;
            `}
      ${props =>
        props.end &&
        css`
          align-items: center;
          justify-content: flex-end;
        `}
   
             ${props =>
               props.start &&
               css`
                 ul {
                   align-items: center;
                   justify-content: flex-start;
                 }
               `}
          ${props =>
            props.center &&
            css`
              ul {
                align-items: center;
                justify-content: center;
              }
            `}
      ${props =>
        props.end &&
        css`
          ul {
            align-items: center;
            justify-content: flex-end;
          }
        `}

        

  .back {
    display: none;
  }
 @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    order: 0;
    padding-right: ${props => props.theme.break_desctop};
    flex: ${props => (props.half ? `50%` : `230px`)};
    max-width: ${props => (props.half ? `50%` : `230px`)};
      .back {
         top: 0;
         height: 60px;
         display: block;
         cursor: pointer;
         position: absolute;
         transform: rotate(90deg);
         fill: ${props => props.theme.secondary};
         transition: ${props => props.theme.animation_time};

           &:hover {
             fill: ${props => props.theme.secondary_hover};
           }
       }
    }
`;

export const Right = styled.div`
  order: 0;
  flex: 100%;
  max-width: 100%;
  overflow: hidden;  
  position: relative;
  padding-bottom: ${props => props.theme.break_desctop};

  ${props =>
    props.half &&
    css`
      border-left: solid 0;
      border-color: ${props.theme.secondary} !important;
      border-bottom: solid ${props.theme.border} transparent;
    `}
 

  ${props =>
    props.start &&
    css`
      align-items: center;
      justify-content: flex-start;
    `}

  ${props =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${props =>
    props.end &&
    css`
      align-items: center;
      justify-content: flex-end;
    `}
      
   ${props =>
     props.start &&
     css`
       ul {
         align-items: center;
         justify-content: flex-start;
       }
     `}

    ${props =>
      props.center &&
      css`
        ul {
          align-items: center;
          justify-content: center;
        }
      `}

    ${props =>
      props.end &&
      css`
        ul {
          align-items: center;
          justify-content: flex-end;
        }
      `}

  .back {
    top: 0;
    height: 30px;
    display: block;
    position: absolute;
    transform: rotate(90deg);
    fill: ${props => props.theme.secondary};
  }


  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    order: 1;
    padding-bottom: 0;
    ${props =>
      props.half &&
      css`
        padding-left: ${props.theme.break_desctop};
      `}

    flex: ${props => (props.half ? `50%` : `calc(100% - 230px)`)};
    max-width: ${props => (props.half ? `50%` : ` calc(100% - 230px)`)};

      ${props =>
        props.half &&
        css`
          border-bottom: solid 0;
          border-left: solid ${props.theme.border} transparent;
        `}


    .back {
      display: none;
    }
  }
`;

export const ContentMain = styled.div`
  flex: calc(50% - 30px);
  max-width: calc(50% - 30px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-right: 15px;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    margin-right: 0;
  }
`;

export const ContentAdditional = styled.div`
  flex: calc(50% - 30px);
  max-width: calc(50% - 30px);
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;

  form {
    top: 50px;
  }

  .mascot {
    top: auto;
    bottom: -8rem;
    height: 175px;
    position: absolute;
    left: calc(50% - 76px);
    transform: rotate(0deg);
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    margin-left: 0;
    .mascot {
      top: auto;
      left: -60px;
      bottom: 10px;
      height: 175px;
      margin-left: 0;
      position: absolute;
      transform: rotate(0deg);
    }
  }
`;
