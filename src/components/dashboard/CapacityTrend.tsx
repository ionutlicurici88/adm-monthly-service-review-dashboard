
import { CapacityOverview } from "@/types/dashboard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface CapacityTrendProps {
  data: CapacityOverview[];
  excludeFirstSprint?: boolean;
}

const CapacityTrend = ({ data, excludeFirstSprint = false }: CapacityTrendProps) => {
  // Filter out "All Sprints" aggregated data and optionally exclude Sprint 1
  const filteredData = data
    .filter(item => {
      const isRegularSprint = item.sprintNumber > 0;
      
      if (excludeFirstSprint && item.sprintNumber === 1) {
        return false;
      }
      
      return isRegularSprint;
    })
    .sort((a, b) => a.sprintNumber - b.sprintNumber)
    .map(sprint => ({
      name: `Sprint ${sprint.sprintNumber}`,
      available: sprint.availableCapacity,
      planned: sprint.plannedCapacity,
      delivered: sprint.deliveredCapacity,
    }));

  const chartConfig = {
    available: {
      label: "Available Capacity",
      color: "#94a3b8", // slate-400
    },
    planned: {
      label: "Planned Capacity",
      color: "#60a5fa", // blue-400
    },
    delivered: {
      label: "Delivered Capacity",
      color: "#4ade80", // green-400
    },
  };

  return (
    <div className="w-full px-4 pt-6">
      <h3 className="text-lg font-medium mb-4 text-center text-dashboard-blue-dark">Capacity Trend Across Sprints</h3>
      <div className="w-full h-[500px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip
                content={
                  <ChartTooltipContent />
                }
              />
              <Legend />
              <Bar dataKey="available" fill="var(--color-available)" name="Available Capacity" />
              <Bar dataKey="planned" fill="var(--color-planned)" name="Planned Capacity" />
              <Bar dataKey="delivered" fill="var(--color-delivered)" name="Delivered Capacity" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CapacityTrend;
