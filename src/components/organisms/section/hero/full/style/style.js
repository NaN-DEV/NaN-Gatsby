import styled, { css } from 'styled-components';

const Section = styled.section`
  width: 100%;

  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `
      : css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `}

  .row {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: 300;
    font-size: 30px;
  }

  .Cursor {
    top: -2px;
    position: relative;
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
`;
export default Section;
