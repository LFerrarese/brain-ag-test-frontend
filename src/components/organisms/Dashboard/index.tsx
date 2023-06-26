import { useState, useEffect, useCallback } from "react";
import { Card } from "~/components/atoms/Card";
import { Chart } from "~/components/atoms/Chart";
import { getAnalytics } from "~/services/farmer";
import { DashboardAnalytics } from "@interfaces";
import { Container, Description, Row, TotalNumber } from "./styles";

type TransformObject = (obj: object[]) => Array<{
  name: string;
  y: number;
}>;

export const Dashboard = (): JSX.Element => {
  const [analytics, setAnalytics] = useState<DashboardAnalytics>();

  const transformObject: TransformObject = (obj) => {
    const transformed = obj.map((values) => {
      const [name, y] = Object.entries(values)[0];
      return { name, y };
    });

    return transformed;
  };

  const setupAnalytics = useCallback(async () => {
    const response = await getAnalytics();

    setAnalytics(response);
  }, []);

  useEffect(() => {
    setupAnalytics();
  }, [setupAnalytics]);

  return (
    <Container>
      {analytics && (
        <Row className="totals">
          <Card>
            <Description>Fazendas Cadastradas</Description>
            <TotalNumber>{analytics.farmsCount}</TotalNumber>
          </Card>
          <Card>
            <Description>Área Total Cadastrada</Description>
            <TotalNumber>{analytics.farmsTotalAreaCount} he</TotalNumber>
          </Card>
        </Row>
      )}
      <Row>
        <Card>
          <Chart
            title="Fazendas por Estado"
            data={{
              type: "pie",
              data: analytics && transformObject(analytics.farmsPerState),
            }}
          />
        </Card>
        <Card>
          <Chart
            title="Culturas por Fazenda"
            data={{
              type: "pie",
              data: analytics && transformObject(analytics.farmsCropsCount),
            }}
          />
        </Card>
        <Card>
          <Chart
            title="Tipos de Área"
            data={{
              type: "pie",
              data: analytics && [
                {
                  name: "Área Agricultável (he)",
                  y: analytics.arableAreaCount,
                },
                {
                  name: "Área de Vegetação (he)",
                  y: analytics.vegetationAreaCount,
                },
              ],
            }}
          />
        </Card>
      </Row>
    </Container>
  );
};
