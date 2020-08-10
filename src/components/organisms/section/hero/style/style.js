import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  padding: 6rem 0;
  position: relative;
  ${props =>
    props.color === 'primary'
      ? css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `
      : css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `}
  .row {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  padding-bottom: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-family: ${props => props.theme.font_primary};
`;