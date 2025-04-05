
import { TaskOverview } from "@/types/dashboard";
import { sumProperty, calculatePercentage } from "@/utils/data-utils";

/**
 * Generate aggregated task data for all sprints
 */
export const generateAllSprintsTaskOverview = (taskData: TaskOverview[]): TaskOverview => {
  const firstSprint = taskData[0];
  const lastSprint = taskData[taskData.length - 1];
  
  const totalPlannedTasks = sumProperty(taskData, 'plannedTasks');
  const totalUnplannedTasks = sumProperty(taskData, 'unplannedTasks');
  const totalDeliveredTasks = sumProperty(taskData, 'deliveredTasks');
  const totalLeftoverTasks = sumProperty(taskData, 'leftoverTasks');
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = calculatePercentage(totalDeliveredTasks, totalPlannedTasks);

  // Calculate total sprint length in days across all sprints
  const totalSprintLength = sumProperty(taskData, 'sprintLengthInDays');

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

/**
 * Generate aggregated task data excluding the first sprint
 */
export const generateAllSprintsExcludeFirstTaskOverview = (taskData: TaskOverview[]): TaskOverview => {
  const dataExcludingSprint1 = taskData.filter(item => item.sprintNumber !== 1);
  
  const firstSprint = dataExcludingSprint1[0];
  const lastSprint = dataExcludingSprint1[dataExcludingSprint1.length - 1];
  
  const totalPlannedTasks = sumProperty(dataExcludingSprint1, 'plannedTasks');
  const totalUnplannedTasks = sumProperty(dataExcludingSprint1, 'unplannedTasks');
  const totalDeliveredTasks = sumProperty(dataExcludingSprint1, 'deliveredTasks');
  const totalLeftoverTasks = sumProperty(dataExcludingSprint1, 'leftoverTasks');
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = calculatePercentage(totalDeliveredTasks, totalPlannedTasks);

  // Calculate total sprint length in days excluding sprint 1
  const totalSprintLength = sumProperty(dataExcludingSprint1, 'sprintLengthInDays');

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

/**
 * Generate monthly task overview for all months excluding specific periods
 */
export const generateAllMonthsTaskOverview = (monthData: TaskOverview[]): TaskOverview => {
  const regularMonths = monthData.filter(
    month => month.monthId !== "jan_s1" && month.monthId !== "feb_s1"
  );
  
  const firstMonth = regularMonths[0];
  const lastMonth = regularMonths[regularMonths.length - 1];
  
  const totalPlannedTasks = sumProperty(regularMonths, 'plannedTasks');
  const totalUnplannedTasks = sumProperty(regularMonths, 'unplannedTasks');
  const totalDeliveredTasks = sumProperty(regularMonths, 'deliveredTasks');
  const totalLeftoverTasks = sumProperty(regularMonths, 'leftoverTasks');
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = calculatePercentage(totalDeliveredTasks, totalPlannedTasks);

  // Calculate total length in days
  const totalLength = sumProperty(regularMonths, 'sprintLengthInDays');
  
  // Calculate total sprints
  const totalSprints = sumProperty(regularMonths, 'totalSprints');

  return {
    sprintId: -10,
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

/**
 * Generate grand total task overview including all monthly data
 */
export const generateGrandTotalTaskOverview = (monthData: TaskOverview[]): TaskOverview => {
  const allMonths = monthData;
  
  const firstMonth = allMonths[0];
  const lastMonth = allMonths[allMonths.length - 1];
  
  const totalPlannedTasks = sumProperty(allMonths, 'plannedTasks');
  const totalUnplannedTasks = sumProperty(allMonths, 'unplannedTasks');
  const totalDeliveredTasks = sumProperty(allMonths, 'deliveredTasks');
  const totalLeftoverTasks = sumProperty(allMonths, 'leftoverTasks');
  
  // Calculate aggregate completion percentage
  const avgCompletionPercentage = calculatePercentage(totalDeliveredTasks, totalPlannedTasks);

  // Calculate total length in days
  const totalLength = sumProperty(allMonths, 'sprintLengthInDays');
  
  // Calculate total sprints
  const totalSprints = sumProperty(allMonths, 'totalSprints');

  return {
    sprintId: -11,
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
