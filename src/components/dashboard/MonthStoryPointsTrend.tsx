import { StoryPointsOverview } from "@/types/dashboard";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

interface MonthStoryPointsTrendProps {
  data: StoryPointsOverview[];
  excludeS1Data?: boolean;
}

const MonthStoryPointsTrend = ({ data, excludeS1Data = false }: MonthStoryPointsTrendProps) => {
  const processData = () => {
    // Filter out aggregate rows like "total" or "grand_total" from chart data
    let filteredChartData = data.filter(item =>
      item.monthId !== "total" && item.monthId !== "grand_total"
    );

    if (excludeS1Data) {
      // If excludeS1Data is true, filter out the "Jan & Feb S1" data point
      filteredChartData = filteredChartData.filter(item => 
        item.monthId !== "jan_feb_s1"
      );
    }
    // Otherwise (for Grand Total view), "jan_feb_s1" is included by default

    // Define the desired order for months in the chart
    const baseMonthOrder: Record<string, number> = {
      "jan_feb_s1": 0, // "Jan & Feb S1"
      "feb": 1,       // February
      "mar": 2,       // March
      "apr": 3,       // April
    };
    
    return filteredChartData
      .sort((a, b) => { // Sort by defined month order
        const orderA = baseMonthOrder[a.monthId] ?? 99; // Items not in order map go to end
        const orderB = baseMonthOrder[b.monthId] ?? 99;
        return orderA - orderB;
      })
      .map(month => ({
        name: month.monthName || month.monthId || "", // Use monthName, fallback to monthId
        estimatedSTP: month.estimatedSTP,
        extraSTP: month.extraSTP,
        totalSTP: month.estimatedSTP + month.extraSTP,
        delivered: month.deliveredSTP,
        leftover: month.leftoverSTP,
        velocityPercent: month.sprintVelocityPercentage
      }));
  };

  const filteredData = processData();

  const chartConfig = {
    estimatedSTP: {
      label: "Estimated STP",
      color: "#60a5fa", // blue-400
    },
    extraSTP: {
      label: "Extra STP",
      color: "#f97316", // orange-500
    },
    delivered: {
      label: "Delivered STP",
      color: "#4ade80", // green-400
    },
    leftover: {
      label: "Leftover STP",
      color: "#f43f5e", // rose-500
    },
    totalSTP: {
      label: "Total STP",
      color: "#60a5fa", // Same as estimated for legend
    },
    velocityPercent: {
      label: "Velocity %",
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
              style={{ backgroundColor: chartConfig.estimatedSTP.color }}
            ></div>
            <p>Estimated: {monthData.estimatedSTP}</p>
          </div>
          <div className="flex items-center mt-1">
            <div 
              className="w-3 h-3 mr-2" 
              style={{ backgroundColor: chartConfig.extraSTP.color }}
            ></div>
            <p>Extra: {monthData.extraSTP}</p>
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
              style={{ backgroundColor: chartConfig.velocityPercent.color }}
            ></div>
            <p>Velocity: {monthData.velocityPercent}%</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLegendContent = (props: any) => {
    const { payload } = props;
    
    const legendItemsToDisplay = [
        { value: 'Estimated STP', color: chartConfig.estimatedSTP.color },
        { value: 'Extra STP', color: chartConfig.extraSTP.color },
        { value: 'Delivered STP', color: chartConfig.delivered.color },
        { value: 'Leftover STP', color: chartConfig.leftover.color },
    ];
    
    return (
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
        {legendItemsToDisplay.map((entry: any, index: number) => (
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
      <h3 className="text-lg font-semibold mb-4 text-center text-dashboard-blue-dark">Story Points Trend Across Months</h3>
      <div className="w-full h-[500px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" /> {/* Added yAxisId="left" here */}
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegendContent />} />
              
              <Bar dataKey="totalSTP" name="Total STP" yAxisId="left">
                {filteredData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={`url(#splitColorMonth-${index})`} 
                  />
                ))}
              </Bar>

              <Bar 
                dataKey="delivered" 
                fill={chartConfig.delivered.color} 
                name="Delivered STP" 
                stackId="storyPoints"
                yAxisId="left"
              />
              <Bar 
                dataKey="leftover" 
                fill={chartConfig.leftover.color} 
                name="Leftover STP" 
                stackId="storyPoints"
                yAxisId="left"
              />
              
              <defs>
                {filteredData.map((entry, index) => {
                  const total = entry.totalSTP;
                  const extraRatio = total > 0 ? entry.extraSTP / total : 0;
                  
                  return (
                    <linearGradient id={`splitColorMonth-${index}`} key={`gradientMonth-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset={0} stopColor={chartConfig.extraSTP.color} />
                      <stop offset={extraRatio} stopColor={chartConfig.extraSTP.color} />
                      <stop offset={extraRatio} stopColor={chartConfig.estimatedSTP.color} />
                      <stop offset={1} stopColor={chartConfig.estimatedSTP.color} />
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

export default MonthStoryPointsTrend;
