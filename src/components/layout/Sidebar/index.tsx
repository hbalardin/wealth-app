import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
              onClick={() => navigate(path)}
              show={isOpen}
            >
              <div onClick={() => navigate(path)}>
                {icon}
                <span>{text}</span>
              </div>
            </NavItem>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
