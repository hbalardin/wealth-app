import styled from "styled-components";

export const Container = styled.button`
  padding: 8px 20px;
  border-radius: ${(props) => props.theme.radius.default};

  border: 2px solid ${(props) => props.theme.color.orange};
  background: ${(props) => props.theme.gradient.orangeYellow};

  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.text.medium};
  font-weight: 600;

  transition: all ease 400ms;

  &:hover {
    background: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.orange};
  }
`;
