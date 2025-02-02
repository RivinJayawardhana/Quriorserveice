import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Sale", value: 40, color: "url(#gradientSale)" },
  { name: "Distribute", value: 30, color: "url(#gradientDistribute)" },
  { name: "Return", value: 30, color: "url(#gradientReturn)" },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Analytics</h3>
      <PieChart width={300} height={300}>
        <defs>
          <linearGradient id="gradientSale" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="gradientDistribute" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="gradientReturn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={5}
          stroke="white"
          strokeWidth={2}
        >
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