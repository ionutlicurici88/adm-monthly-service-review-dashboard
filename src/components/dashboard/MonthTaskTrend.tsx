
import { TaskOverview } from "@/types/dashboard";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import TaskTooltip from "./charts/TaskTooltip";
import TaskLegend from "./charts/TaskLegend";
import { processTaskTrendData, getTaskTrendChartConfig, getTaskLegendItems } from "@/utils/chart-utils";

interface MonthTaskTrendProps {
  data: TaskOverview[];
  excludeS1Data?: boolean;
}

const MonthTaskTrend = ({ data, excludeS1Data = false }: MonthTaskTrendProps) => {
  // Get chart configuration
  const chartConfig = getTaskTrendChartConfig();
  
  // Process data for chart display
  const filteredData = processTaskTrendData(data, excludeS1Data);
  
  // Get legend items
  const legendItems = getTaskLegendItems(chartConfig);

  return (
    <div className="w-full px-4 pt-6">
      <h3 className="text-lg font-semibold mb-4 text-center text-dashboard-blue-dark">Task Trend Across Months</h3>
      <div className="w-full h-[500px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={(props) => <TaskTooltip {...props} chartConfig={chartConfig} />} />
              <Legend content={() => <TaskLegend items={legendItems} />} />
              
              <Bar 
                dataKey="plannedTasks" 
                fill={chartConfig.plannedTasks.color} 
                name="Planned Tasks" 
                stackId="a"
              />
              <Bar 
                dataKey="unplannedTasks" 
                fill={chartConfig.unplannedTasks.color} 
                name="Unplanned Tasks" 
                stackId="a"
              />
              
              <Bar 
                dataKey="delivered" 
                fill={chartConfig.delivered.color} 
                name="Delivered Tasks" 
                stackId="b"
              />
              <Bar 
                dataKey="leftover" 
                fill={chartConfig.leftover.color} 
                name="Leftover Tasks" 
                stackId="b"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default MonthTaskTrend;
