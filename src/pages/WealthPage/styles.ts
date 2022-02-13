import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-size: ${(props) => props.theme.text.large};
  }
`;
