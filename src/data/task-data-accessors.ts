
import { TaskOverview } from "@/types/dashboard";
import { 
  generateAllSprintsTaskOverview,
  generateAllSprintsExcludeFirstTaskOverview, 
  generateAllMonthsTaskOverview, 
  generateGrandTotalTaskOverview
} from "./generators/task-data-generator";
import { taskOverviewData } from "./sprint-task-data";
import { monthlyTaskOverviewData } from "./month-task-data";

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
  const monthData = monthlyTaskOverviewData.find((item) => item.monthId === monthId);
  if (monthData) {
    return monthData;
  }
  // If a specific month is requested but not found, it might be better to return a default
  // or throw an error, rather than grand total. For now, maintaining original behavior.
  // However, the original code returns grand total if month not found.
  console.warn(`Month with id "${monthId}" not found in monthlyTaskOverviewData. Falling back to grand total.`);
  return getGrandTotalTaskOverview();
};
