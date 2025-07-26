
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
    capacityPercentage: 99, // Corrected based on 68/69
  },
  { // New Sprint 8 Data
    sprintId: 8,
    sprintNumber: 8,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 0,
    plannedCapacity: 80,
    unplannedHoliday: 0,
    deliveredCapacity: 80,
    capacityPercentage: 100,
  },
  { // New Sprint 9 Data
    sprintId: 9,
    sprintNumber: 9,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 27,
    plannedCapacity: 53,
    unplannedHoliday: 0,
    deliveredCapacity: 53,
    capacityPercentage: 100, // 53/53 = 100%
  },
  { // New Sprint 10 Data
    sprintId: 10,
    sprintNumber: 10,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 18,
    plannedCapacity: 62,
    unplannedHoliday: 0,
    deliveredCapacity: 62,
    capacityPercentage: 100,
  },
  { // Sprint 11 Data
    sprintId: 11,
    sprintNumber: 11,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 10,
    plannedCapacity: 70,
    unplannedHoliday: 0,
    deliveredCapacity: 70,
    capacityPercentage: 100,
  },
  { // New Sprint 12 Data
    sprintId: 12,
    sprintNumber: 12,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 2,
    plannedCapacity: 78,
    unplannedHoliday: 0,
    deliveredCapacity: 78,
    capacityPercentage: 100,
  },
  { // New Sprint 13 Data
    sprintId: 13,
    sprintNumber: 13,
    workingDaysAvailable: 10,
    availableCapacity: 80,
    plannedHoliday: 7,
    plannedCapacity: 73,
    unplannedHoliday: 0,
    deliveredCapacity: 73,
    capacityPercentage: 100,
  },
  { // New Sprint 14 Data
    sprintId: 14,
    sprintNumber: 14,
    workingDaysAvailable: 10,
    availableCapacity: 90,
    plannedHoliday: 1,
    plannedCapacity: 89,
    unplannedHoliday: 0,
    deliveredCapacity: 89,
    capacityPercentage: 100,
  },
  { // New Sprint 15 Data
    sprintId: 15,
    sprintNumber: 15,
    workingDaysAvailable: 10,
    availableCapacity: 90,
    plannedHoliday: 19,
    plannedCapacity: 71,
    unplannedHoliday: 0,
    deliveredCapacity: 71,
    capacityPercentage: 100,
  },
  { // New Sprint 16 Data
    sprintId: 16,
    sprintNumber: 16,
    workingDaysAvailable: 10,
    availableCapacity: 90,
    plannedHoliday: 9,
    plannedCapacity: 81,
    unplannedHoliday: 0,
    deliveredCapacity: 81,
    capacityPercentage: 100,
  }
];

// Helper function to get aggregated data for all sprints
export const getAllSprintsCapacityOverview = (): CapacityOverview => {
  return generateAllSprintsCapacityOverview(capacityOverviewData);
};

// Function to get aggregated data for all sprints excluding Sprint 1
export const getAllSprintsExcludeFirstCapacityOverview = (): CapacityOverview => {
  // Now pass the data to the generator function for dynamic calculation
  return generateAllSprintsExcludeFirstCapacityOverview(capacityOverviewData);
};
