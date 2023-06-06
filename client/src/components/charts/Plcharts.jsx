import React from "react";
import "./plcharts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "APR",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "AUG",
    uv: 3790,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "SEP",
    uv: 2590,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "OCT",
    uv: 3490,
    pv: 4300,
    amt: 2400,
  },
  {
    name: "NOV",
    uv: 2290,
    pv: 4300,
    amt: 1800,
  },
  {
    name: "DEC",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
export const Plcharts = ({ aspect }) => {
  return (
    <div className="plcharts">
      <div className="title">Current FY Performance </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="Grid" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
