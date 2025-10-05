// src/components/AdminLineCharts.jsx
import React from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer, Legend
} from "recharts";

const revenueData = [
  { month: "Jan", series1: 4000, series2: 2400 },
  { month: "Feb", series1: 3000, series2: 1398 },
  { month: "Mar", series1: 2000, series2: 9800 },
  { month: "Apr", series1: 2780, series2: 3908 },
  { month: "May", series1: 1890, series2: 4800 },
  { month: "Jun", series1: 2390, series2: 3800 },
  { month: "Jul", series1: 2390, series2: 3800 },
  { month: "Aug", series1: 2390, series2: 3800 },
  { month: "Sep", series1: 2390, series2: 3800 },
  { month: "Oct", series1: 2390, series2: 3800 },
  { month: "Nov", series1: 2390, series2: 3800 },
  { month: "Dec", series1: 2390, series2: 3800 },
];


function AdminLineCharts() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="series1" stroke="#4F46E5" />
            <Line type="monotone" dataKey="series2" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default AdminLineCharts;
