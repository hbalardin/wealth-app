import { useCallback, useEffect } from "react";
import { MONTHS } from "../utils/constants";
import { convertToCurrency } from "../utils/functions";
import { useLocalStorage } from "./useLocalStorage";

const INITIAL_DATA = {
  columns: [
    { key: "MonthsKey", text: "Mês", isEditable: false },
    { key: "99", text: "Banco", isEditable: true },
    { key: "TotalKey", text: "Total", isEditable: false },
  ],
  rows: Array.from(Array(12).keys()).map((id) => ({
    id,
    cells: [
      {
        columnKey: "MonthsKey",
        isEditable: false,
        rowId: id,
        text: MONTHS[id].short,
        value: 0,
      },
      { rowId: id, columnKey: "99", text: "", value: 0, isEditable: true },
      {
        columnKey: "TotalKey",
        isEditable: false,
        rowId: id,
        text: convertToCurrency(0),
        value: 0,
      },
    ],
  })),
};

export type Column = {
  isEditable: boolean;
  key: string;
  text: string;
};

export type Cell = {
  columnKey: string;
  isEditable: boolean;
  rowId: number;
  text: string;
  value: number;
};

export type Row = {
  cells: Cell[];
  id: number;
};

export interface TableData {
  columns: Column[];
  rows: Row[];
  createColumn: () => void;
  deleteColumn: (columnKey: string) => void;
  updateData: (data: typeof INITIAL_DATA) => void;
}

export const useWealthTable = (): TableData => {
  const [data, setData] = useLocalStorage(
    "@HB:PrimoAPP-WealthTable",
    INITIAL_DATA
  );

  useEffect(() => {
    if (!data) return;
    const oldMonthColumnIndex = data.columns.findIndex(
      ({ key }) => key === "MonthKey"
    );
    if (oldMonthColumnIndex < 0) return;

    const updatedColumns = [...data.columns];
    updatedColumns[oldMonthColumnIndex] = INITIAL_DATA.columns[0];

    const updatedRows = data.rows.map((row, index) => {
      const updatedCells = [...row.cells];
      updatedCells[0] = INITIAL_DATA.rows[index].cells[0];
      return { ...row, cells: updatedCells };
    });

    setData({ columns: updatedColumns, rows: updatedRows });
  }, []);

  const createCell = useCallback((rowId: number, columnKey: string): Cell => {
    return {
      columnKey,
      isEditable: true,
      rowId,
      text: "",
      value: 0,
    };
  }, []);

  const deleteColumn = useCallback(
    (columnKey: string): void => {
      const updatedColumns = data.columns.filter(
        ({ key }) => columnKey !== key
      );
      const updatedRows = data.rows.map((row) => ({
        ...row,
        cells: row.cells.filter((cell) => columnKey !== cell.columnKey),
      }));

      setData({ columns: updatedColumns, rows: updatedRows });
    },
    [data, setData]
  );

  const getColumnRows = useCallback(
    (columnKey: string) => {
      const updatedRows: Row[] = [...data.rows].map((row) => {
        const newCell = createCell(row.id, columnKey);
        const updatedCells = [...row.cells];
        updatedCells.splice(-1, 0, newCell);
        return {
          ...row,
          cells: updatedCells,
        };
      });
      return updatedRows;
    },
    [createCell, data]
  );

  const createColumn = useCallback(() => {
    const newColumn: Column = {
      key: Date.now().toString(),
      isEditable: true,
      text: "",
    };
    const updatedColumns = [...data.columns];
    updatedColumns.splice(-1, 0, newColumn);
    const updatedRows = getColumnRows(newColumn.key);
    setData({ rows: updatedRows, columns: updatedColumns });
  }, [data, setData, getColumnRows]);

  const getCalcRows = useCallback((rows: Row[]) => {
    return rows.map((row) => {
      let total = 0;
      const updatedCells = row.cells.map((cell) => {
        if (cell.columnKey !== "TotalKey") {
          total += cell.value;
          return cell;
        }
        return { ...cell, value: total, text: convertToCurrency(total) };
      });
      return { ...row, cells: updatedCells };
    });
  }, []);

  return {
    columns: data.columns,
    rows: getCalcRows(data.rows),
    createColumn,
    deleteColumn,
    updateData: setData,
  };
};
