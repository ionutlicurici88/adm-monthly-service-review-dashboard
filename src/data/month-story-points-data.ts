import { StoryPointsOverview } from "@/types/dashboard";
import { 
  generateAllMonthsStoryPointsOverview,
  generateGrandTotalStoryPointsOverview
} from "./generators/story-points-data-generator";

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
  return generateAllMonthsStoryPointsOverview();
};

// Helper function to get grand total including all data
export const getGrandTotalStoryPointsOverview = (): StoryPointsOverview => {
  return generateGrandTotalStoryPointsOverview(monthStoryPointsOverviewData);
};

// Helper function to get monthly story points data by month ID
export const getMonthStoryPointsOverview = (monthId: string): StoryPointsOverview => {
  return (
    monthStoryPointsOverviewData.find((item) => item.monthId === monthId) ||
    getGrandTotalStoryPointsOverview()
  );
};
