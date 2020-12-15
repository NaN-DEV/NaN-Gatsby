import styled from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  padding: 1.5rem 0;
  position: relative;

  @media (min-width: ${props => `${props.settings.breakpoint_tablet}px`}) {
    flex: 30%;
    width: 30%;
    padding: 1.5rem;
  }
`;

export const CheckBox = styled.input`
  display: none;

  &:checked ~ label {
    color: ${props => props.settings.primary};
    background-color: ${props => props.settings.secondary};
    box-shadow: 3px 3px 0px ${props => props.settings.tertiary_5};

    svg {
      fill: ${props => props.settings.primary};
    }

    &::after {
      transform: scale(1);
      background-color: ${props => props.settings.primary};
    }

    &::before {
      border: 1px solid ${props => props.settings.primary};
    }
  }
`;

export const Label = styled.label`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 3px;
  padding: 3rem 0.5rem;
  justify-content: center;
  color: ${props => props.settings.tertiary_3};
  transition: ${props => props.settings.animation};
  background-color: ${props => props.settings.primary};
  border: 1px solid ${props => props.settings.secondary};
  box-shadow: 3px 3px 0px ${props => props.settings.tertiary_6};

  svg {
    width: 12rem;
    height: 12rem;
    fill: ${props => props.settings.secondary};
    transition: ${props => props.settings.animation};
  }

  &::before {
    content: '';
    top: 0.6rem;
    width: 3rem;
    height: 3rem;
    right: 0.6rem;
    display: block;
    position: absolute;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid ${props => props.settings.secondary};
  }

  &::after {
    content: '';
    width: 2rem;
    top: 1.1rem;
    height: 2rem;
    right: 1.1rem;
    display: block;
    border-radius: 3px;
    position: absolute;
    transform: scale(0);
    transition: ${props => props.settings.animation};
  }
`;

export const Title = styled.p`
  flex: 100%;
  width: 100%;
  height: 2.4rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  padding-top: 1.5rem;
`;
