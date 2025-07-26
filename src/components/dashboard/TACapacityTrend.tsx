import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthCapacityOverview } from "@/types/dashboard";
import { getFullMonthName } from "@/utils/format-utils";

interface TACapacityTrendProps {
  data: MonthCapacityOverview[];
}

const TACapacityTrend = ({ data }: TACapacityTrendProps) => {
  // Transform data for the chart
  const chartData = data.map((item) => ({
    month: getFullMonthName(item.monthId),
    availableCapacity: item.availableCapacity,
    contractedCapacity: item.contractedCapacity,
    deliveredCapacity: item.deliveredCapacity,
    plannedCapacity: item.plannedCapacity,
    capacityPercentage: item.capacityPercentage,
  }));

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark mb-4">
        TA Capacity Evolution by Month
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="month" 
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
          />
          <YAxis />
          <Tooltip 
            labelStyle={{ color: 'black' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="availableCapacity"
            stroke="#2563eb"
            strokeWidth={2}
            name="Available Capacity"
            dot={{ fill: "#2563eb", strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="contractedCapacity"
            stroke="#dc2626"
            strokeWidth={2}
            name="Contracted Capacity"
            dot={{ fill: "#dc2626", strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="deliveredCapacity"
            stroke="#16a34a"
            strokeWidth={2}
            name="Delivered Capacity"
            dot={{ fill: "#16a34a", strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="plannedCapacity"
            stroke="#ca8a04"
            strokeWidth={2}
            name="Planned Capacity"
            dot={{ fill: "#ca8a04", strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TACapacityTrend;