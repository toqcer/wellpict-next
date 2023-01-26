import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import LineBaseOption from "@/components/Charts/LineBaseOptions";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Uploaded",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "#006D77",
      backgroundColor: "#006D77",
    },
    {
      label: "views",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
      borderColor: "#66A7AD",
      backgroundColor: "#66A7AD",
    },
    {
      label: "downloads",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#00373C",
      backgroundColor: "#00373C",
    },
  ],
};

export default function HomeChartAnalytics() {
  return (
    <div className="bg-white px-4 py-2 rounded-lg shadow-custom">
      <Line options={LineBaseOption()} height={240} data={data} />
    </div>
  );
}
