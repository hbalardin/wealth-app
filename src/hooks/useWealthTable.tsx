import { useCallback } from "react";
import { MONTHS } from "../utils/constants";
import { convertToCurrency } from "../utils/functions";
import { useLocalStorage } from "./useLocalStorage";

const INITIAL_DATA = {
  columns: [
    { key: "MonthKey", text: "Mês", isEditable: false },
    { key: "99", text: "Banco", isEditable: true },
    { key: "TotalKey", text: "Total", isEditable: false },
  ],
  rows: Array.from(Array(12).keys()).map((id) => ({
    id,
    cells: [
      {
        columnKey: "MonthKey",
        isEditable: false,
        rowId: id,
        text: MONTHS[id].value,
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
  updateData: (data: typeof INITIAL_DATA) => void;
  createColumn: () => void;
}

export const useWealthTable = (): TableData => {
  const [data, setData] = useLocalStorage(
    "@HB:PrimoAPP-WealthTable",
    INITIAL_DATA
  );

  const createCell = useCallback((rowId: number, columnKey: string): Cell => {
    return {
      columnKey,
      isEditable: true,
      rowId,
      text: "",
      value: 0,
    };
  }, []);

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
    updateData: setData,
    createColumn,
  };
};
