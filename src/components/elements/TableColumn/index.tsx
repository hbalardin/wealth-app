import { Column } from "../../../hooks/useWealthTable";
import HoverCloseButton from "../../widgets/HoverCloseButton";
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
        <HoverCloseButton onClick={() => null}>
          <input
            type="text"
            placeholder="Banco Y"
            value={text}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            onChange={(e) =>
              onChangeColumn({ ...column, text: e.target.value })
            }
          />
        </HoverCloseButton>
      ) : (
        <input type="text" readOnly disabled value={text} />
      )}
    </Container>
  );
};
