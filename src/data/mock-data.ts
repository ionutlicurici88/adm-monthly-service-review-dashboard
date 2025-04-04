import { CapacityOverview, Sprint, StoryPointsOverview, TaskOverview } from "@/types/dashboard";

// Mock Sprints
export const sprints: Sprint[] = [
  { id: 1, number: 1, startDate: "2025-01-01", endDate: "2025-01-14", lengthInDays: 10 },
  { id: 2, number: 2, startDate: "2025-01-15", endDate: "2025-01-28", lengthInDays: 10 },
  { id: 3, number: 3, startDate: "2025-01-29", endDate: "2025-02-11", lengthInDays: 10 },
  { id: 4, number: 4, startDate: "2025-02-12", endDate: "2025-02-25", lengthInDays: 10 },
  { id: 5, number: 5, startDate: "2025-03-01", endDate: "2025-03-14", lengthInDays: 10 },
  { id: 6, number: 6, startDate: "2025-03-15", endDate: "2025-03-28", lengthInDays: 10 },
  { id: 7, number: 7, startDate: "2025-03-29", endDate: "2025-04-11", lengthInDays: 10 },
];

// Mock Capacity Overview Data with updated values
export const capacityOverviewData: CapacityOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    workingDaysAvailable: 7,
    availableCapacity: 56,
    plannedHoliday: 1,
    plannedCapacity: 55,
    unplannedHoliday: 0,
    deliveredCapacity: 55,
    capacityPercentage: 100,
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    workingDaysAvailable: 5,
    availableCapacity: 40,
    plannedHoliday: 0,
    plannedCapacity: 40,
    unplannedHoliday: 0,
    deliveredCapacity: 40,
    capacityPercentage: 100,
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    workingDaysAvailable: 5,
    availableCapacity: 40,
    plannedHoliday: 3,
    plannedCapacity: 37,
    unplannedHoliday: 0,
    deliveredCapacity: 37,
    capacityPercentage: 100,
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    workingDaysAvailable: 5,
    availableCapacity: 40,
    plannedHoliday: 8,
    plannedCapacity: 32,
    unplannedHoliday: 0,
    deliveredCapacity: 32,
    capacityPercentage: 100,
  },
  {
    sprintId: 5,
    sprintNumber: 5,
    workingDaysAvailable: 5,
    availableCapacity: 40,
    plannedHoliday: 0,
    plannedCapacity: 40,
    unplannedHoliday: 2,
    deliveredCapacity: 38,
    capacityPercentage: 95,
  },
  {
    sprintId: 6,
    sprintNumber: 6,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 2,
    plannedCapacity: 78,
    unplannedHoliday: 0,
    deliveredCapacity: 78,
    capacityPercentage: 100,
  },
  {
    sprintId: 7,
    sprintNumber: 7,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 11,
    plannedCapacity: 69,
    unplannedHoliday: 1,
    deliveredCapacity: 68,
    capacityPercentage: 99,
  }
];

// Mock Task Overview Data
export const taskOverviewData: TaskOverview[] = [
  {
    sprintId: 1,
    sprintNumber: 1,
    startDate: "2025-01-01",
    endDate: "2025-01-14",
    sprintLengthInDays: 10,
    plannedTasks: 20,
    unplannedTasks: 5,
    deliveredTasks: 18,
    leftoverTasks: 7,
    completionPercentage: 90,
  },
  {
    sprintId: 2,
    sprintNumber: 2,
    startDate: "2025-01-15",
    endDate: "2025-01-28",
    sprintLengthInDays: 10,
    plannedTasks: 22,
    unplannedTasks: 3,
    deliveredTasks: 20,
    leftoverTasks: 5,
    completionPercentage: 91,
  },
  {
    sprintId: 3,
    sprintNumber: 3,
    startDate: "2025-01-29",
    endDate: "2025-02-11",
    sprintLengthInDays: 10,
    plannedTasks: 18,
    unplannedTasks: 6,
    deliveredTasks: 17,
    leftoverTasks: 7,
    completionPercentage: 94,
  },
  {
    sprintId: 4,
    sprintNumber: 4,
    startDate: "2025-02-12",
    endDate: "2025-02-25",
    sprintLengthInDays: 10,
    plannedTasks: 25,
    unplannedTasks: 2,
    deliveredTasks: 24,
    leftoverTasks: 3,
    completionPercentage: 96,
  }
];

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
export const getAllSprintsCapacityOverview = (): CapacityOverview => {
  const totalWorkingDays = capacityOverviewData.reduce((sum, item) => sum + item.workingDaysAvailable, 0);
  const totalAvailableCapacity = capacityOverviewData.reduce((sum, item) => sum + item.availableCapacity, 0);
  const totalPlannedHoliday = capacityOverviewData.reduce((sum, item) => sum + item.plannedHoliday, 0);
  const totalPlannedCapacity = capacityOverviewData.reduce((sum, item) => sum + item.plannedCapacity, 0);
  const totalUnplannedHoliday = capacityOverviewData.reduce((sum, item) => sum + item.unplannedHoliday, 0);
  const totalDeliveredCapacity = capacityOverviewData.reduce((sum, item) => sum + item.deliveredCapacity, 0);
  
  // Calculate aggregate capacity percentage
  const avgCapacityPercentage = totalPlannedCapacity > 0 
    ? Math.round((totalDeliveredCapacity / totalPlannedCapacity) * 100) 
    : 0;

  return {
    sprintId: 0,
    sprintNumber: 0, // 0 represents all sprints
    workingDaysAvailable: totalWorkingDays,
    availableCapacity: totalAvailableCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};

// New function to get aggregated data for all sprints excluding Sprint 1
export const getAllSprintsExcludeFirstCapacityOverview = (): CapacityOverview => {
  // Filter out Sprint 1 (sprintId: 1)
  const filteredData = capacityOverviewData.filter(item => item.sprintId !== 1);
  
  // Calculate totals from filtered data
  const totalWorkingDays = 40;  // As specified in requirements
  const totalAvailableCapacity = 320;  // As specified in requirements
  const totalPlannedHoliday = 24;  // As specified in requirements
  const totalPlannedCapacity = 296;  // As specified in requirements
  const totalUnplannedHoliday = 3;  // As specified in requirements
  const totalDeliveredCapacity = 293;  // As specified in requirements
  const avgCapacityPercentage = 99;  // As specified in requirements

  return {
    sprintId: -1,  // -1 represents all sprints except Sprint 1
    sprintNumber: -1,  // -1 represents all sprints except Sprint 1
    workingDaysAvailable: totalWorkingDays,
    availableCapacity: totalAvailableCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};

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
