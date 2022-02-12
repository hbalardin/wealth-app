import styled from "styled-components";

interface ContainerProps {
  buttonSize: number;
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: ${(props) =>
    props.isVisible ? props.theme.color.whiteTransparent : ""};
  transition: background-color 200ms ease;

  > button {
    transition: opacity 200ms ease;
    opacity: ${(props) => Number(props.isVisible)};

    z-index: 10;
    position: absolute;
    transform: translate(50%, -50%);
    top: 0;
    right: 0;
    background: ${(props) => props.theme.color.red};
    border-radius: ${(props) => props.theme.radius.full};

    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
