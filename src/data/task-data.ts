
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

// Helper function to get aggregated data for all sprints excluding Sprint 1
export const getAllSprintsExcludeFirstTaskOverview = (): TaskOverview => {
  const dataExcludingSprint1 = taskOverviewData.filter(item => item.sprintNumber !== 1);
  
  const firstSprint = dataExcludingSprint1[0];
  const lastSprint = dataExcludingSprint1[dataExcludingSprint1.length - 1];
  
  const totalPlannedTasks = dataExcludingSprint1.reduce((sum, item) => sum + item.plannedTasks, 0);
  const totalUnplannedTasks = dataExcludingSprint1.reduce((sum, item) => sum + item.unplannedTasks, 0);
  const totalDeliveredTasks = dataExcludingSprint1.reduce((sum, item) => sum + item.deliveredTasks, 0);
  const totalLeftoverTasks = dataExcludingSprint1.reduce((sum, item) => sum + item.leftoverTasks, 0);
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = totalPlannedTasks > 0
    ? Math.round((totalDeliveredTasks / totalPlannedTasks) * 100)
    : 0;

  // Calculate total sprint length in days excluding sprint 1
  const totalSprintLength = dataExcludingSprint1.reduce((sum, item) => sum + item.sprintLengthInDays, 0);

  return {
    sprintId: -1, // -1 represents all sprints except sprint 1
    sprintNumber: -1,
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

// Monthly Task Overview Data
export const monthlyTaskOverviewData: TaskOverview[] = [
  {
    sprintId: -2, // Special ID for Jan S1
    sprintNumber: -2,
    monthId: "jan_s1",
    monthName: "Jan S1",
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
    sprintId: -3, // Special ID for Feb S1
    sprintNumber: -3,
    monthId: "feb_s1",
    monthName: "Feb S1",
    startDate: "2025-02-03",
    endDate: "2025-02-04",
    totalSprints: 0, // No completed sprints
    sprintLengthInDays: 2,
    plannedTasks: 0,
    unplannedTasks: 0,
    deliveredTasks: 0,
    leftoverTasks: 0,
    completionPercentage: 0,
  },
  {
    sprintId: -4, // Special ID for Feb
    sprintNumber: -4,
    monthId: "feb",
    monthName: "Feb",
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
    sprintId: -5, // Special ID for Mar
    sprintNumber: -5,
    monthId: "mar",
    monthName: "Mar",
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

// Get All Months Task Overview (excluding Jan S1 and Feb S1)
export const getAllMonthsTaskOverview = (): TaskOverview => {
  const regularMonths = monthlyTaskOverviewData.filter(
    month => month.monthId !== "jan_s1" && month.monthId !== "feb_s1"
  );
  
  const firstMonth = regularMonths[0];
  const lastMonth = regularMonths[regularMonths.length - 1];
  
  const totalPlannedTasks = regularMonths.reduce((sum, item) => sum + item.plannedTasks, 0);
  const totalUnplannedTasks = regularMonths.reduce((sum, item) => sum + item.unplannedTasks, 0);
  const totalDeliveredTasks = regularMonths.reduce((sum, item) => sum + item.deliveredTasks, 0);
  const totalLeftoverTasks = regularMonths.reduce((sum, item) => sum + item.leftoverTasks, 0);
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = totalPlannedTasks > 0
    ? Math.round((totalDeliveredTasks / totalPlannedTasks) * 100)
    : 0;

  // Calculate total length in days
  const totalLength = regularMonths.reduce((sum, item) => sum + item.sprintLengthInDays, 0);
  
  // Calculate total sprints
  const totalSprints = regularMonths.reduce((sum, item) => sum + (item.totalSprints || 0), 0);

  return {
    sprintId: -10, // Special ID for all regular months
    sprintNumber: -10,
    monthId: "total",
    monthName: "All Months",
    startDate: firstMonth.startDate,
    endDate: lastMonth.endDate,
    totalSprints: totalSprints,
    sprintLengthInDays: totalLength,
    plannedTasks: totalPlannedTasks,
    unplannedTasks: totalUnplannedTasks,
    deliveredTasks: totalDeliveredTasks,
    leftoverTasks: totalLeftoverTasks,
    completionPercentage: avgCompletionPercentage,
  };
};

// Get grand total including Jan S1 and Feb S1
export const getGrandTotalTaskOverview = (): TaskOverview => {
  const allMonths = monthlyTaskOverviewData;
  
  const firstMonth = allMonths[0]; // Jan S1
  const lastMonth = allMonths[allMonths.length - 1]; // Mar
  
  const totalPlannedTasks = allMonths.reduce((sum, item) => sum + item.plannedTasks, 0);
  const totalUnplannedTasks = allMonths.reduce((sum, item) => sum + item.unplannedTasks, 0);
  const totalDeliveredTasks = allMonths.reduce((sum, item) => sum + item.deliveredTasks, 0);
  const totalLeftoverTasks = allMonths.reduce((sum, item) => sum + item.leftoverTasks, 0);
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = totalPlannedTasks > 0
    ? Math.round((totalDeliveredTasks / totalPlannedTasks) * 100)
    : 0;

  // Calculate total length in days
  const totalLength = allMonths.reduce((sum, item) => sum + item.sprintLengthInDays, 0);
  
  // Calculate total sprints
  const totalSprints = allMonths.reduce((sum, item) => sum + (item.totalSprints || 0), 0);

  return {
    sprintId: -11, // Special ID for grand total
    sprintNumber: -11,
    monthId: "grand_total",
    monthName: "Grand Total",
    startDate: firstMonth.startDate,
    endDate: lastMonth.endDate,
    totalSprints: totalSprints,
    sprintLengthInDays: totalLength,
    plannedTasks: totalPlannedTasks,
    unplannedTasks: totalUnplannedTasks,
    deliveredTasks: totalDeliveredTasks,
    leftoverTasks: totalLeftoverTasks,
    completionPercentage: avgCompletionPercentage,
  };
};

// Get specific month data
export const getMonthTaskOverview = (monthId: string): TaskOverview => {
  return (
    monthlyTaskOverviewData.find((item) => item.monthId === monthId) ||
    getGrandTotalTaskOverview()
  );
};
