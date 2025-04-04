
import { TaskOverview } from "@/types/dashboard";

// Mock Task Overview Data
export const taskOverviewData: TaskOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    startDate: "2025-01-27",
    endDate: "2025-02-04",
    sprintLengthInDays: 7,
    plannedTasks: 54,
    unplannedTasks: 4,
    deliveredTasks: 58,
    leftoverTasks: 0,
    completionPercentage: 107,
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    startDate: "2025-02-05",
    endDate: "2025-02-11",
    sprintLengthInDays: 5,
    plannedTasks: 12,
    unplannedTasks: 7,
    deliveredTasks: 19,
    leftoverTasks: 0,
    completionPercentage: 158,
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    startDate: "2025-02-12",
    endDate: "2025-02-18",
    sprintLengthInDays: 5,
    plannedTasks: 9,
    unplannedTasks: 15,
    deliveredTasks: 24,
    leftoverTasks: 0,
    completionPercentage: 267,
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    startDate: "2025-02-19",
    endDate: "2025-02-25",
    sprintLengthInDays: 5,
    plannedTasks: 5,
    unplannedTasks: 13,
    deliveredTasks: 16,
    leftoverTasks: 2,
    completionPercentage: 320,
  },
  {
    sprintId: 5,
    sprintNumber: 5,
    startDate: "2025-02-26",
    endDate: "2025-03-04",
    sprintLengthInDays: 5,
    plannedTasks: 10,
    unplannedTasks: 7,
    deliveredTasks: 16,
    leftoverTasks: 1,
    completionPercentage: 160,
  },
  {
    sprintId: 6,
    sprintNumber: 6,
    startDate: "2025-03-05",
    endDate: "2025-03-18",
    sprintLengthInDays: 10,
    plannedTasks: 16,
    unplannedTasks: 43,
    deliveredTasks: 59,
    leftoverTasks: 0,
    completionPercentage: 369,
  },
  {
    sprintId: 7,
    sprintNumber: 7,
    startDate: "2025-03-19",
    endDate: "2025-04-01",
    sprintLengthInDays: 10,
    plannedTasks: 6,
    unplannedTasks: 25,
    deliveredTasks: 25,
    leftoverTasks: 6,
    completionPercentage: 417,
  }
];

// Helper function to get aggregated data for all sprints
export const getAllSprintsTaskOverview = (): TaskOverview => {
  const firstSprint = taskOverviewData[0];
  const lastSprint = taskOverviewData[taskOverviewData.length - 1];
  
  const totalPlannedTasks = taskOverviewData.reduce((sum, item) => sum + item.plannedTasks, 0);
  const totalUnplannedTasks = taskOverviewData.reduce((sum, item) => sum + item.unplannedTasks, 0);
  const totalDeliveredTasks = taskOverviewData.reduce((sum, item) => sum + item.deliveredTasks, 0);
  const totalLeftoverTasks = taskOverviewData.reduce((sum, item) => sum + item.leftoverTasks, 0);
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = totalPlannedTasks > 0
    ? Math.round((totalDeliveredTasks / totalPlannedTasks) * 100)
    : 0;

  // Calculate total sprint length in days across all sprints
  const totalSprintLength = taskOverviewData.reduce((sum, item) => sum + item.sprintLengthInDays, 0);

  return {
    sprintId: 0,
    sprintNumber: 0, // 0 represents all sprints
    startDate: firstSprint.startDate,
    endDate: lastSprint.endDate,
    sprintLengthInDays: totalSprintLength,
    plannedTasks: totalPlannedTasks,
    unplannedTasks: totalUnplannedTasks,
    deliveredTasks: totalDeliveredTasks,
    leftoverTasks: totalLeftoverTasks,
    completionPercentage: avgCompletionPercentage,
  };
};
