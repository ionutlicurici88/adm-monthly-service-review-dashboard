
import { TaskOverview } from "@/types/dashboard";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

interface MonthTaskTrendProps {
  data: TaskOverview[];
  excludeS1Data?: boolean;
}

const MonthTaskTrend = ({ data, excludeS1Data = false }: MonthTaskTrendProps) => {
  const filteredData = data
    .filter(item => {
      // When excludeS1Data is true, filter out jan_s1 and feb_s1
      if (excludeS1Data && (item.monthId === 'jan_s1' || item.monthId === 'feb_s1')) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Custom sort for month order
      const monthOrder = ['jan_s1', 'feb_s1', 'feb', 'mar'];
      return monthOrder.indexOf(a.monthId!) - monthOrder.indexOf(b.monthId!);
    })
    .map(month => ({
      name: month.monthName || "",
      plannedTasks: month.plannedTasks,
      unplannedTasks: month.unplannedTasks,
      totalTasks: month.plannedTasks + month.unplannedTasks,
      delivered: month.deliveredTasks,
      leftover: month.leftoverTasks,
      completionPercentage: month.completionPercentage
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
    },
    completionPercentage: {
      label: "Completion %",
      color: "#8b5cf6", // purple-500
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const monthData = filteredData.find(item => item.name === label);
      if (!monthData) return null;
      
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          <div className="flex items-center mt-2">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.plannedTasks.color }}
            ></div>
            <p>Planned: {monthData.plannedTasks}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.unplannedTasks.color }}
            ></div>
            <p>Unplanned: {monthData.unplannedTasks}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.delivered.color }}
            ></div>
            <p>Delivered: {monthData.delivered}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.leftover.color }}
            ></div>
            <p>Leftover: {monthData.leftover}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.completionPercentage.color }}
            ></div>
            <p>Completion: {monthData.completionPercentage}%</p>
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
      <h3 className="text-lg font-semibold mb-4 text-center text-dashboard-blue-dark">Task Trend Across Months</h3>
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

              <Bar 
                dataKey="delivered" 
                fill={chartConfig.delivered.color} 
                name="Delivered Tasks" 
                stackId="tasks"
              />
              <Bar 
                dataKey="leftover" 
                fill={chartConfig.leftover.color} 
                name="Leftover Tasks" 
                stackId="tasks"
              />
              
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

export default MonthTaskTrend;
