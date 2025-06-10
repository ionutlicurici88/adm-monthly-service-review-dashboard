
import { StoryPointsOverview } from "@/types/dashboard";
import { 
  generateAllSprintsStoryPointsOverview,
  generateAllSprintsExcludeFirstStoryPointsOverview 
} from "./generators/story-points-data-generator";

// Story Points Overview Data based on the provided table
export const storyPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    startDate: "2025-01-01", // Assuming this date remains, original data had it
    endDate: "2025-01-14",   // Assuming this date remains, original data had it
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 59,
    leftoverSTP: 0,
    sprintVelocityPercentage: 105,
    velocityVsTarget: 0.83, // 83%
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    startDate: "2025-01-15", // Assuming this date remains
    endDate: "2025-01-28",   // Assuming this date remains
    estimatedSTP: 57,
    extraSTP: 33,
    deliveredSTP: 90,
    leftoverSTP: 0,
    sprintVelocityPercentage: 158,
    velocityVsTarget: 1.73, // 173%
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    startDate: "2025-01-29", // Assuming this date remains
    endDate: "2025-02-11",   // Assuming this date remains
    estimatedSTP: 61,
    extraSTP: 30,
    deliveredSTP: 91, // Was 85 in previous context, user provided 91
    leftoverSTP: 0,
    sprintVelocityPercentage: 149, // Was 139, user provided 149
    velocityVsTarget: 1.89, // Was 1.77, user provided 189%
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    startDate: "2025-02-12", // Assuming this date remains
    endDate: "2025-02-25",   // Assuming this date remains
    estimatedSTP: 48,
    extraSTP: 34,
    deliveredSTP: 82, // Was 69, user provided 82
    leftoverSTP: 0,   // Was 13, user provided 0
    sprintVelocityPercentage: 171, // Was 144, user provided 171
    velocityVsTarget: 1.97, // Was 1.66, user provided 197%
  },
  {
    sprintId: 5,
    sprintNumber: 5,
    startDate: "2025-03-01", // Assuming this date remains
    endDate: "2025-03-14",   // Assuming this date remains
    estimatedSTP: 54,
    extraSTP: 27,
    deliveredSTP: 73,
    leftoverSTP: 8,
    sprintVelocityPercentage: 135,
    velocityVsTarget: 1.48, // 148%
  },
  {
    sprintId: 6,
    sprintNumber: 6,
    startDate: "2025-03-15", // Assuming this date remains
    endDate: "2025-03-28",   // Assuming this date remains
    estimatedSTP: 66,
    extraSTP: 36,
    deliveredSTP: 101, // Was 102, user provided 101
    leftoverSTP: 1,    // Was 0, user provided 1
    sprintVelocityPercentage: 153, // Was 155, user provided 153
    velocityVsTarget: 1.00, // Was 1.01, user provided 100%
  },
  {
    sprintId: 7,
    sprintNumber: 7,
    startDate: "2025-03-29", // Assuming this date remains
    endDate: "2025-04-11",   // Assuming this date remains
    estimatedSTP: 56,
    extraSTP: 21,
    deliveredSTP: 74, // Was 51, user provided 74
    leftoverSTP: 3,   // Was 25, user provided 3
    sprintVelocityPercentage: 132, // Was 91, user provided 132
    velocityVsTarget: 0.84, // Was 0.58, user provided 84%
  },
  { // Sprint 8 Data
    sprintId: 8,
    sprintNumber: 8,
    startDate: "2025-04-12", // From sprints.ts
    endDate: "2025-04-25",   // From sprints.ts
    estimatedSTP: 17,
    extraSTP: 57,
    deliveredSTP: 58,
    leftoverSTP: 16,
    sprintVelocityPercentage: 341,
    velocityVsTarget: 0.56, // 56%
  },
  { // Sprint 9 Data
    sprintId: 9,
    sprintNumber: 9,
    startDate: "2025-04-26", // From sprints.ts
    endDate: "2025-05-09",   // From sprints.ts
    estimatedSTP: 0,
    extraSTP: 12,
    deliveredSTP: 10,
    leftoverSTP: 2,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0.15, // 15%
  },
  { // New Sprint 10 Data
    sprintId: 10,
    sprintNumber: 10,
    startDate: "2025-04-30", // From user data
    endDate: "2025-05-13",   // From user data
    estimatedSTP: 0,
    extraSTP: 64,
    deliveredSTP: 43,
    leftoverSTP: 21,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0.53, // 53%
  },
  { // New Sprint 11 Data
    sprintId: 11,
    sprintNumber: 11,
    startDate: "2025-05-14", // From user data
    endDate: "2025-05-27",   // From user data
    estimatedSTP: 0,
    extraSTP: 63,
    deliveredSTP: 42,
    leftoverSTP: 21,
    sprintVelocityPercentage: 0,
    velocityVsTarget: 0.46, // 46%
  }
];

// Helper function to get aggregated data for all sprints
export const getAllSprintsStoryPointsOverview = (): StoryPointsOverview => {
  return generateAllSprintsStoryPointsOverview(storyPointsOverviewData);
};

// Helper function to get aggregated data excluding Sprint 1
export const getAllSprintsExcludeFirstStoryPointsOverview = (): StoryPointsOverview => {
  return generateAllSprintsExcludeFirstStoryPointsOverview(storyPointsOverviewData);
};
