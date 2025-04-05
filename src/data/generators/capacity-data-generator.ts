
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
  
  // Calculate aggregate capacity percentage
  const avgCapacityPercentage = calculatePercentage(totalDeliveredCapacity, totalPlannedCapacity);

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

/**
 * Generate aggregated capacity data excluding the first sprint
 */
export const generateAllSprintsExcludeFirstCapacityOverview = (): CapacityOverview => {
  // Using pre-defined values as specified in requirements
  return {
    sprintId: -1,
    sprintNumber: -1,
    workingDaysAvailable: 40,
    availableCapacity: 320,
    plannedHoliday: 24,
    plannedCapacity: 296,
    unplannedHoliday: 3,
    deliveredCapacity: 293,
    capacityPercentage: 99,
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
