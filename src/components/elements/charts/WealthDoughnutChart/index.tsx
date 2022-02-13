import { useWealthTable } from "../../../../hooks/useWealthTable";

import { Container } from "./styles";

import { theme } from "../../../../styles/theme";
import { DoughnutChart } from "../../../external/DoughnutChart";
import { MONTHS } from "../../../../utils/constants";

export const WealthDoughnutChart = () => {
  const { rows, columns } = useWealthTable();
  const { yellow, blue, orange, purple, green, red } = theme.color;
  const colors = [
    yellow,
    blue,
    orange,
    purple,
    green,
    red,
    yellow,
    blue,
    orange,
    purple,
    green,
    red,
  ];

  const formatArray = <T extends unknown>(array: T[]): T[] => {
    const draft = [...array];
    draft.pop();
    draft.shift();
    return draft;
  };

  const currentMonth = new Date().getMonth();
  const data = {
    labels: formatArray(columns).map((column) => column.text),
    dataset: {
      colors: formatArray(columns).map((_, i) => colors[i]),
      data: formatArray(rows[currentMonth].cells).map((cell) => cell.value),
    },
  };

  return (
    <Container>
      <h2>
        Alocação de riqueza no mês {MONTHS[currentMonth].long.toLowerCase()}
      </h2>

      <DoughnutChart {...data} customStyle={{ maxHeight: 300 }} />
    </Container>
  );
};
