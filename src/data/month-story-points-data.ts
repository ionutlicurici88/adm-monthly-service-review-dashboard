
import { StoryPointsOverview } from "@/types/dashboard";
import { 
  generateAllMonthsStoryPointsOverview,
  generateGrandTotalStoryPointsOverview
} from "./generators/story-points-data-generator";

// Monthly Story Points Overview Data
export const monthStoryPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 101, // Kept original sprintId for consistency
    sprintNumber: 0,
    startDate: "2025-01-27",
    endDate: "2025-01-31",
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 59,
    leftoverSTP: 0,
    sprintVelocityPercentage: 105,
    velocityVsTarget: 0.83, // 83%
    monthId: "jan",
    monthName: "January",
    totalSprints: 1,
  },
  {
    sprintId: 102, // Kept original sprintId
    sprintNumber: 0,
    startDate: "2025-02-03",
    endDate: "2025-02-04",
    estimatedSTP: 0,
    extraSTP: 0,
    deliveredSTP: 0,
    leftoverSTP: 0,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0, // 0%
    monthId: "feb_s1",
    monthName: "February S1",
    totalSprints: 0, // Assuming 0 as per empty data
  },
  {
    sprintId: 103, // Kept original sprintId
    sprintNumber: 0,
    startDate: "2025-02-05",
    endDate: "2025-02-28",
    estimatedSTP: 220,
    extraSTP: 124,
    deliveredSTP: 336,
    leftoverSTP: 8,
    sprintVelocityPercentage: 153, // (336 / 220) * 100, approximately
    velocityVsTarget: 1.97, // 197%
    monthId: "feb",
    monthName: "February",
    totalSprints: 4,
  },
  {
    sprintId: 104, // Kept original sprintId
    sprintNumber: 0,
    startDate: "2025-03-03",
    endDate: "2025-04-01",
    estimatedSTP: 122,
    extraSTP: 57,
    deliveredSTP: 175,
    leftoverSTP: 4,
    sprintVelocityPercentage: 143, // (175 / 122) * 100, approximately
    velocityVsTarget: 0.87, // 87%
    monthId: "mar",
    monthName: "March",
    totalSprints: 2,
  },
  {
    sprintId: 105, // New sprintId
    sprintNumber: 0,
    startDate: "2025-04-02",
    endDate: "2025-04-29",
    estimatedSTP: 17,
    extraSTP: 69,
    deliveredSTP: 68,
    leftoverSTP: 18,
    sprintVelocityPercentage: 400, // (68 / 17) * 100
    velocityVsTarget: 0.39, // 39%
    monthId: "apr",
    monthName: "April",
    totalSprints: 2,
  }
];

// Helper function to get all months story points data
export const getAllMonthsStoryPointsOverview = (): StoryPointsOverview => {
  // This function call will now use the updated monthStoryPointsOverviewData internally if needed by the generator
  return generateAllMonthsStoryPointsOverview(monthStoryPointsOverviewData);
};

// Helper function to get grand total including all data
export const getGrandTotalStoryPointsOverview = (): StoryPointsOverview => {
  return generateGrandTotalStoryPointsOverview(monthStoryPointsOverviewData);
};

// Helper function to get monthly story points data by month ID
export const getMonthStoryPointsOverview = (monthId: string): StoryPointsOverview => {
  const monthData = monthStoryPointsOverviewData.find((item) => item.monthId === monthId);
  if (monthData) {
    return monthData;
  }
  // Fallback to grand total if specific month not found
  console.warn(`Month with id "${monthId}" not found in monthStoryPointsOverviewData. Falling back to grand total.`);
  return getGrandTotalStoryPointsOverview();
};
