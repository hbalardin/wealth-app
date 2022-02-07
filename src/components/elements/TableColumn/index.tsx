import { Column } from "../../../hooks/useWealthTable";
import { Container } from "./styles";

interface TableColumnProps {
  column: Column;
  onChangeColumn: (newColumn: Column) => void;
}

export const TableColumn = ({ column, onChangeColumn }: TableColumnProps) => {
  const { isEditable, text } = column;

  return (
    <Container isEditable={isEditable}>
      {isEditable ? (
        <input
          type="text"
          placeholder="Banco Y"
          value={text}
          onChange={(e) => onChangeColumn({ ...column, text: e.target.value })}
        />
      ) : (
        text
      )}
    </Container>
  );
};
