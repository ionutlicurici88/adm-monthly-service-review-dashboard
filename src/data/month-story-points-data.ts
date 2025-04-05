
import { StoryPointsOverview } from "@/types/dashboard";

// Monthly Story Points Overview Data
export const monthStoryPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 101,
    sprintNumber: 0,
    startDate: "2025-01-27",
    endDate: "2025-01-31",
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 59,
    leftoverSTP: 0,
    sprintVelocityPercentage: 105,
    velocityVsTarget: 0.83,
    monthId: "jan",
    monthName: "January",
    totalSprints: 1,
  },
  {
    sprintId: 102,
    sprintNumber: 0,
    startDate: "2025-02-03",
    endDate: "2025-02-04",
    estimatedSTP: 0,
    extraSTP: 0,
    deliveredSTP: 0,
    leftoverSTP: 0,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0,
    monthId: "feb_s1",
    monthName: "February S1",
    totalSprints: 0,
  },
  {
    sprintId: 103,
    sprintNumber: 0,
    startDate: "2025-02-05",
    endDate: "2025-02-28",
    estimatedSTP: 220,
    extraSTP: 119,
    deliveredSTP: 316,
    leftoverSTP: 21,
    sprintVelocityPercentage: 144,
    velocityVsTarget: 1.86,
    monthId: "feb",
    monthName: "February",
    totalSprints: 4,
  },
  {
    sprintId: 104,
    sprintNumber: 0,
    startDate: "2025-03-03",
    endDate: "2025-04-01",
    estimatedSTP: 122,
    extraSTP: 56,
    deliveredSTP: 153,
    leftoverSTP: 25,
    sprintVelocityPercentage: 125,
    velocityVsTarget: 0.76,
    monthId: "mar",
    monthName: "March",
    totalSprints: 2,
  }
];

// Helper function to get all months story points data
export const getAllMonthsStoryPointsOverview = (): StoryPointsOverview => {
  // Calculate totals excluding Feb S1 (which has no data)
  const dataExcludingEmptyFebS1 = monthStoryPointsOverviewData.filter(month => month.monthId !== "feb_s1");
  
  // Per user request, use specific values for All Months (Excluding S1)
  return {
    sprintId: 201,
    sprintNumber: 0,
    startDate: "2025-02-05", // Updated as requested
    endDate: dataExcludingEmptyFebS1[dataExcludingEmptyFebS1.length - 1].endDate,
    estimatedSTP: 342, // Updated as requested
    extraSTP: 175, // Updated as requested
    deliveredSTP: 469, // Updated as requested 
    leftoverSTP: dataExcludingEmptyFebS1.reduce((sum, item) => sum + item.leftoverSTP, 0),
    sprintVelocityPercentage: 137, // Fixed value as per requirement
    velocityVsTarget: 1.27, // Fixed value as per requirement
    monthId: "total",
    monthName: "All Months (Excluding S1)",
    totalSprints: 6, // Updated as requested
  };
};

// Helper function to get grand total including all data
export const getGrandTotalStoryPointsOverview = (): StoryPointsOverview => {
  const firstMonth = monthStoryPointsOverviewData[0];
  const lastMonth = monthStoryPointsOverviewData[monthStoryPointsOverviewData.length - 1];
  
  const totalEstimatedSTP = monthStoryPointsOverviewData.reduce((sum, item) => sum + item.estimatedSTP, 0);
  const totalExtraSTP = monthStoryPointsOverviewData.reduce((sum, item) => sum + item.extraSTP, 0);
  const totalDeliveredSTP = monthStoryPointsOverviewData.reduce((sum, item) => sum + item.deliveredSTP, 0);
  const totalLeftoverSTP = monthStoryPointsOverviewData.reduce((sum, item) => sum + item.leftoverSTP, 0);
  const totalSprints = monthStoryPointsOverviewData.reduce((sum, item) => sum + (item.totalSprints || 0), 0);
  
  // Use the required fixed values instead of calculating
  const sprintVelocityPercentage = 133; // Fixed value as per requirement
  const velocityVsTarget = 1.19; // Fixed value as per requirement

  return {
    sprintId: 202,
    sprintNumber: 0,
    startDate: firstMonth.startDate,
    endDate: lastMonth.endDate,
    estimatedSTP: totalEstimatedSTP,
    extraSTP: totalExtraSTP,
    deliveredSTP: totalDeliveredSTP,
    leftoverSTP: totalLeftoverSTP,
    sprintVelocityPercentage: sprintVelocityPercentage,
    velocityVsTarget: velocityVsTarget,
    monthId: "grand_total",
    monthName: "All Months",
    totalSprints: totalSprints,
  };
};

// Helper function to get monthly story points data by month ID
export const getMonthStoryPointsOverview = (monthId: string): StoryPointsOverview => {
  return (
    monthStoryPointsOverviewData.find((item) => item.monthId === monthId) ||
    getGrandTotalStoryPointsOverview()
  );
};
