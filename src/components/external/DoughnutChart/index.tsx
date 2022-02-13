import {
  Chart as ChartJS,
  ArcElement,
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
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  return <ChartJs type="pie" data={data} style={customStyle} />;
};
