
import { TaskOverview } from "@/types/dashboard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

interface TaskTrendProps {
  data: TaskOverview[];
  excludeFirstSprint?: boolean;
}

const TaskTrend = ({ data, excludeFirstSprint = false }: TaskTrendProps) => {
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
      plannedTasks: sprint.plannedTasks,
      unplannedTasks: sprint.unplannedTasks,
      totalTasks: sprint.plannedTasks + sprint.unplannedTasks,
      delivered: sprint.deliveredTasks,
      leftover: sprint.leftoverTasks
    }));

  const chartConfig = {
    plannedTasks: {
      label: "Planned Tasks",
      color: "#60a5fa", // blue-400 on bottom
    },
    unplannedTasks: {
      label: "Unplanned Tasks",
      color: "#f97316", // orange-500 on top
    },
    delivered: {
      label: "Delivered Tasks",
      color: "#4ade80", // green-400
    },
    leftover: {
      label: "Leftover Tasks",
      color: "#f43f5e", // rose-500
    },
    totalTasks: {
      label: "Total Tasks",
      color: "#60a5fa", // Same as planned for legend
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const sprintData = filteredData.find(item => item.name === label);
      if (!sprintData) return null;
      
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          <div className="flex items-center mt-2">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.plannedTasks.color }}
            ></div>
            <p>Planned: {sprintData.plannedTasks}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.unplannedTasks.color }}
            ></div>
            <p>Unplanned: {sprintData.unplannedTasks}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.delivered.color }}
            ></div>
            <p>Delivered: {sprintData.delivered}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.leftover.color }}
            ></div>
            <p>Leftover: {sprintData.leftover}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLegendContent = (props: any) => {
    const { payload } = props;
    
    const customItems = [
      { value: 'Planned Tasks', color: chartConfig.plannedTasks.color, type: 'rect' },
      { value: 'Unplanned Tasks', color: chartConfig.unplannedTasks.color, type: 'rect' }
    ];
    
    const filteredPayload = payload.filter((entry: any) => entry.value !== 'Total Tasks');
    
    const combinedItems = [...customItems, ...filteredPayload];
    
    return (
      <ul className="flex flex-wrap justify-center gap-6 text-xs">
        {combinedItems.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center">
            <svg width="14" height="14" className="mr-1">
              <rect
                width="14"
                height="14"
                fill={entry.color}
                rx="2"
                ry="2"
              />
            </svg>
            <span className="text-gray-700">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
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
              <Tooltip content={CustomTooltip} />
              <Legend content={CustomLegendContent} />
              
              <Bar dataKey="totalTasks" name="Total Tasks">
                {filteredData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={`url(#splitColor-${index})`}
                  />
                ))}
              </Bar>

              {/* Changed the order: leftover now rendered after delivered */}
              <Bar dataKey="delivered" fill={chartConfig.delivered.color} name="Delivered Tasks" />
              <Bar dataKey="leftover" fill={chartConfig.leftover.color} name="Leftover Tasks" />
              
              <defs>
                {filteredData.map((entry, index) => {
                  const unplannedRatio = entry.unplannedTasks / entry.totalTasks;
                  return (
                    <linearGradient id={`splitColor-${index}`} key={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset={0} stopColor={chartConfig.unplannedTasks.color} />
                      <stop offset={unplannedRatio} stopColor={chartConfig.unplannedTasks.color} />
                      <stop offset={unplannedRatio} stopColor={chartConfig.plannedTasks.color} />
                      <stop offset={1} stopColor={chartConfig.plannedTasks.color} />
                    </linearGradient>
                  );
                })}
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TaskTrend;
