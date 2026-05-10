/**
 * ChartData
 * Configuration and options for ApexCharts
 *
 * This file contains the default configuration for the analytical charts
 * used in the ExpandedCard components.
 */
export const ChartData = {
  options: {
    chart: {
      type: "area",
      height: "auto",
      toolbar: {
        show: false,
      },
      background: 'transparent',
      foreColor: '#c0c0c0' /* Light text for chart axis */
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2026-05-10T00:00:00.000Z",
        "2026-05-10T01:30:00.000Z",
        "2026-05-10T02:30:00.000Z",
        "2026-05-10T03:30:00.000Z",
        "2026-05-10T04:30:00.000Z",
        "2026-05-10T05:30:00.000Z",
        "2026-05-10T06:30:00.000Z",
      ],
    },
  },
};
