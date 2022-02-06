import { PageTitle } from "./styles";

import Table from "../../components/ui/Table";
import PageLayout from "../../components/layout/PageLayout";

const data = {
  columns: [
    {
      key: "1",
      label: "",
    },
    {
      key: "2",
      label: "",
    },
    {
      key: "3",
      label: "",
    },
  ],
  rows: [
    {
      id: "1",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
    {
      id: "2",
      1: 1,
      2: 2,
      3: 3,
    },
  ],
};

const Home = () => {
  return (
    <PageLayout>
      <PageTitle>Sua Riqueza</PageTitle>
      <Table columns={data.columns} rows={data.rows} />
    </PageLayout>
  );
};

export default Home;
