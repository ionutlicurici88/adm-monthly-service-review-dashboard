import { TaskOverview } from "@/types/dashboard";
import { 
  generateAllMonthsTaskOverview,
  generateGrandTotalTaskOverview 
} from "./generators/task-data-generator";

// Monthly Task Overview Data
export const monthlyTaskOverviewData: TaskOverview[] = [
  {
    sprintId: -20, // Unique ID for this S1 period
    sprintNumber: -20,
    monthId: "jan_feb_s1",
    monthName: "Jan & Feb S1",
    startDate: "2025-01-27",
    endDate: "2025-01-31",
    totalSprints: 1,
    sprintLengthInDays: 5,
    plannedTasks: 54,
    unplannedTasks: 4,
    deliveredTasks: 57,
    leftoverTasks: 1,
    completionPercentage: 106,
  },
  {
    sprintId: -21, // Unique ID for February
    sprintNumber: -21,
    monthId: "feb",
    monthName: "February",
    startDate: "2025-02-05",
    endDate: "2025-02-28",
    totalSprints: 4,
    sprintLengthInDays: 20,
    plannedTasks: 36,
    unplannedTasks: 40,
    deliveredTasks: 75,
    leftoverTasks: 1,
    completionPercentage: 208,
  },
  {
    sprintId: -22, // Unique ID for March
    sprintNumber: -22,
    monthId: "mar",
    monthName: "March",
    startDate: "2025-03-03",
    endDate: "2025-04-01",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 21,
    unplannedTasks: 66,
    deliveredTasks: 86,
    leftoverTasks: 1,
    completionPercentage: 410,
  },
  {
    sprintId: -23, // Unique ID for April
    sprintNumber: -23,
    monthId: "apr",
    monthName: "April",
    startDate: "2025-04-02",
    endDate: "2025-04-29",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 13,
    unplannedTasks: 31,
    deliveredTasks: 43,
    leftoverTasks: 1,
    completionPercentage: 331,
  },
  {
    sprintId: -24, // Unique ID for May
    sprintNumber: -24,
    monthId: "may",
    monthName: "May",
    startDate: "2025-04-30",
    endDate: "2025-05-27",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 0,
    unplannedTasks: 48,
    deliveredTasks: 44,
    leftoverTasks: 4,
    completionPercentage: 0,
  },
  {
    sprintId: -25,
    sprintNumber: -25,
    monthId: "june",
    monthName: "June",
    startDate: "2025-05-28",
    endDate: "2025-06-24",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 11,
    unplannedTasks: 61,
    deliveredTasks: 63,
    leftoverTasks: 9,
    completionPercentage: 573,
  },
  {
    sprintId: -26,
    sprintNumber: -26,
    monthId: "july",
    monthName: "July",
    startDate: "2025-06-25",
    endDate: "2025-07-22",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 2,
    unplannedTasks: 69,
    deliveredTasks: 67,
    leftoverTasks: 4,
    completionPercentage: 3350,
  },
  {
    sprintId: -27,
    sprintNumber: -27,
    monthId: "aug",
    monthName: "August",
    startDate: "2025-07-23",
    endDate: "2025-09-02",
    totalSprints: 3,
    sprintLengthInDays: 30,
    plannedTasks: 0,
    unplannedTasks: 237,
    deliveredTasks: 230,
    leftoverTasks: 7,
    completionPercentage: 0,
  },
  {
    sprintId: -28,
    sprintNumber: -28,
    monthId: "sep",
    monthName: "September",
    startDate: "2025-09-03",
    endDate: "2025-09-16",
    totalSprints: 1,
    sprintLengthInDays: 10,
    plannedTasks: 0,
    unplannedTasks: 31,
    deliveredTasks: 17,
    leftoverTasks: 1,
    completionPercentage: 0,
  },
];

// Calculate total for all months (excluding S1 data)
export const getAllMonthsTaskOverview = (): TaskOverview => {
  return generateAllMonthsTaskOverview(monthlyTaskOverviewData);
};

// Calculate grand total (including S1 data)
export const getGrandTotalTaskOverview = (): TaskOverview => {
  return generateGrandTotalTaskOverview(monthlyTaskOverviewData);
};

// Get all months excluding S1 data
export const getMonthsExcludingS1TaskOverview = (): TaskOverview[] => {
  return monthlyTaskOverviewData.filter(
    item => item.monthId !== "jan_feb_s1" 
  );
};