
import { StoryPointsOverview } from "@/types/dashboard";

export interface ProcessedMonthStoryPointItem {
  name: string;
  estimatedSTP: number;
  extraSTP: number;
  totalSTP: number;
  delivered: number;
  leftover: number;
  velocityPercent: number;
}

export const processMonthStoryPointsDataForChart = (
  data: StoryPointsOverview[],
  excludeS1Data: boolean = false
): ProcessedMonthStoryPointItem[] => {
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

  // Define the desired order for months in the chart
  const baseMonthOrder: Record<string, number> = {
    "jan_feb_s1": 0, // "Jan & Feb S1"
    "feb": 1,       // February
    "mar": 2,       // March
    "apr": 3,       // April
  };

  return filteredChartData
    .sort((a, b) => { // Sort by defined month order
      const orderA = baseMonthOrder[a.monthId!] ?? 99; // Items not in order map go to end
      const orderB = baseMonthOrder[b.monthId!] ?? 99;
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

export const getMonthStoryPointsChartConfig = () => ({
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
  totalSTP: { // This key is used by the Bar's dataKey but its label/color can be for legend reference
    label: "Total STP", // Label for consistency if ever shown
    color: "#60a5fa", // Color reference, matches estimatedSTP for gradient base
  },
  velocityPercent: {
    label: "Velocity %",
    color: "#8b5cf6", // purple-500
  }
});

export type MonthStoryPointsChartConfigType = ReturnType<typeof getMonthStoryPointsChartConfig>;

