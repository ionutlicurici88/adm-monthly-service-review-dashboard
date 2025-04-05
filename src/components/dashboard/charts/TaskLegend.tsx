
import React from 'react';

interface LegendItem {
  value: string;
  color: string;
}

interface TaskLegendProps {
  items: LegendItem[];
}

const TaskLegend = ({ items }: TaskLegendProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-6 text-xs">
      {items.map((entry, index) => (
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

export default TaskLegend;
