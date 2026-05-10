/**
 * ReviewData
 * Mock data for the Customer Review chart
 *
 * - series: Data points for the area chart
 * - options: Configuration for ApexCharts (axes, colors, etc.)
 *
 * Used in: CustomerReview component
 */
export const ReviewData = {
  series: [
    {
      name: "Review",
      data: [10, 50, 30, 90, 40, 120, 100],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: "auto",
      toolbar: {
        show: false,
      },
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
      colors: ["#ff929f"],
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    grid: {
      show: false,
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
    yaxis: {
      show: false,
    },
  },
};
