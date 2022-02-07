import styled from "styled-components";

interface ContainerProps {
  isEditable?: boolean;
}

export const Container = styled.th<ContainerProps>`
  height: 48px;
  padding: ${(props) => (props.isEditable ? 0 : "16px 8px")};
  font-weight: 400;
  border-bottom: 1px solid transparent;
  font-size: ${(props) => props.theme.text.default};
  color: ${(props) => props.theme.color.orange};
  text-align: left;

  &:last-child {
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
