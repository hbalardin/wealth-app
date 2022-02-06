import { useCallback } from "react";
import { MONTHS } from "../utils/constants";
import { convertToCurrency } from "../utils/functions";

type Column = {
  isEditable: boolean;
  key: string;
  text: string;
};

type Cell = {
  isEditable?: boolean;
  key: string;
  text: string;
  value: number;
};

type Row = {
  cells: Cell[];
  id: number;
};

export interface TableProps {
  columns: Column[];
  rows: Row[];
}

export const useTable = ({ columns, rows }: TableProps) => {
  const getColumns = useCallback(() => {
    const parsedColumns = columns.map((column) => ({
      ...column,
      isEditable: true,
    }));

    return [
      { key: "MonthKey", text: "Mês", isEditable: false },
      ...parsedColumns,
      { key: "TotalKey", text: "Total", isEditable: false },
    ];
  }, [columns]);

  const getCells = useCallback((row: Row) => {
    const parsedCells = row.cells.map((cell) => ({
      ...cell,
      isEditable: true,
    }));

    const total = parsedCells.reduce(
      (accumulator, current) => accumulator + current.value,
      0
    );

    return [
      {
        isEditable: false,
        key: "MonthKey",
        text: MONTHS[row.id].value,
        value: 0,
      },
      ...parsedCells,
      {
        isEditable: false,
        key: "TotalKey",
        text: convertToCurrency(total),
        value: total,
      },
    ];
  }, []);

  const getRows = useCallback(() => {
    return MONTHS.map((month) => {
      const row = rows[month.key] ?? { id: month.key, cells: [] };
      return {
        id: month.key,
        cells: getCells(row),
      };
    });
  }, [getCells, rows]);

  return {
    columns: getColumns(),
    rows: getRows(),
  };
};
