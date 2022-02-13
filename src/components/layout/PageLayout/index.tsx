import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";

import { Container } from "./styles";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container>
      <Sidebar />
      <main>{children}</main>
    </Container>
  );
};
