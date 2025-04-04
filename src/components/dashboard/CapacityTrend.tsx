
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
  const chartData = data
    .filter(item => item.sprintNumber > 0) // Filter out "All Sprints" aggregated data
    .sort((a, b) => a.sprintNumber - b.sprintNumber) // Sort by sprint number
    .map((item) => ({
      name: `Sprint ${item.sprintNumber}`,
      "Available Capacity": item.availableCapacity,
      "Planned Capacity": item.plannedCapacity,
      "Delivered Capacity": item.deliveredCapacity,
    }));

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark">Capacity Trend</h3>
      <div className="h-80 w-full">
        <ChartContainer
          config={{
            "Available Capacity": {
              label: "Available Capacity",
              color: "#10B981", // Green
            },
            "Planned Capacity": {
              label: "Planned Capacity",
              color: "#93C5FD", // Light blue
            },
            "Delivered Capacity": {
              label: "Delivered Capacity",
              color: "#1E40AF", // Dark blue
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
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="Available Capacity" fill="#10B981" /> {/* Green */}
              <Bar dataKey="Planned Capacity" fill="#93C5FD" /> {/* Light blue */}
              <Bar dataKey="Delivered Capacity" fill="#1E40AF" /> {/* Dark blue */}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CapacityTrend;
