import { Column } from "../../../hooks/useWealthTable";
import { HoverCloseButton } from "../../widgets/HoverCloseButton";
import { Container } from "./styles";

interface TableColumnProps {
  column: Column;
  onChangeColumn: (newColumn: Column) => void;
  onClickCloseButton: (columnKey: string) => void;
}

export const TableColumn = ({
  column,
  onChangeColumn,
  onClickCloseButton,
}: TableColumnProps) => {
  const { isEditable, text } = column;

  return (
    <Container isEditable={isEditable}>
      {isEditable ? (
        <HoverCloseButton onClick={() => onClickCloseButton(column.key)}>
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
