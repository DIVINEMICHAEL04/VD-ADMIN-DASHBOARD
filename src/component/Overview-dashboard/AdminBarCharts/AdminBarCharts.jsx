import React from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer, Legend
} from "recharts";

const userData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 200 },
  { month: "May", users: 600 },
  { month: "Jun", users: 350 },
  { month: "Jul", users: 350 },
  { month: "Aug", users: 450 },
  { month: "Sep", users: 750 },
  { month: "Oct", users: 501 },
  { month: "Nov", users: 800 },
  { month: "Dec", users: 820 },
];
function AdminBarCharts(){
    return(
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={userData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#3A8E63" />
                    <Line type="monotone" dataKey="series1" stroke="#4F46E5" />
                    <Line type="monotone" dataKey="series2" stroke="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
        </div>
    )

}
export default AdminBarCharts;