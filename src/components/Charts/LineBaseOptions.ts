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
          lineWidth: 0,
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
        ticks: {
          display: false,
          showLabelBackdrop: true,
          backdropColor: "hsla(185, 100%, 17%, 1)",
          padding: 0,
          labelOffset: 0,
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
          padding: 8,
        },
      },
    },
  } satisfies ChartOptions;
}
