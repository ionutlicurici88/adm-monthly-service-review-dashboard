
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
      // When excludeS1Data is true, filter out 'jan_feb_s1'
      if (excludeS1Data && item.monthId === 'jan_feb_s1') {
        return false;
      }
      return true;
    })
    .map(month => {
      // monthName from data source (e.g., monthlyTaskOverviewData) is now used directly
      return {
        name: month.monthName || "",
        plannedTasks: month.plannedTasks,
        unplannedTasks: month.unplannedTasks,
        totalTasks: month.plannedTasks + month.unplannedTasks,
        delivered: month.deliveredTasks,
        leftover: month.leftoverTasks,
        completionPercentage: month.completionPercentage
      };
    })
    .sort((a, b) => {
      // Custom sort for month order: Jan & Feb S1, February, March, April, May
      const monthOrder = ['Jan & Feb S1', 'February', 'March', 'April', 'May'];
      
      const indexA = monthOrder.indexOf(a.name);
      const indexB = monthOrder.indexOf(b.name);

      // Handle cases where a name might not be in monthOrder (though unlikely with current data)
      // Items not in monthOrder are placed at the end.
      if (indexA === -1 && indexB === -1) return 0; // Keep original relative order if both not found
      if (indexA === -1) return 1;  // 'a' comes after 'b' if 'a' is not in monthOrder
      if (indexB === -1) return -1; // 'b' comes after 'a' if 'b' is not in monthOrder

      return indexA - indexB;
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
