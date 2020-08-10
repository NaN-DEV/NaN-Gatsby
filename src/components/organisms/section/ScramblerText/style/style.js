import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  font-weight: bold;
  font-size: 2.4rem;
  position: relative;
  text-align: center;
  color: #fff !important;
  background-color: #000;
  justify-content: center;
  height: calc(100vh - 6rem);
  font-family: ${props => props.theme.font_secondary};

  .row {
    min-height: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    font-size: 4.2rem;
  }
`;

export const DivChildren = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 0;
  justify-content: center;
`;

export const DivArray = styled.div`
  bottom: 0rem;
  position: absolute;
  animation-duration: 1.2s;
  animation-name: ArrayAnimation;
  animation-iteration-count: infinite;

  @keyframes ArrayAnimation {
    0% {
      bottom: 1rem;
    }
    50% {
      bottom: 0rem;
    }
    100% {
      bottom: 1rem;
    }
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;
