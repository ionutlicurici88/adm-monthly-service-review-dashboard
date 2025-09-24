import { MonthCapacityOverview } from "@/types/dashboard";
import { 
  generateAllMonthsCapacityOverview,
  generateGrandTotalCapacityOverview 
} from "./generators/capacity-data-generator";

// Month Capacity Overview Data
export const monthCapacityOverviewData: MonthCapacityOverview[] = [
  {
    monthId: "jan_s1",
    monthName: "Jan S1",
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
    monthName: "Feb S1",
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
  {
    monthId: "apr",
    monthName: "April",
    workingDaysAvailable: 20,
    availableCapacity: 160,
    contractedCapacity: 152,
    plannedHoliday: 27,
    plannedCapacity: 133,
    unplannedHoliday: 0,
    deliveredCapacity: 133,
    capacityPercentage: 100,
  },
  {
    monthId: "may",
    monthName: "May",
    workingDaysAvailable: 21,
    availableCapacity: 168,
    contractedCapacity: 152,
    plannedHoliday: 28,
    plannedCapacity: 140,
    unplannedHoliday: 0,
    deliveredCapacity: 140,
    capacityPercentage: 100,
  },
  {
    monthId: "june",
    monthName: "June",
    workingDaysAvailable: 20,
    availableCapacity: 160,
    contractedCapacity: 152,
    plannedHoliday: 9,
    plannedCapacity: 151,
    unplannedHoliday: 0,
    deliveredCapacity: 151,
    capacityPercentage: 100,
  },
  {
    monthId: "july",
    monthName: "July",
    workingDaysAvailable: 23,
    availableCapacity: 207,
    contractedCapacity: 171,
    plannedHoliday: 20,
    plannedCapacity: 187,
    unplannedHoliday: 0,
    deliveredCapacity: 187,
    capacityPercentage: 100,
  },
  {
    monthId: "aug",
    monthName: "August",
    workingDaysAvailable: 20,
    availableCapacity: 180,
    contractedCapacity: 171,
    plannedHoliday: 34,
    plannedCapacity: 146,
    unplannedHoliday: 1,
    deliveredCapacity: 145,
    capacityPercentage: 99,
  },
  {
    monthId: "sep",
    monthName: "September",
    workingDaysAvailable: 22,
    availableCapacity: 198,
    contractedCapacity: 171,
    plannedHoliday: 1,
    plannedCapacity: 197,
    unplannedHoliday: 0,
    deliveredCapacity: 197,
    capacityPercentage: 100,
  },
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

// Get all months excluding S1 data
export const getMonthsExcludingS1CapacityOverview = (): MonthCapacityOverview[] => {
  return monthCapacityOverviewData.filter(
    item => item.monthId !== "jan_s1" && item.monthId !== "feb_s1"
  );
};