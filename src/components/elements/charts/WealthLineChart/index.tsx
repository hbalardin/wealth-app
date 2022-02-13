import { useWealthTable } from "../../../../hooks/useWealthTable";

import { Container } from "./styles";

import { theme } from "../../../../styles/theme";
import { LineChart } from "../../../external/LineChart";

export const WealthLineChart = () => {
  const { rows } = useWealthTable();
  const data = {
    labels: rows.map((row) => row.cells[0].text),
    datasets: [
      {
        label: "Riqueza Acumulada",
        data: rows.map((row) => row.cells[row.cells.length - 1].value),
        color: theme.color.orange,
      },
    ],
  };

  return (
    <Container>
      <h2>Seu Progresso</h2>
      <LineChart {...data} customStyle={{ maxHeight: 300 }} />
    </Container>
  );
};
