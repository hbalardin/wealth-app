import { PageTitle } from "./styles";

import Table from "../../components/ui/Table";
import PageLayout from "../../components/layout/PageLayout";

const columns = [
  { key: "99", text: "Nubank", isEditable: true },
  { key: "93", text: "Inter", isEditable: true },
];
const rows = [
  {
    id: 0,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 1,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 2,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 3,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 4,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 5,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 6,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 7,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 8,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 9,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 10,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
  {
    id: 11,
    cells: [
      { key: "99", text: "", value: 0, isEditable: true },
      { key: "93", text: "", value: 0, isEditable: true },
    ],
  },
];

const Home = () => {
  return (
    <PageLayout>
      <PageTitle>Sua Riqueza</PageTitle>
      <Table columns={columns} rows={rows} />
    </PageLayout>
  );
};

export default Home;
