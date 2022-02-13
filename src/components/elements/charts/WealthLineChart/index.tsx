import { useEffect, useState } from "react";
import { Row, useWealthTable } from "../../../../hooks/useWealthTable";
import { MONTHS } from "../../../../utils/constants";

import { Container } from "./styles";

import { theme } from "../../../../styles/theme";
import { LineChart } from "../../../external/LineChart";

export const WealthLineChart = () => {
  const { rows } = useWealthTable();
  const [visibleRows, setVisibleRows] = useState<Row[]>([]);

  const currentMonth = new Date().getMonth();
  useEffect(() => {
    const draft = [...rows];
    draft.length = currentMonth + 1;

    setVisibleRows(draft);
  }, [rows]);

  const data = {
    labels: visibleRows.map((row) => row.cells[0].text),
    datasets: [
      {
        label: "Riqueza Acumulada",
        data: visibleRows.map((row) => row.cells[row.cells.length - 1].value),
        color: theme.color.orange,
      },
    ],
  };

  return (
    <Container>
      <h2>Progresso até o mês de {MONTHS[currentMonth].long.toLowerCase()}</h2>
      <LineChart {...data} customStyle={{ maxHeight: 300 }} />
    </Container>
  );
};
