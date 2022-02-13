import { ReactNode } from "react";
import { Container } from "./styles";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
