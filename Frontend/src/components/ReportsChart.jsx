import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "10am", value: 40000 },
  { name: "11am", value: 60000 },
  { name: "12pm", value: 50000 },
  { name: "1pm", value: 70000 },
  { name: "2pm", value: 65000 },
];

const ReportsChart = () => {
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-500">Reports</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#D1D5DB" />
          <YAxis stroke="#D1D5DB" />
          <Tooltip contentStyle={{ backgroundColor: '#f8f9fa', borderRadius: '8px', color: '#6c757d' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ec4899" // Pink color for the line
            strokeWidth={3}
            dot={{ r: 6, fill: '#ec4899' }} // Pink dot for the data points
            activeDot={{ r: 8, fill: '#ec4899' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportsChart;
