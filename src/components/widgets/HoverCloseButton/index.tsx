import { ReactNode, useState } from "react";
import { FiX } from "react-icons/fi";
import { theme } from "../../../styles/theme";

import { Container } from "./styles";

interface HoverCloseButtonProps {
  children: ReactNode;
  onClick: () => void;
  size?: number;
}

const HoverCloseButton = ({
  children,
  onClick,
  size = 8,
}: HoverCloseButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container
      buttonSize={size}
      isVisible={isVisible}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button disabled={!isVisible} onClick={onClick}>
        <FiX color={theme.color.white} size={size} />
      </button>
      {children}
    </Container>
  );
};

export default HoverCloseButton;
