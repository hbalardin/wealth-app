import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJs } from "react-chartjs-2";
import { CSSProperties } from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  return <ChartJs type="line" data={data} style={customStyle} />;
};
