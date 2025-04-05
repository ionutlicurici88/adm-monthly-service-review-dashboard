
import React from 'react';

type TaskData = {
  name: string;
  plannedTasks: number;
  unplannedTasks: number;
  delivered: number;
  leftover: number;
  completionPercentage: number;
};

interface TaskTooltipProps {
  active?: boolean; // Make active optional to fix the TypeScript error
  payload?: any[];
  label?: string;
  chartConfig: Record<string, { color: string; label: string }>;
}

const TaskTooltip = ({ active, payload, label, chartConfig }: TaskTooltipProps) => {
  if (!active || !payload || !payload.length) return null;
  
  const monthData = payload[0].payload as TaskData;
  
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
};

export default TaskTooltip;
