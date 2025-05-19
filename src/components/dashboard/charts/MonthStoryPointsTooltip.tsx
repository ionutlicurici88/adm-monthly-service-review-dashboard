
import React from 'react';
import { MonthStoryPointsChartConfigType, ProcessedMonthStoryPointItem } from '@/utils/month-story-points-chart-utils';

interface MonthStoryPointsTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  chartConfig: MonthStoryPointsChartConfigType;
  allChartData: ProcessedMonthStoryPointItem[];
}

const MonthStoryPointsTooltip: React.FC<MonthStoryPointsTooltipProps> = ({ active, payload, label, chartConfig, allChartData }) => {
  if (active && payload && payload.length && label) {
    const monthData = allChartData.find(item => item.name === label);
    if (!monthData) return null;

    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-lg text-xs">
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

export default MonthStoryPointsTooltip;
