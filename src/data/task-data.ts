import { TaskOverview } from "@/types/dashboard";
import { 
  generateAllSprintsTaskOverview,
  generateAllSprintsExcludeFirstTaskOverview, 
  generateAllMonthsTaskOverview, 
  generateGrandTotalTaskOverview
} from "./generators/task-data-generator";

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
    deliveredTasks: 18,
    leftoverTasks: 0,
    completionPercentage: 360,
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
    deliveredTasks: 58,
    leftoverTasks: 1,
    completionPercentage: 363,
  },
  {
    sprintId: 7,
    sprintNumber: 7,
    startDate: "2025-03-19",
    endDate: "2025-04-01",
    sprintLengthInDays: 10,
    plannedTasks: 5,
    unplannedTasks: 24,
    deliveredTasks: 26,
    leftoverTasks: 3,
    completionPercentage: 520,
  },
  {
    sprintId: 8,
    sprintNumber: 8,
    startDate: "2025-04-02",
    endDate: "2025-04-15",
    sprintLengthInDays: 10,
    plannedTasks: 13,
    unplannedTasks: 26,
    deliveredTasks: 37,
    leftoverTasks: 2,
    completionPercentage: 285,
  },
  {
    sprintId: 9,
    sprintNumber: 9,
    startDate: "2025-04-16",
    endDate: "2025-04-29",
    sprintLengthInDays: 10,
    plannedTasks: 0,
    unplannedTasks: 6,
    deliveredTasks: 4,
    leftoverTasks: 2,
    completionPercentage: 0,
  }
];

// Monthly Task Overview Data
export const monthlyTaskOverviewData: TaskOverview[] = [
  {
    sprintId: -2,
    sprintNumber: -2,
    monthId: "jan_s1",
    monthName: "January S1",
    startDate: "2025-01-27",
    endDate: "2025-01-31",
    totalSprints: 1,
    sprintLengthInDays: 5,
    plannedTasks: 54,
    unplannedTasks: 4,
    deliveredTasks: 58,
    leftoverTasks: 0,
    completionPercentage: 107,
  },
  {
    sprintId: -3,
    sprintNumber: -3,
    monthId: "feb_s1",
    monthName: "February S1",
    startDate: "2025-02-03",
    endDate: "2025-02-04",
    totalSprints: 0,
    sprintLengthInDays: 2,
    plannedTasks: 0,
    unplannedTasks: 0,
    deliveredTasks: 0,
    leftoverTasks: 0,
    completionPercentage: 0,
  },
  {
    sprintId: -4,
    sprintNumber: -4,
    monthId: "feb",
    monthName: "February",
    startDate: "2025-02-05",
    endDate: "2025-02-28",
    totalSprints: 4,
    sprintLengthInDays: 20,
    plannedTasks: 36,
    unplannedTasks: 42,
    deliveredTasks: 75,
    leftoverTasks: 3,
    completionPercentage: 208,
  },
  {
    sprintId: -5,
    sprintNumber: -5,
    monthId: "mar",
    monthName: "March",
    startDate: "2025-03-03",
    endDate: "2025-04-01",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 22,
    unplannedTasks: 68,
    deliveredTasks: 84,
    leftoverTasks: 6,
    completionPercentage: 382,
  }
];

// Helper function to get aggregated data for all sprints
export const getAllSprintsTaskOverview = (): TaskOverview => {
  return generateAllSprintsTaskOverview(taskOverviewData);
};

// Helper function to get aggregated data for all sprints excluding Sprint 1
export const getAllSprintsExcludeFirstTaskOverview = (): TaskOverview => {
  return generateAllSprintsExcludeFirstTaskOverview(taskOverviewData);
};

// Get All Months Task Overview (excluding Jan S1 and Feb S1)
export const getAllMonthsTaskOverview = (): TaskOverview => {
  return generateAllMonthsTaskOverview(monthlyTaskOverviewData);
};

// Get grand total including Jan S1 and Feb S1
export const getGrandTotalTaskOverview = (): TaskOverview => {
  return generateGrandTotalTaskOverview(monthlyTaskOverviewData);
};

// Get specific month data
export const getMonthTaskOverview = (monthId: string): TaskOverview => {
  return (
    monthlyTaskOverviewData.find((item) => item.monthId === monthId) ||
    getGrandTotalTaskOverview()
  );
};
