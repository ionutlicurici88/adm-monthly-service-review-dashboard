
import { TaskOverview } from "@/types/dashboard";

export interface ProcessedTaskData {
  name: string;
  plannedTasks: number;
  unplannedTasks: number;
  totalTasks: number;
  delivered: number;
  leftover: number;
  completionPercentage: number;
}

/**
 * Process task overview data for chart display
 */
export const processTaskTrendData = (
  data: TaskOverview[],
  excludeS1Data: boolean
): ProcessedTaskData[] => {
  return data
    .filter(item => {
      // Always filter out feb_s1 as it's empty
      if (item.monthId === 'feb_s1') {
        return false;
      }
      
      // When excludeS1Data is true, also filter out jan_s1
      if (excludeS1Data && item.monthId === 'jan_s1') {
        return false;
      }
      return true;
    })
    .map(month => {
      // Rename Jan S1 to Jan & Feb S1
      const modifiedMonth = {...month};
      if (modifiedMonth.monthId === 'jan_s1' && modifiedMonth.monthName === 'Jan S1') {
        modifiedMonth.monthName = 'Jan & Feb S1';
      }
      
      return {
        name: modifiedMonth.monthName || "",
        plannedTasks: modifiedMonth.plannedTasks,
        unplannedTasks: modifiedMonth.unplannedTasks,
        totalTasks: modifiedMonth.plannedTasks + modifiedMonth.unplannedTasks,
        delivered: modifiedMonth.deliveredTasks,
        leftover: modifiedMonth.leftoverTasks,
        completionPercentage: modifiedMonth.completionPercentage
      };
    })
    .sort((a, b) => {
      // Custom sort for month order
      const monthOrder = ['Jan & Feb S1', 'Feb', 'Mar'];
      return monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name);
    });
};

/**
 * Get chart configuration for task trend charts
 */
export const getTaskTrendChartConfig = () => {
  return {
    plannedTasks: {
      label: "Planned Tasks",
      color: "#60a5fa", // blue-400
    },
    unplannedTasks: {
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
};

/**
 * Generate legend items for task trend charts
 */
export const getTaskLegendItems = (chartConfig: ReturnType<typeof getTaskTrendChartConfig>) => {
  return [
    { value: 'Planned Tasks', color: chartConfig.plannedTasks.color },
    { value: 'Unplanned Tasks', color: chartConfig.unplannedTasks.color },
    { value: 'Delivered Tasks', color: chartConfig.delivered.color },
    { value: 'Leftover Tasks', color: chartConfig.leftover.color }
  ];
};
