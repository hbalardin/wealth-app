import { ReactNode } from "react";

import { Container } from "./styles";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
}

export default PageLayout;
