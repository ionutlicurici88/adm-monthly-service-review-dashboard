
import { CapacityOverview } from "@/types/dashboard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface CapacityTrendProps {
  data: CapacityOverview[];
}

const CapacityTrend = ({ data }: CapacityTrendProps) => {
  // Prepare data for the chart
  const chartData = data.map((item) => ({
    name: `Sprint ${item.sprintNumber}`,
    "Planned Capacity": item.plannedCapacity,
    "Delivered Capacity": item.deliveredCapacity,
    "Capacity %": item.capacityPercentage,
  }));

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark">Capacity Trend</h3>
      <div className="h-80 w-full">
        <ChartContainer
          config={{
            "Planned Capacity": {
              label: "Planned Capacity",
              color: "#1E40AF",
            },
            "Delivered Capacity": {
              label: "Delivered Capacity",
              color: "#047857",
            },
            "Capacity %": {
              label: "Capacity %",
              color: "#F59E0B",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar yAxisId="left" dataKey="Planned Capacity" fill="#1E40AF" />
              <Bar yAxisId="left" dataKey="Delivered Capacity" fill="#047857" />
              <Bar yAxisId="right" dataKey="Capacity %" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CapacityTrend;
