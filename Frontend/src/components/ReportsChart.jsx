import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "10am", value: 40000 },
  { name: "11am", value: 60000 },
  { name: "12pm", value: 50000 },
  { name: "1pm", value: 70000 },
  { name: "2pm", value: 65000 },
];

const ReportsChart = () => {
  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <h3 className="text-xl font-semibold">Reports</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="blue" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportsChart;
