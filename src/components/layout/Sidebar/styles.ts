import styled, { css } from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 50;
  background: ${(props) => props.theme.color.lightGray};

  nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  position: fixed;
  left: 0;
  top: 0;
`;

interface BackgroundContainerProps {
  show: boolean;
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  width: 224px;
  height: 100vh;
  background: ${(props) => props.theme.color.black};

  transition: all 600ms ease;
  position: fixed;
  top: 0;

  left: -100%;
  @media (min-width: 420px) {
    left: ${(props) => (props.show ? 0 : "-100%")};
  }
`;

interface NavItemProps {
  isSelected: boolean;
  show: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  width: 100%;
  display: flex;

  transition: all 300ms ease;

  > a {
    cursor: pointer;
    padding: 12px 16px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    transition: all 300ms ease;
    position: relative;

    > span {
      position: absolute;
      transform: translateX(16px);
      left: 100%;

      color: ${(props) => props.theme.color.white};
      text-transform: uppercase;
      font-weight: 300;
      transition: all 400ms ease 50ms;

      opacity: 0;
      @media (min-width: 420px) {
        opacity: ${(props) => Number(props.show)};
      }
    }
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          > a {
            color: ${({ theme }) => theme.color.orange};
            > span {
              font-weight: 500;
            }
          }
        `
      : null}

  filter: brightness(0.8);
  &:hover {
    filter: brightness(1);
  }
`;
