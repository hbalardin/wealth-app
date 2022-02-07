import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-spacing: 0;

  tr:first-child td:first-child {
    border-top-left-radius: ${(props) => props.theme.radius.large};
  }
  tr:first-child td:last-child {
    border-top-right-radius: ${(props) => props.theme.radius.large};
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: ${(props) => props.theme.radius.large};
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: ${(props) => props.theme.radius.large};
  }
`;
