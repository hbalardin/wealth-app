import { Container } from "./styles";

import { TableColumn } from "../../ui/TableColumn";
import { TableCell } from "../../ui/TableCell";
import { TableProps, useTable } from "../../../hooks/useTable";

const Table = (data: TableProps) => {
  const { columns, rows } = useTable(data);

  return (
    <Container>
      <thead>
        {columns.map((column) => (
          <TableColumn
            key={column.key}
            isEditable={column.isEditable}
            text={column.text}
          />
        ))}
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {row.cells.map((cell) => (
              <TableCell
                isEditable={cell.isEditable}
                key={cell.key}
                text={cell.text}
                value={cell.value}
              ></TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
