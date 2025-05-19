
import React from 'react';
import { StoryPointsOverview } from "@/types/dashboard";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { 
  processMonthStoryPointsDataForChart, 
  getMonthStoryPointsChartConfig,
  MonthStoryPointsChartConfigType,
  ProcessedMonthStoryPointItem
} from "@/utils/month-story-points-chart-utils";
import MonthStoryPointsTooltip from "./charts/MonthStoryPointsTooltip";
import MonthStoryPointsLegend from "./charts/MonthStoryPointsLegend";

interface MonthStoryPointsTrendProps {
  data: StoryPointsOverview[];
  excludeS1Data?: boolean;
}

const MonthStoryPointsTrend = ({ data, excludeS1Data = false }: MonthStoryPointsTrendProps) => {
  const chartConfig = getMonthStoryPointsChartConfig();
  const processedData = processMonthStoryPointsDataForChart(data, excludeS1Data);

  return (
    <div className="w-full px-4 pt-6">
      <h3 className="text-lg font-semibold mb-4 text-center text-dashboard-blue-dark">Story Points Trend Across Months</h3>
      <div className="w-full h-[500px]">
        <ChartContainer config={chartConfig as any} className="h-full w-full"> {/* Cast to any for ChartContainer, or ensure full compatibility */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <Tooltip 
                content={
                  <MonthStoryPointsTooltip 
                    chartConfig={chartConfig} 
                    allChartData={processedData} 
                  />
                } 
              />
              <Legend 
                content={<MonthStoryPointsLegend chartConfig={chartConfig} />} 
              />
              
              <Bar dataKey="totalSTP" name="Total STP" yAxisId="left">
                {processedData.map((entry, index) => (
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
                {processedData.map((entry, index) => {
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
