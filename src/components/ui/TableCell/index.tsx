import { useCallback, useState } from "react";
import { convertToCurrency } from "../../../utils/functions";
import { Container } from "./styles";

interface TableCellProps {
  isEditable: boolean;
  text: string;
  value: number;
}

export const TableCell = ({ isEditable, text, value }: TableCellProps) => {
  const [cellValue, setCellValue] = useState(value);
  const [inputValue, setInputValue] = useState(text);

  const changeValue = useCallback((value: string | number) => {
    setCellValue(Number(value));
    setInputValue(String(value));
  }, []);

  const onBlur = useCallback(() => {
    if (cellValue <= 0) return setInputValue("");
    setInputValue(convertToCurrency(cellValue));
  }, [cellValue]);

  const onChange = useCallback(
    (value: string) => {
      const regex = /[^\d.]/g;
      const onlyNumbers = String(value)?.replaceAll(regex, "");
      changeValue(onlyNumbers);
    },
    [changeValue]
  );

  const onFocus = useCallback(() => {
    if (cellValue > 0) return setInputValue(String(cellValue));
    setInputValue("");
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
          value={inputValue}
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
