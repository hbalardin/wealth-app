import { PageTitle } from "./styles";

import Table from "../../components/ui/Table";
import PageLayout from "../../components/layout/PageLayout";

import { useWealthTable } from "../../hooks/useWealthTable";

const Home = () => {
  const wealthTableProps = useWealthTable();

  return (
    <PageLayout>
      <PageTitle>Sua Riqueza</PageTitle>
      <Table {...wealthTableProps} />
    </PageLayout>
  );
};

export default Home;
