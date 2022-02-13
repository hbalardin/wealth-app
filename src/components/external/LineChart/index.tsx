import { Chart as ChartJs, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { CSSProperties } from "styled-components";
ChartJs.register(...registerables);

interface Dataset {
  label: string;
  color: string;
  data: number[];
}

interface ChartProps {
  labels: string[];
  datasets: Dataset[];
  customStyle?: CSSProperties;
}

export const LineChart = ({ customStyle, datasets, labels }: ChartProps) => {
  const data = {
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.color,
      backgroundColor: dataset.color + "CC",
      pointBorderColor: dataset.color,
      pointBackgroundColor: dataset.color,
    })),
  };

  return <Chart type="line" data={data} style={customStyle} />;
};
