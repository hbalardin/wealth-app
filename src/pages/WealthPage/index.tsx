import { PageHeader } from "./styles";

import { Table } from "../../components/elements/Table";
import { PageLayout } from "../../components/layout/PageLayout";
import { Button } from "../../components/elements/Button";

import { useWealthTable } from "../../hooks/useWealthTable";

export const WealthPage = () => {
  const wealthTableProps = useWealthTable();

  return (
    <PageLayout>
      <PageHeader>
        <h1>Sua Riqueza</h1>
        <Button onClick={wealthTableProps.createColumn}>
          Adicionar coluna
        </Button>
      </PageHeader>
      <Table {...wealthTableProps} />
    </PageLayout>
  );
};
