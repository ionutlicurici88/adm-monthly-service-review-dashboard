import { MonthCapacityOverview } from "@/types/dashboard";
import { 
  generateAllMonthsCapacityOverview,
  generateGrandTotalCapacityOverview 
} from "./generators/capacity-data-generator";

// Month Capacity Overview Data
export const monthCapacityOverviewData: MonthCapacityOverview[] = [
  {
    monthId: "jan_s1",
    monthName: "January S1",
    workingDaysAvailable: 5,
    availableCapacity: 40,
    contractedCapacity: 0,
    plannedHoliday: 1,
    plannedCapacity: 39,
    unplannedHoliday: 0,
    deliveredCapacity: 39,
    capacityPercentage: 100,
  },
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
  }
];

// Calculate total for all months
export const getAllMonthsCapacityOverview = (): MonthCapacityOverview => {
  return generateAllMonthsCapacityOverview(monthCapacityOverviewData);
};

// Calculate grand total (including Jan S1 and Feb S1)
export const getGrandTotalCapacityOverview = (): MonthCapacityOverview => {
  return generateGrandTotalCapacityOverview();
};

// Get all months excluding Jan S1 and Feb S1
export const getMonthsExcludingS1CapacityOverview = (): MonthCapacityOverview[] => {
  return monthCapacityOverviewData.filter(
    item => item.monthId !== "jan_s1" && item.monthId !== "feb_s1"
  );
};
