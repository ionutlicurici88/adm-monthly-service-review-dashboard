
import { StoryPointsOverview } from "@/types/dashboard";

// Story Points Overview Data based on the provided table
export const storyPointsOverviewData: StoryPointsOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    startDate: "2025-01-01",
    endDate: "2025-01-14",
    estimatedSTP: 56,
    extraSTP: 3,
    deliveredSTP: 59,
    leftoverSTP: 0,
    sprintVelocityPercentage: 105,
    velocityVsTarget: 0.83,
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    startDate: "2025-01-15",
    endDate: "2025-01-28",
    estimatedSTP: 57,
    extraSTP: 33,
    deliveredSTP: 89,
    leftoverSTP: 0,
    sprintVelocityPercentage: 156,
    velocityVsTarget: 1.71,
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    startDate: "2025-01-29",
    endDate: "2025-02-11",
    estimatedSTP: 61,
    extraSTP: 25,
    deliveredSTP: 85,
    leftoverSTP: 0,
    sprintVelocityPercentage: 139,
    velocityVsTarget: 1.77,
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    startDate: "2025-02-12",
    endDate: "2025-02-25",
    estimatedSTP: 48,
    extraSTP: 34,
    deliveredSTP: 69,
    leftoverSTP: 13,
    sprintVelocityPercentage: 144,
    velocityVsTarget: 1.66,
  },
  {
    sprintId: 5,
    sprintNumber: 5,
    startDate: "2025-03-01",
    endDate: "2025-03-14",
    estimatedSTP: 54,
    extraSTP: 27,
    deliveredSTP: 73,
    leftoverSTP: 8,
    sprintVelocityPercentage: 135,
    velocityVsTarget: 1.48,
  },
  {
    sprintId: 6,
    sprintNumber: 6,
    startDate: "2025-03-15",
    endDate: "2025-03-28",
    estimatedSTP: 66,
    extraSTP: 36,
    deliveredSTP: 102,
    leftoverSTP: 0,
    sprintVelocityPercentage: 155,
    velocityVsTarget: 1.01,
  },
  {
    sprintId: 7,
    sprintNumber: 7,
    startDate: "2025-03-29",
    endDate: "2025-04-11",
    estimatedSTP: 56,
    extraSTP: 20,
    deliveredSTP: 51,
    leftoverSTP: 25,
    sprintVelocityPercentage: 91,
    velocityVsTarget: 0.58,
  },
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
