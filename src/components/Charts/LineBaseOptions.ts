import { ChartOptions } from "chart.js";

export default function LineBaseOption() {
  return {
    maintainAspectRatio: false,
    interaction: {
      intersect: true,
    },
    datasets: {
      line: {
        tension: 0.25,
        pointRadius: 2.25,
        pointHoverRadius: 4.5,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        angleLines: {
          display: false,
        },
        ticks: {
          align: "start",
          labelOffset: 2,
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {},
        angleLines: {
          display: false,
        },
        ticks: {
          display: false,
          padding: 0,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true,
          boxHeight: 8,
          boxWidth: 8,
          textAlign: "center",
          color: "#697586",
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  } satisfies ChartOptions;
}
