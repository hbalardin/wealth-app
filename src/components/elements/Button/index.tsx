import { HTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};
