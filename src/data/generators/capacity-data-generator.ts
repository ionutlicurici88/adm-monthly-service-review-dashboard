import { CapacityOverview, MonthCapacityOverview } from "@/types/dashboard";
import { sumProperty, calculatePercentage } from "@/utils/data-utils";

/**
 * Generate aggregated capacity data for all sprints
 */
export const generateAllSprintsCapacityOverview = (capacityData: CapacityOverview[]): CapacityOverview => {
  const totalWorkingDays = sumProperty(capacityData, 'workingDaysAvailable');
  const totalAvailableCapacity = sumProperty(capacityData, 'availableCapacity');
  const totalPlannedHoliday = sumProperty(capacityData, 'plannedHoliday');
  const totalPlannedCapacity = sumProperty(capacityData, 'plannedCapacity');
  const totalUnplannedHoliday = sumProperty(capacityData, 'unplannedHoliday');
  const totalDeliveredCapacity = sumProperty(capacityData, 'deliveredCapacity');
  
  const avgCapacityPercentage = calculatePercentage(totalDeliveredCapacity, totalPlannedCapacity);

  return {
    sprintId: 0,
    sprintNumber: 0, 
    workingDaysAvailable: totalWorkingDays,
    availableCapacity: totalAvailableCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};

/**
 * Generate aggregated capacity data excluding the first sprint
 */
export const generateAllSprintsExcludeFirstCapacityOverview = (capacityData: CapacityOverview[]): CapacityOverview => {
  const filteredData = capacityData.filter(sprint => sprint.sprintNumber !== 1 && sprint.sprintNumber > 0); // Exclude sprint 1 and any aggregate rows

  const totalWorkingDays = sumProperty(filteredData, 'workingDaysAvailable');
  const totalAvailableCapacity = sumProperty(filteredData, 'availableCapacity');
  const totalPlannedHoliday = sumProperty(filteredData, 'plannedHoliday');
  const totalPlannedCapacity = sumProperty(filteredData, 'plannedCapacity');
  const totalUnplannedHoliday = sumProperty(filteredData, 'unplannedHoliday');
  const totalDeliveredCapacity = sumProperty(filteredData, 'deliveredCapacity');
  
  const avgCapacityPercentage = calculatePercentage(totalDeliveredCapacity, totalPlannedCapacity);

  return {
    sprintId: -1, // Identifier for "All Sprints Excluding Sprint 1"
    sprintNumber: -1, // Identifier for "All Sprints Excluding Sprint 1"
    workingDaysAvailable: totalWorkingDays,
    availableCapacity: totalAvailableCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};

/**
 * Generate aggregated month capacity data
 */
export const generateAllMonthsCapacityOverview = (monthData: MonthCapacityOverview[]): MonthCapacityOverview => {
  // Filter out the special periods
  const regularMonths = monthData.filter(
    item => item.monthId !== "jan_s1" && item.monthId !== "feb_s1"
  );
  
  return {
    monthId: "total",
    monthName: "Total",
    workingDaysAvailable: 39,
    availableCapacity: 312,
    contractedCapacity: 304,
    plannedHoliday: 24,
    plannedCapacity: 288,
    unplannedHoliday: 3,
    deliveredCapacity: 285,
    capacityPercentage: 99,
  };
};

/**
 * Generate grand total month capacity data
 */
export const generateGrandTotalCapacityOverview = (): MonthCapacityOverview => {
  return {
    monthId: "grand_total",
    monthName: "GT",
    workingDaysAvailable: 46,
    availableCapacity: 368,
    contractedCapacity: 304,
    plannedHoliday: 25,
    plannedCapacity: 343,
    unplannedHoliday: 3,
    deliveredCapacity: 340,
    capacityPercentage: 99,
  };
};
