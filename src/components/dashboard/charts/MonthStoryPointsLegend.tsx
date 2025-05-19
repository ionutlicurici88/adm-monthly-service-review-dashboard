
import React from 'react';
import { MonthStoryPointsChartConfigType } from '@/utils/month-story-points-chart-utils';

interface MonthStoryPointsLegendProps {
  chartConfig: MonthStoryPointsChartConfigType;
  // payload prop from Recharts is available if needed, but current custom legend doesn't use it.
  // payload?: any[]; 
}

const MonthStoryPointsLegend: React.FC<MonthStoryPointsLegendProps> = ({ chartConfig }) => {
  const legendItemsToDisplay = [
    { value: 'Estimated STP', color: chartConfig.estimatedSTP.color },
    { value: 'Extra STP', color: chartConfig.extraSTP.color },
    { value: 'Delivered STP', color: chartConfig.delivered.color },
    { value: 'Leftover STP', color: chartConfig.leftover.color },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
      {legendItemsToDisplay.map((entry, index) => (
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

export default MonthStoryPointsLegend;
