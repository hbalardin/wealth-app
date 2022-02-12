import styled from "styled-components";

interface ContainerProps {
  isEditable?: boolean;
}

export const Container = styled.td<ContainerProps>`
  height: 48px;
  min-width: 130px;
  padding: ${(props) => (props.isEditable ? 0 : "16px 8px")};
  font-weight: 400;
  background-color: ${(props) => props.theme.color.gray};
  border-bottom: 1px solid ${(props) => props.theme.color.darkGray};
  font-size: ${(props) => props.theme.text.default};
  text-align: left;

  &:first-child {
    color: ${(props) => props.theme.color.yellow};
  }
  &:last-child {
    text-align: right;
    font-weight: 500;
    color: ${(props) => props.theme.color.green};
  }
  transition: all ease 500ms;

  input {
    width: 100%;
    height: 100%;
    padding: 16px 8px;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.color.gray};
    cursor: cell;
    color: ${(props) => props.theme.color.white};

    transition: all ease 500ms;

    &:hover {
      filter: brightness(1.2);
    }
    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.color.orange};
      outline: none;
      filter: brightness(1.2);
    }
  }
`;
