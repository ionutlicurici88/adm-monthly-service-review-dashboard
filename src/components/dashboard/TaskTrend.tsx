
import { TaskOverview } from "@/types/dashboard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface TaskTrendProps {
  data: TaskOverview[];
  excludeFirstSprint?: boolean;
}

const TaskTrend = ({ data, excludeFirstSprint = false }: TaskTrendProps) => {
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
      planned: sprint.plannedTasks,
      unplanned: sprint.unplannedTasks,
      delivered: sprint.deliveredTasks,
      leftover: sprint.leftoverTasks
    }));

  const chartConfig = {
    planned: {
      label: "Planned Tasks",
      color: "#60a5fa", // blue-400
    },
    unplanned: {
      label: "Unplanned Tasks",
      color: "#f97316", // orange-500
    },
    delivered: {
      label: "Delivered Tasks",
      color: "#4ade80", // green-400
    },
    leftover: {
      label: "Leftover Tasks",
      color: "#f43f5e", // rose-500
    }
  };

  return (
    <div className="w-full px-4 pt-6">
      <h3 className="text-lg font-medium mb-4 text-center text-dashboard-blue-dark">Task Trend Across Sprints</h3>
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
              <Bar dataKey="planned" fill="var(--color-planned)" name="Planned Tasks" />
              <Bar dataKey="unplanned" fill="var(--color-unplanned)" name="Unplanned Tasks" />
              <Bar dataKey="delivered" fill="var(--color-delivered)" name="Delivered Tasks" />
              <Bar dataKey="leftover" fill="var(--color-leftover)" name="Leftover Tasks" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TaskTrend;
