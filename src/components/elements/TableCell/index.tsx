import { useCallback, useState } from "react";
import { Cell } from "../../../hooks/useWealthTable";
import { convertToCurrency } from "../../../utils/functions";
import { Container } from "./styles";

interface TableCellProps {
  cell: Cell;
  onChangeCell: (newCell: Cell) => void;
}

export const TableCell = ({ cell, onChangeCell }: TableCellProps) => {
  const { text, value, isEditable } = cell;

  const [cellValue, setCellValue] = useState(value);
  const [inputText, setInputText] = useState(text);

  const changeValue = useCallback((value: string | number) => {
    setCellValue(Number(value));
    setInputText(String(value));
  }, []);

  const onBlur = useCallback(() => {
    const newText = cellValue >= 0 ? convertToCurrency(cellValue) : "";
    setInputText(newText);

    onChangeCell({
      ...cell,
      value: cellValue,
      text: newText,
    });
  }, [cell, onChangeCell, cellValue]);

  const onChange = useCallback(
    (value: string) => {
      const regex = /[^\d.]/g;
      const onlyNumbers = String(value)?.replaceAll(regex, "");
      changeValue(onlyNumbers);
    },
    [changeValue]
  );

  const onFocus = useCallback(() => {
    if (cellValue > 0) return setInputText(String(cellValue));
    setInputText("");
  }, [cellValue]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") e.currentTarget.blur();
      if (e.key === "ArrowUp") changeValue(cellValue + 1);
      if (e.key === "ArrowDown") changeValue(cellValue - 1);
    },
    [changeValue, cellValue]
  );

  return (
    <Container isEditable={isEditable}>
      {isEditable ? (
        <input
          onKeyDown={onKeyDown}
          type="text"
          placeholder="R$ 0,00"
          value={inputText}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        text
      )}
    </Container>
  );
};
