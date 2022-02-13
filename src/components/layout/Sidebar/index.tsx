import { useState } from "react";
import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { BackgroundContainer, Container, NavItem } from "./styles";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      icon: <FaChartLine size={24} />,
      text: "Progresso",
      path: "/progresso",
    },
    {
      icon: <FaDollarSign size={24} />,
      text: "Patrimonio",
      path: "/patrimonio",
    },
  ];

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <BackgroundContainer show={isOpen} />
      <nav>
        <ul>
          {items.map(({ icon, path, text }, i) => (
            <NavItem key={path} isSelected={i === 0} show={isOpen}>
              <div>
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
