import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  h2 {
    font-size: ${(props) => props.theme.text.medium};
    margin-bottom: 8px;
  }
  p {
    font-size: ${(props) => props.theme.text.small};
  }
`;
