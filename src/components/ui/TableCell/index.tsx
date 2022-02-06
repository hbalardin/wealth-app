import { useCallback, useEffect, useState } from "react";
import { convertToCurrency } from "../../../utils";
import { Container } from "./styles";

interface TableCellProps {
  isEditable?: boolean;
  value?: number | string;
}

export const TableCell = ({
  isEditable,
  value: initialValue = "",
}: TableCellProps) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (!isEditable) return;
    setValue(convertToCurrency(Number(value)));
  }, []);

  const onBlur = useCallback(() => {
    if (Number(value)) return setValue(convertToCurrency(Number(value)));
    setValue("");
  }, [value]);

  const onChange = useCallback((value: number | string) => {
    const regex = /[^\d.]/g;
    const onlyNumbers = String(value)?.replaceAll(regex, "");

    setValue(onlyNumbers);
  }, []);

  const convertValue = useCallback(() => {
    const [int = "0", cents = "0"] = String(value).split(",", 2);
    const regex = /[^\d]/g;
    const onlyNumbers = int.replaceAll(regex, "");

    const parsedValue = Number(`${onlyNumbers}.${cents}`);

    setValue(parsedValue);
  }, [value]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") e.currentTarget.blur();
      if (e.key === "ArrowUp") setValue(Number(value) + 1);
      if (e.key === "ArrowDown") setValue(Number(value) - 1);
    },
    [value]
  );

  return (
    <Container isEditable={isEditable}>
      {isEditable ? (
        <input
          onKeyDown={onKeyDown}
          type="text"
          placeholder="R$ 0,00"
          value={value}
          onBlur={onBlur}
          onFocus={convertValue}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        value
      )}
    </Container>
  );
};
