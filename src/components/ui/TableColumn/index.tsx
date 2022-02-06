import { useState } from "react";
import { Container } from "./styles";

interface TableColumnProps {
  isEditable?: boolean;
  value?: string;
}

export const TableColumn = ({
  isEditable,
  value: initialValue,
}: TableColumnProps) => {
  const [value, setValue] = useState(initialValue);
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
