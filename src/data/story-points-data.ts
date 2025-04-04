
import { StoryPointsOverview } from "@/types/dashboard";

// Mock Story Points Overview Data
export const storyPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    startDate: "2025-01-01",
    endDate: "2025-01-14",
    estimatedSTP: 40,
    extraSTP: 10,
    deliveredSTP: 35,
    leftoverSTP: 15,
    sprintVelocityPercentage: 88,
    velocityVsTarget: 0.95,
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    startDate: "2025-01-15",
    endDate: "2025-01-28",
    estimatedSTP: 45,
    extraSTP: 5,
    deliveredSTP: 42,
    leftoverSTP: 8,
    sprintVelocityPercentage: 93,
    velocityVsTarget: 1.05,
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    startDate: "2025-01-29",
    endDate: "2025-02-11",
    estimatedSTP: 38,
    extraSTP: 12,
    deliveredSTP: 37,
    leftoverSTP: 13,
    sprintVelocityPercentage: 97,
    velocityVsTarget: 0.98,
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    startDate: "2025-02-12",
    endDate: "2025-02-25",
    estimatedSTP: 50,
    extraSTP: 4,
    deliveredSTP: 48,
    leftoverSTP: 6,
    sprintVelocityPercentage: 96,
    velocityVsTarget: 1.1,
  }
];

// Helper function to get aggregated data for all sprints
export const getAllSprintsStoryPointsOverview = (): StoryPointsOverview => {
  const firstSprint = storyPointsOverviewData[0];
  const lastSprint = storyPointsOverviewData[storyPointsOverviewData.length - 1];
  
  const totalEstimatedSTP = storyPointsOverviewData.reduce((sum, item) => sum + item.estimatedSTP, 0);
  const totalExtraSTP = storyPointsOverviewData.reduce((sum, item) => sum + item.extraSTP, 0);
  const totalDeliveredSTP = storyPointsOverviewData.reduce((sum, item) => sum + item.deliveredSTP, 0);
  const totalLeftoverSTP = storyPointsOverviewData.reduce((sum, item) => sum + item.leftoverSTP, 0);
  
  // Calculate aggregate velocity percentage
  const avgVelocityPercentage = totalEstimatedSTP > 0
    ? Math.round((totalDeliveredSTP / totalEstimatedSTP) * 100)
    : 0;

  // Calculate average velocity vs target
  const avgVelocityVsTarget = storyPointsOverviewData.reduce((sum, item) => sum + item.velocityVsTarget, 0) / storyPointsOverviewData.length;

  return {
    sprintId: 0,
    sprintNumber: 0, // 0 represents all sprints
    startDate: firstSprint.startDate,
    endDate: lastSprint.endDate,
    estimatedSTP: totalEstimatedSTP,
    extraSTP: totalExtraSTP,
    deliveredSTP: totalDeliveredSTP,
    leftoverSTP: totalLeftoverSTP,
    sprintVelocityPercentage: avgVelocityPercentage,
    velocityVsTarget: parseFloat(avgVelocityVsTarget.toFixed(2)),
  };
};
