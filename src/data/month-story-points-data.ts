
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
    endDate: "2025-02-04",
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 59,
    leftoverSTP: 0,
    sprintVelocityPercentage: 105,
    velocityVsTarget: 0.83, // 83%
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
    extraSTP: 124,
    deliveredSTP: 336,
    leftoverSTP: 8,
    sprintVelocityPercentage: 153,
    velocityVsTarget: 1.97, // 197%
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
    extraSTP: 57,
    deliveredSTP: 175,
    leftoverSTP: 4,
    sprintVelocityPercentage: 143,
    velocityVsTarget: 0.87, // 87%
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
    extraSTP: 69,
    deliveredSTP: 68,
    leftoverSTP: 18,
    sprintVelocityPercentage: 400,
    velocityVsTarget: 0.39, // 39%
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
    extraSTP: 127,
    deliveredSTP: 85,
    leftoverSTP: 42,
    sprintVelocityPercentage: 0, // 0% since no estimated STP
    velocityVsTarget: 0.47, // 47%
    monthId: "may",
    monthName: "May",
    totalSprints: 2,
  },
  { // New June Data
    sprintId: 106,
    sprintNumber: 0,
    startDate: "2025-05-28",
    endDate: "2025-06-24",
    estimatedSTP: 60,
    extraSTP: 179,
    deliveredSTP: 148,
    leftoverSTP: 91,
    sprintVelocityPercentage: 247,
    velocityVsTarget: 0.74, // 74%
    monthId: "june",
    monthName: "June",
    totalSprints: 2,
  },
  { // New July Data
    sprintId: 107,
    sprintNumber: 0,
    startDate: "2025-06-25",
    endDate: "2025-07-22",
    estimatedSTP: 21,
    extraSTP: 153,
    deliveredSTP: 100,
    leftoverSTP: 74,
    sprintVelocityPercentage: 476,
    velocityVsTarget: 0.45, // 45%
    monthId: "july",
    monthName: "July",
    totalSprints: 2,
  },
  { // New August Data
    sprintId: 108,
    sprintNumber: 0,
    startDate: "2025-07-23",
    endDate: "2025-08-05",
    estimatedSTP: 0,
    extraSTP: 37,
    deliveredSTP: 8,
    leftoverSTP: 29,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0.08, // 8%
    monthId: "aug",
    monthName: "August",
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
