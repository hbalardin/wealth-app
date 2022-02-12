import { useCallback, useMemo } from "react";
import { Container } from "./styles";

import { TableColumn } from "../../elements/TableColumn";
import { TableCell } from "../../elements/TableCell";
import { Cell, Column, TableData } from "../../../hooks/useWealthTable";

const Table = ({ columns, rows, updateData, deleteColumn }: TableData) => {
  const onChangeColumn = useCallback(
    (newColumn: Column) => {
      const updatedColumns = columns.map((column) => {
        if (column.key === newColumn.key) return newColumn;
        return column;
      });
      updateData({ rows, columns: updatedColumns });
    },
    [columns, rows, updateData]
  );

  const onChangeCell = useCallback(
    (newCell: Cell) => {
      const updatedRows = rows.map((row) => {
        if (row.id !== newCell.rowId) return row;
        return {
          ...row,
          cells: row.cells.map((cell) => {
            if (cell.columnKey !== newCell.columnKey) return cell;
            return newCell;
          }),
        };
      });
      updateData({ columns, rows: updatedRows });
    },
    [columns, rows, updateData]
  );

  const theadContent = useMemo(() => {
    return columns.map((column) => (
      <TableColumn
        key={column.key}
        column={column}
        onChangeColumn={onChangeColumn}
        onClickCloseButton={deleteColumn}
      />
    ));
  }, [columns, onChangeColumn, deleteColumn]);

  const tbodyContent = useMemo(() => {
    return rows.map((row) => (
      <tr key={row.id}>
        {columns.map((column) => {
          const i = row.cells.findIndex(
            (cell) => column.key === cell.columnKey
          );
          return (
            <TableCell
              key={column.key}
              cell={row.cells[i]}
              onChangeCell={onChangeCell}
            ></TableCell>
          );
        })}
      </tr>
    ));
  }, [columns, onChangeCell, rows]);

  return (
    <Container>
      <table>
        <thead>
          <tr>{theadContent}</tr>
        </thead>
        <tbody>{tbodyContent}</tbody>
      </table>
    </Container>
  );
};

export default Table;
