import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props =>
    props.color === 'secondary'
      ? props.theme.secondary
      : `${
          props.color === 'primary'
            ? props.theme.primary
            : `${props.color === 'dark' ? props.theme.dark : props.theme.muted}`
        }`};
  color: ${props => (props.color === 'secondary' ? props.theme.primary : props.theme.secondary)};
`;
export const Content = styled.div`
  flex: 100%;
  max-width: 100%;
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .Typist {
    display: flex;
    justify-content: center;
    flex: 100%;
    max-width: 100%;
    padding: 30px 0;
    span {
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
      letter-spacing: ${props => props.theme.letter_spacing};
    }
    .Cursor {
      display: none;
    }
  }
  .button {
    flex: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    .Typist {
      padding: 30px 0;
      span {
        font-weight: 300;
        font-size: 6rem;
        text-align: center;
      }
      .Cursor {
        display: inline-block;
        animation: CursorAnimation 1.2s infinite;
      }

      @keyframes CursorAnimation {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      @media (min-width: ${props => props.theme.breakpoint_desktop}) {
        span {
          font-size: 60px;
        }
      }
    }
  }
`;
export const Box = styled.div``;

export const Assets = styled.div`
  flex: 100%;
  max-width: 100%;
  min-height: 50%;
  position: relative;
  .mascot {
    z-index: 0;
    left: 30px;
    bottom: 6px;
    width: 90px;
    position: absolute;
  }
  .triangle {
    z-index: 0;
    bottom: 0px;
    position: absolute;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    .Typist {
      padding: 30px 0;
      span {
        font-weight: 300;
        font-size: 6rem;
        text-align: center;
      }
    }
    .mascot {
      left: 60px;
      bottom: 6px;
      width: 180px;
      position: absolute;
      z-index: 0;
    }
    .triangle {
      bottom: 5px;
    }
  }
`;
