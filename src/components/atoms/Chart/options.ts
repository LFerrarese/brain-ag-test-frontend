import Highcharts from "highcharts";

const options: Highcharts.Options = {
  series: [],
  chart: {
    plotShadow: false,
    plotBackgroundColor: "transparent",
    plotBorderWidth: 0,
    backgroundColor: "transparent",
    style: {
      fontFamily: "Inter",
      color: "",
    },
    className: "chart",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  tooltip: {
    pointFormat:
      "<b>{point.name}:</b> {point.y}</br></br>Total de <b>{point.percentage:.1f}%</b>",
  },
};

export default options;
