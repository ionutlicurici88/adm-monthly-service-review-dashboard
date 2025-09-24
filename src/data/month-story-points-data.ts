import { StoryPointsOverview } from "@/types/dashboard";
import { 
  generateAllMonthsStoryPointsOverview,
  generateGrandTotalStoryPointsOverview
} from "./generators/story-points-data-generator";

// Monthly Story Points Overview Data - Updated based on user's provided table
export const monthStoryPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 101, // Unique ID for Jan & Feb S1
    sprintNumber: 0,
    startDate: "2025-01-27",
    endDate: "2025-01-31",
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 56,
    leftoverSTP: 3,
    sprintVelocityPercentage: 100,
    velocityVsTarget: 0.78, // 78%
    monthId: "jan_feb_s1",
    monthName: "Jan & Feb S1",
    totalSprints: 1,
  },
  {
    sprintId: 102, // Unique ID for February
    sprintNumber: 0,
    startDate: "2025-02-05",
    endDate: "2025-02-28",
    estimatedSTP: 220,
    extraSTP: 121,
    deliveredSTP: 333,
    leftoverSTP: 8,
    sprintVelocityPercentage: 151,
    velocityVsTarget: 1.96, // 196%
    monthId: "feb",
    monthName: "February",
    totalSprints: 4,
  },
  {
    sprintId: 103, // Unique ID for March
    sprintNumber: 0,
    startDate: "2025-03-03",
    endDate: "2025-04-01",
    estimatedSTP: 122,
    extraSTP: 56,
    deliveredSTP: 176,
    leftoverSTP: 2,
    sprintVelocityPercentage: 144,
    velocityVsTarget: 0.88, // 88%
    monthId: "mar",
    monthName: "March",
    totalSprints: 2,
  },
  {
    sprintId: 104, // Unique ID for April
    sprintNumber: 0,
    startDate: "2025-04-02",
    endDate: "2025-04-29",
    estimatedSTP: 17,
    extraSTP: 66,
    deliveredSTP: 70,
    leftoverSTP: 13,
    sprintVelocityPercentage: 412,
    velocityVsTarget: 0.40, // 40%
    monthId: "apr",
    monthName: "April",
    totalSprints: 2,
  },
  {
    sprintId: 105, // Unique ID for May
    sprintNumber: 0,
    startDate: "2025-04-30",
    endDate: "2025-05-27",
    estimatedSTP: 0,
    extraSTP: 120,
    deliveredSTP: 94,
    leftoverSTP: 26,
    sprintVelocityPercentage: 0, // 0% since no estimated STP
    velocityVsTarget: 0.52, // 52%
    monthId: "may",
    monthName: "May",
    totalSprints: 2,
  },
  {
    sprintId: 106,
    sprintNumber: 0,
    startDate: "2025-05-28",
    endDate: "2025-06-24",
    estimatedSTP: 60,
    extraSTP: 169,
    deliveredSTP: 181,
    leftoverSTP: 48,
    sprintVelocityPercentage: 302,
    velocityVsTarget: 0.92, // 92%
    monthId: "june",
    monthName: "June",
    totalSprints: 2,
  },
  {
    sprintId: 107,
    sprintNumber: 0,
    startDate: "2025-06-25",
    endDate: "2025-07-22",
    estimatedSTP: 21,
    extraSTP: 144,
    deliveredSTP: 160,
    leftoverSTP: 5,
    sprintVelocityPercentage: 762,
    velocityVsTarget: 0.66, // 66%
    monthId: "july",
    monthName: "July",
    totalSprints: 2,
  },
  {
    sprintId: 108,
    sprintNumber: 0,
    startDate: "2025-07-23",
    endDate: "2025-09-02",
    estimatedSTP: 0,
    extraSTP: 236,
    deliveredSTP: 224,
    leftoverSTP: 12,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 1.19, // 119%
    monthId: "aug",
    monthName: "August",
    totalSprints: 3,
  },
  {
    sprintId: 109,
    sprintNumber: 0,
    startDate: "2025-09-03",
    endDate: "2025-09-16",
    estimatedSTP: 0,
    extraSTP: 46,
    deliveredSTP: 32,
    leftoverSTP: 14,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0.12, // 12%
    monthId: "sep",
    monthName: "September",
    totalSprints: 1,
  }
];

// Helper function to get all months story points data (Excluding S1)
// This function in the generator provides hardcoded values.
// Its behavior regarding exclusion logic is self-contained in the generator.
export const getAllMonthsStoryPointsOverview = (): StoryPointsOverview => {
  return generateAllMonthsStoryPointsOverview(); // Generator uses its own logic/data
};

// Helper function to get grand total including all data
// This will now use the updated monthStoryPointsOverviewData for its sum calculations.
// Hardcoded percentages in the generator will remain.
export const getGrandTotalStoryPointsOverview = (): StoryPointsOverview => {
  return generateGrandTotalStoryPointsOverview(monthStoryPointsOverviewData);
};

// Helper function to get monthly story points data by month ID
export const getMonthStoryPointsOverview = (monthId: string): StoryPointsOverview => {
  return (
    monthStoryPointsOverviewData.find((item) => item.monthId === monthId) ||
    getGrandTotalStoryPointsOverview() // Fallback if month not found
  );
};