import { useState } from "react";
import { Container } from "./styles";

interface TableColumnProps {
  isEditable: boolean;
  text: string;
}

export const TableColumn = ({ isEditable, text }: TableColumnProps) => {
  const [value, setValue] = useState(text);
  return (
    <Container isEditable={isEditable}>
      {isEditable ? (
        <input
          type="text"
          placeholder="Banco Y"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        value
      )}
    </Container>
  );
};
