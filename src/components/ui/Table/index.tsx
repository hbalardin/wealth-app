import { useCallback } from "react";
import { capitalize } from "../../../utils";
import { Container } from "./styles";

import { TableColumn } from "../../ui/TableColumn";
import { TableCell } from "../../ui/TableCell";

interface Column {
  key: string;
  label: string;
}

interface Row {
  id: string;
  [columnKey: string]: string | number;
}

interface TableProps {
  columns: Column[];
  rows: Row[];
}

const Table = ({ columns, rows }: TableProps) => {
  const getMonth = useCallback((month: number) => {
    const parsedMonth = new Date(1, month).toLocaleString("pt-BR", {
      month: "long",
    });
    return capitalize(parsedMonth);
  }, []);
  const getTotal = useCallback(() => {
    return "R$ 1000,00";
  }, []);

  return (
    <Container>
      <thead>
        <TableColumn value="Mês" />
        {columns.map((column) => (
          <TableColumn key={column.key} isEditable value={column.label} />
        ))}
        <TableColumn value="Total" />
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            <TableCell value={getMonth(index)} />
            {columns.map((column) => (
              <TableCell
                isEditable
                value={row[column.key]}
                key={column.key}
              ></TableCell>
            ))}
            <TableCell value={getTotal()} />
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
