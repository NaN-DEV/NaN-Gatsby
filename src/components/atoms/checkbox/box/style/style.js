import styled from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  position: relative;
`;

export const CheckBox = styled.input`
  display: none;

  &:checked ~ label {
    color: ${props => props.theme.settings.colorText};
    background-color: ${props => props.theme.settings.colorBackgroundDisactive};

    &::after {
      transform: scale(1);
      background-color: ${props => props.theme.settings.colorText};
    }

    &::before {
      border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorText};
    }
  }
`;

export const Label = styled.label`
  flex: 100%;
  width: 100%;
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 30rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: ${props => props.theme.settings.animation};
  color: ${props => props.theme.settings.colorTextActive};
  background-color: ${props => props.theme.settings.colorBackgroundLight};
  padding: ${props => props.theme.settings.breakFat} ${props => props.theme.settings.breakBig};

  &::before {
    content: '';
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    display: block;
    position: absolute;
    background-color: transparent;
    border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorTextActive};
  }

  &::after {
    content: '';
    top: 2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    display: block;
    position: absolute;
    transform: scale(0);
    transition: ${props => props.theme.settings.animation};
    border-radius: ${props => props.theme.settings.borderRadius};
  }

  &:hover {
    color: ${props => props.theme.settings.colorText};
    background-color: ${props => props.theme.settings.colorBackgroundDisactive};

    &::before {
      border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorText};
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  flex: 0 1 auto;
  height: 2.4rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  padding-top: 1.5rem;
`;
