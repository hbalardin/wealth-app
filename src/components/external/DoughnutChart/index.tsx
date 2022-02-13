import { Chart as ChartJs, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { CSSProperties } from "styled-components";
ChartJs.register(...registerables);
interface Dataset {
  colors: string[];
  data: number[];
}

interface ChartProps {
  labels: string[];
  dataset: Dataset;
  customStyle?: CSSProperties;
}

export const DoughnutChart = ({ customStyle, dataset, labels }: ChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: dataset.colors,
        data: dataset.data,
      },
    ],
  };

  return <Chart type="pie" data={data} style={customStyle} />;
};
