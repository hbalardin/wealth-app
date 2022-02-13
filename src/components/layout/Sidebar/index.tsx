import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BackgroundContainer, Container, NavItem } from "./styles";

interface SidebarProps {
  items: Array<{
    icon: JSX.Element;
    text: string;
    path: string;
  }>;
}

export const Sidebar = ({ items }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <BackgroundContainer show={isOpen} />
      <nav>
        <ul>
          {items.map(({ icon, path, text }) => (
            <NavItem
              key={path}
              isSelected={location.pathname === path}
              show={isOpen}
            >
              <Link to={path}>
                {icon}
                <span>{text}</span>
              </Link>
            </NavItem>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
