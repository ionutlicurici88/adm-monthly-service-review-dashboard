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
 * Generate monthly task overview for all months excluding specific S1 periods
 */
export const generateAllMonthsTaskOverview = (monthData: TaskOverview[]): TaskOverview => {
  // Filter out S1 data based on the new monthId "jan_feb_s1"
  const regularMonths = monthData.filter(
    month => month.monthId !== "jan_feb_s1" 
  );
  
  // Handle cases where regularMonths might be empty after filtering
  if (regularMonths.length === 0) {
    // Return a default or empty overview if no regular months are found
    // This prevents errors if all data is S1 data or monthData is empty
    return {
      sprintId: -10,
      sprintNumber: -10,
      monthId: "total",
      monthName: "All Months",
      startDate: new Date().toISOString().split('T')[0], // Placeholder
      endDate: new Date().toISOString().split('T')[0],   // Placeholder
      totalSprints: 0,
      sprintLengthInDays: 0,
      plannedTasks: 0,
      unplannedTasks: 0,
      deliveredTasks: 0,
      leftoverTasks: 0,
      completionPercentage: 0,
    };
  }
  
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
    monthName: "All Months", // This title is used in TaskOverview.tsx
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

  // Handle cases where monthData might be empty
  if (allMonths.length === 0) {
    return {
      sprintId: -11,
      sprintNumber: -11,
      monthId: "grand_total",
      monthName: "Grand Total",
      startDate: new Date().toISOString().split('T')[0], // Placeholder
      endDate: new Date().toISOString().split('T')[0],   // Placeholder
      totalSprints: 0,
      sprintLengthInDays: 0,
      plannedTasks: 0,
      unplannedTasks: 0,
      deliveredTasks: 0,
      leftoverTasks: 0,
      completionPercentage: 0,
    };
  }
  
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
    monthName: "Grand Total", // This title is used in TaskOverview.tsx
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
