import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${(props) => props.theme.color.gray};
  gap: 56px;
  padding: 40px 120px;

  section {
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.text.default};
    line-height: 1.5;
    max-width: 52%;

    > p:first-child {
      margin-bottom: 12px;
    }

    h1 {
      font-size: ${(props) => props.theme.text.medium};
      margin-bottom: 12px;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 12px;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.color.white};
      transition: all ease 300ms;
      &:hover {
        color: ${(props) => props.theme.color.orange};
      }
    }
  }

  @media (max-width: 800px) {
    gap: 24px;
    padding: 40px 80px;
    section {
      max-width: initial;
    }
  }

  @media (max-width: 580px) {
    gap: 24px;
    padding: 32px 24px 32px 72px;
    section {
      font-size: ${(props) => props.theme.text.small};
      max-width: initial;
      h1 {
        font-size: ${(props) => props.theme.text.default};
      }
    }
  }
`;
