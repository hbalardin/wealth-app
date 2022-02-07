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
}

export const useWealthTable = (): TableData => {
  const [data, setData] = useLocalStorage(
    "@HB:PrimoAPP-WealthTable",
    INITIAL_DATA
  );

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
  };
};
