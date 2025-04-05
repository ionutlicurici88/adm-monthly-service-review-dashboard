import { CapacityOverview } from "@/types/dashboard";
import { 
  generateAllSprintsCapacityOverview,
  generateAllSprintsExcludeFirstCapacityOverview 
} from "./generators/capacity-data-generator";

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
  return generateAllSprintsCapacityOverview(capacityOverviewData);
};

// Function to get aggregated data for all sprints excluding Sprint 1
export const getAllSprintsExcludeFirstCapacityOverview = (): CapacityOverview => {
  return generateAllSprintsExcludeFirstCapacityOverview();
};
