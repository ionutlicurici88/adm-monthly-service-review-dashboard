
import { MonthCapacityOverview } from "@/types/dashboard";
import { 
  generateAllMonthsCapacityOverview,
  generateGrandTotalCapacityOverview 
} from "./generators/capacity-data-generator";

// Month Capacity Overview Data
// Updated based on the user's provided table including May
export const monthCapacityOverviewData: MonthCapacityOverview[] = [
  {
    monthId: "jan_feb_s1",
    monthName: "Jan & Feb S1",
    workingDaysAvailable: 7,
    availableCapacity: 56,
    contractedCapacity: 0,
    plannedHoliday: 1,
    plannedCapacity: 55,
    unplannedHoliday: 0,
    deliveredCapacity: 55,
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

// Get all months excluding S1 data (e.g. jan_feb_s1)
export const getMonthsExcludingS1CapacityOverview = (): MonthCapacityOverview[] => {
  return monthCapacityOverviewData.filter(
    // Adjusted to filter any monthId that is an S1 period
    item => item.monthId !== "jan_feb_s1" 
  );
};

