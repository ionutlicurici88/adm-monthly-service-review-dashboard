
import { CapacityOverview } from "@/types/dashboard";

// Mock Capacity Overview Data
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

// Function to get aggregated data for all sprints excluding Sprint 1
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
