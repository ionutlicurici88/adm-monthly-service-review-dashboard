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
 * Generate aggregated month capacity data (excluding S1 periods)
 */
export const generateAllMonthsCapacityOverview = (monthData: MonthCapacityOverview[]): MonthCapacityOverview => {
  // Filter out S1 periods, specifically "jan_feb_s1"
  const regularMonths = monthData.filter(
    item => item.monthId !== "jan_feb_s1" 
  );
  
  const totalWorkingDaysAvailable = sumProperty(regularMonths, 'workingDaysAvailable');
  const totalAvailableCapacity = sumProperty(regularMonths, 'availableCapacity');
  const totalContractedCapacity = sumProperty(regularMonths, 'contractedCapacity');
  const totalPlannedHoliday = sumProperty(regularMonths, 'plannedHoliday');
  const totalPlannedCapacity = sumProperty(regularMonths, 'plannedCapacity');
  const totalUnplannedHoliday = sumProperty(regularMonths, 'unplannedHoliday');
  const totalDeliveredCapacity = sumProperty(regularMonths, 'deliveredCapacity');
  
  const avgCapacityPercentage = calculatePercentage(totalDeliveredCapacity, totalPlannedCapacity);

  return {
    monthId: "total",
    monthName: "Total (Excl. S1)", // Clarified name
    workingDaysAvailable: totalWorkingDaysAvailable,
    availableCapacity: totalAvailableCapacity,
    contractedCapacity: totalContractedCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};

/**
 * Generate grand total month capacity data (including all periods)
 */
export const generateGrandTotalCapacityOverview = (monthData: MonthCapacityOverview[]): MonthCapacityOverview => {
  const totalWorkingDaysAvailable = sumProperty(monthData, 'workingDaysAvailable');
  const totalAvailableCapacity = sumProperty(monthData, 'availableCapacity');
  const totalContractedCapacity = sumProperty(monthData, 'contractedCapacity');
  const totalPlannedHoliday = sumProperty(monthData, 'plannedHoliday');
  const totalPlannedCapacity = sumProperty(monthData, 'plannedCapacity');
  const totalUnplannedHoliday = sumProperty(monthData, 'unplannedHoliday');
  const totalDeliveredCapacity = sumProperty(monthData, 'deliveredCapacity');
  
  const avgCapacityPercentage = calculatePercentage(totalDeliveredCapacity, totalPlannedCapacity);
  
  return {
    monthId: "grand_total",
    monthName: "Grand Total", // Clarified name
    workingDaysAvailable: totalWorkingDaysAvailable,
    availableCapacity: totalAvailableCapacity,
    contractedCapacity: totalContractedCapacity,
    plannedHoliday: totalPlannedHoliday,
    plannedCapacity: totalPlannedCapacity,
    unplannedHoliday: totalUnplannedHoliday,
    deliveredCapacity: totalDeliveredCapacity,
    capacityPercentage: avgCapacityPercentage,
  };
};
