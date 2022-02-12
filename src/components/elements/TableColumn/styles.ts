import styled from "styled-components";

interface ContainerProps {
  isEditable?: boolean;
}

export const Container = styled.th<ContainerProps>`
  height: 48px;
  min-width: 130px;
  padding-top: 8px;
  border-bottom: 1px solid transparent;

  &:last-child input {
    font-weight: 500;
    text-align: right;
  }
  transition: all ease 500ms;

  input {
    width: 100%;
    height: 100%;
    padding: 16px 8px;
    border: 1px solid transparent;
    background: transparent;
    cursor: cell;

    color: ${(props) => props.theme.color.orange};

    transition: all ease 500ms;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.color.orange};
      outline: none;
    }
  }
`;
