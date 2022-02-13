import { PageHeader, SectionContainer } from "./styles";

import { PageLayout } from "../../components/layout/PageLayout";
import { WealthLineChart } from "../../components/elements/charts/WealthLineChart";
import { WealthDoughnutChart } from "../../components/elements/charts/WealthDoughnutChart";

export const HomePage = () => {
  return (
    <PageLayout>
      <PageHeader>
        <h1>Seu Patrimônio</h1>
      </PageHeader>
      <SectionContainer>
        <WealthLineChart />
        <WealthDoughnutChart />
      </SectionContainer>
    </PageLayout>
  );
};
