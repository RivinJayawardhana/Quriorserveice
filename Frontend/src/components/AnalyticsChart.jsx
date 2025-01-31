import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Sale", value: 40, color: "#4F46E5" },
  { name: "Distribute", value: 30, color: "#FBBF24" },
  { name: "Return", value: 30, color: "#FB923C" },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <h3 className="text-xl font-semibold">Analytics</h3>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" outerRadius={60}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default AnalyticsChart;
