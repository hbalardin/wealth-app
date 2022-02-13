import { ReactNode } from "react";
import Sidebar from "../Sidebar";

import { Container } from "./styles";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container>
      <Sidebar />
      <main>{children}</main>
    </Container>
  );
};

export default PageLayout;
