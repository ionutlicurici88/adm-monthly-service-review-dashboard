
import { MonthCapacityOverview } from "@/types/dashboard";
import { 
  generateAllMonthsCapacityOverview,
  generateGrandTotalCapacityOverview 
} from "./generators/capacity-data-generator";

// Month Capacity Overview Data
export const monthCapacityOverviewData: MonthCapacityOverview[] = [
  // { // Removed January S1 data
  //   monthId: "jan_s1",
  //   monthName: "January S1",
  //   workingDaysAvailable: 5,
  //   availableCapacity: 40,
  //   contractedCapacity: 0,
  //   plannedHoliday: 1,
  //   plannedCapacity: 39,
  //   unplannedHoliday: 0,
  //   deliveredCapacity: 39,
  //   capacityPercentage: 100,
  // },
  {
    monthId: "feb_s1",
    monthName: "February S1",
    workingDaysAvailable: 2,
    availableCapacity: 16,
    contractedCapacity: 0,
    plannedHoliday: 0,
    plannedCapacity: 16,
    unplannedHoliday: 0,
    deliveredCapacity: 16,
    capacityPercentage: 100,
  },
  {
    monthId: "feb",
    monthName: "February",
    workingDaysAvailable: 18,
    availableCapacity: 144,
    contractedCapacity: 152,
    plannedHoliday: 11,
    plannedCapacity: 133,
    unplannedHoliday: 2,
    deliveredCapacity: 131,
    capacityPercentage: 98,
  },
  {
    monthId: "mar",
    monthName: "March",
    workingDaysAvailable: 21,
    availableCapacity: 168,
    contractedCapacity: 152,
    plannedHoliday: 13,
    plannedCapacity: 155,
    unplannedHoliday: 1,
    deliveredCapacity: 154,
    capacityPercentage: 99,
  },
  // April data was part of a reverted commit, so it's not here.
  // If it needs to be re-added, that's a separate request.
];

// Calculate total for all months (excluding S1 data)
export const getAllMonthsCapacityOverview = (): MonthCapacityOverview => {
  // The generator function filters out S1 data based on monthId
  return generateAllMonthsCapacityOverview(monthCapacityOverviewData);
};

// Calculate grand total (including any remaining S1 data)
export const getGrandTotalCapacityOverview = (): MonthCapacityOverview => {
  // Pass the actual data to the generator function
  return generateGrandTotalCapacityOverview(monthCapacityOverviewData);
};

// Get all months excluding S1 data (e.g. feb_s1 if it remains)
export const getMonthsExcludingS1CapacityOverview = (): MonthCapacityOverview[] => {
  return monthCapacityOverviewData.filter(
    // Adjusted to filter any monthId ending with "_s1" or specific S1 ids if convention changes
    item => !item.monthId.endsWith("_s1") && item.monthId !== "jan_s1" && item.monthId !== "feb_s1"
  );
};

