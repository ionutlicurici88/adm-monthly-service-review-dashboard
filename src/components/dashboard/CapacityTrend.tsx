
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
  excludeFirstSprint?: boolean;
}

const CapacityTrend = ({ data, excludeFirstSprint = false }: CapacityTrendProps) => {
  // Prepare data for the chart
  const chartData = data
    .filter(item => {
      // Filter out "All Sprints" aggregated data
      const isRegularSprint = item.sprintNumber > 0;
      
      // Also filter out Sprint 1 when excludeFirstSprint is true
      if (excludeFirstSprint && item.sprintNumber === 1) {
        return false;
      }
      
      return isRegularSprint;
    })
    .sort((a, b) => a.sprintNumber - b.sprintNumber) // Sort by sprint number
    .map((item) => ({
      name: `S${item.sprintNumber}`, // Shorter sprint name
      "Available Capacity": item.availableCapacity,
      "Planned Capacity": item.plannedCapacity,
      "Delivered Capacity": item.deliveredCapacity,
    }));

  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark">Capacity Trend</h3>
      <div className="h-60 w-full">
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
              margin={{ top: 5, right: 30, left: 30, bottom: 20 }}
              barSize={16}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                scale="point" 
                padding={{ left: 20, right: 20 }} 
                tick={{ fontSize: 11 }}
              />
              <YAxis 
                tick={{ fontSize: 11 }} 
                width={30}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend 
                wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} 
                iconSize={8}
              />
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
