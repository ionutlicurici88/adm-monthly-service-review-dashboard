import { MonthCapacityOverview } from "@/types/dashboard";
import { 
  generateAllMonthsCapacityOverview,
  generateGrandTotalCapacityOverview 
} from "./generators/capacity-data-generator";

// TA (Team Allocation) Capacity Overview Data
export const taCapacityOverviewData: MonthCapacityOverview[] = [
  {
    monthId: "feb_3_21",
    monthName: "Feb (3 - 21)",
    workingDaysAvailable: 15,
    availableCapacity: 15,
    contractedCapacity: 0,
    plannedHoliday: 0,
    plannedCapacity: 15,
    unplannedHoliday: 0,
    deliveredCapacity: 15,
    capacityPercentage: 100,
  },
  {
    monthId: "feb_24_28",
    monthName: "Feb (24 - 28)",
    workingDaysAvailable: 5,
    availableCapacity: 5,
    contractedCapacity: 5,
    plannedHoliday: 0,
    plannedCapacity: 5,
    unplannedHoliday: 0,
    deliveredCapacity: 5,
    capacityPercentage: 100,
  },
  {
    monthId: "mar",
    monthName: "March",
    workingDaysAvailable: 21,
    availableCapacity: 21,
    contractedCapacity: 19,
    plannedHoliday: 5,
    plannedCapacity: 16,
    unplannedHoliday: 0,
    deliveredCapacity: 16,
    capacityPercentage: 100,
  },
  {
    monthId: "apr",
    monthName: "April",
    workingDaysAvailable: 20,
    availableCapacity: 20,
    contractedCapacity: 19,
    plannedHoliday: 2,
    plannedCapacity: 18,
    unplannedHoliday: 1,
    deliveredCapacity: 17,
    capacityPercentage: 94,
  },
  {
    monthId: "may",
    monthName: "May",
    workingDaysAvailable: 21,
    availableCapacity: 21,
    contractedCapacity: 19,
    plannedHoliday: 0,
    plannedCapacity: 21,
    unplannedHoliday: 1,
    deliveredCapacity: 20,
    capacityPercentage: 95,
  },
  {
    monthId: "june",
    monthName: "June",
    workingDaysAvailable: 20,
    availableCapacity: 20,
    contractedCapacity: 19,
    plannedHoliday: 10,
    plannedCapacity: 10,
    unplannedHoliday: 0,
    deliveredCapacity: 10,
    capacityPercentage: 100,
  },
  {
    monthId: "july",
    monthName: "July",
    workingDaysAvailable: 23,
    availableCapacity: 23,
    contractedCapacity: 19,
    plannedHoliday: 0,
    plannedCapacity: 23,
    unplannedHoliday: 0,
    deliveredCapacity: 23,
    capacityPercentage: 100,
  },
  {
    monthId: "aug",
    monthName: "August",
    workingDaysAvailable: 20,
    availableCapacity: 20,
    contractedCapacity: 19,
    plannedHoliday: 0,
    plannedCapacity: 20,
    unplannedHoliday: 0,
    deliveredCapacity: 20,
    capacityPercentage: 100,
  },
];

// Calculate total for TA data (excluding nothing - all months included in "Total")
export const getAllTACapacityOverview = (): MonthCapacityOverview => {
  // Custom calculation for TA Total
  return {
    monthId: "total",
    monthName: "Total",
    workingDaysAvailable: 130,
    availableCapacity: 130,
    contractedCapacity: 119,
    plannedHoliday: 17,
    plannedCapacity: 113,
    unplannedHoliday: 2,
    deliveredCapacity: 111,
    capacityPercentage: 98,
  };
};

// Calculate grand total for TA data (including all periods)
export const getGrandTotalTACapacityOverview = (): MonthCapacityOverview => {
  // Custom calculation for TA Grand Total 
  return {
    monthId: "grand_total",
    monthName: "Grand Total",
    workingDaysAvailable: 145,
    availableCapacity: 145,
    contractedCapacity: 119,
    plannedHoliday: 17,
    plannedCapacity: 128,
    unplannedHoliday: 2,
    deliveredCapacity: 126,
    capacityPercentage: 98,
  };
};

// Get specific TA month data
export const getTACapacityOverview = (monthId: string): MonthCapacityOverview => {
  if (monthId === "total") {
    return getAllTACapacityOverview();
  }
  if (monthId === "grand_total") {
    return getGrandTotalTACapacityOverview();
  }
  
  const monthData = taCapacityOverviewData.find((item) => item.monthId === monthId);
  if (monthData) {
    return monthData;
  }
  
  // Fallback to grand total if month not found
  return getGrandTotalTACapacityOverview();
};