import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DefaultTheme, useTheme } from "styled-components";
import options from "./options";

type ChartProps = {
  data: Highcharts.SeriesOptionsType;
  title: string;
};

export const Chart = ({ data, title }: ChartProps): JSX.Element => {
  const theme = useTheme() as DefaultTheme;

  const opt: Highcharts.Options = {
    ...options,
    series: [data],
    title: {
      ...options.title,
      text: title,
      style: {
        color: theme.colors.text.light,
        fontFamily: theme.font.secondary.family,
      },
    },
    chart: {
      ...options.chart,
      style: {
        fontFamily: theme.font.secondary.family,
        color: theme.colors.text.light,
      },
    },
    plotOptions: {
      pie: {
        ...options?.plotOptions?.pie,
        dataLabels: {
          ...options?.plotOptions?.pie?.dataLabels,
          style: {
            color: theme.colors.text.light,
            textOutline: "none",
          },
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={opt} />;
};
