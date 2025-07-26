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
    endDate: "2025-02-04",
    totalSprints: 1,
    sprintLengthInDays: 7,
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
    unplannedTasks: 41,
    deliveredTasks: 75,
    leftoverTasks: 2,
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
    unplannedTasks: 67,
    deliveredTasks: 86,
    leftoverTasks: 2,
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
    unplannedTasks: 32,
    deliveredTasks: 44,
    leftoverTasks: 1,
    completionPercentage: 338,
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
    deliveredTasks: 43,
    leftoverTasks: 5,
    completionPercentage: 0,
  },
  { // New June Data
    sprintId: -25,
    sprintNumber: -25,
    monthId: "june",
    monthName: "June",
    startDate: "2025-05-28",
    endDate: "2025-06-24",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 11,
    unplannedTasks: 63,
    deliveredTasks: 58,
    leftoverTasks: 16,
    completionPercentage: 527,
  },
  { // New July Data
    sprintId: -26,
    sprintNumber: -26,
    monthId: "july",
    monthName: "July",
    startDate: "2025-06-25",
    endDate: "2025-07-22",
    totalSprints: 2,
    sprintLengthInDays: 20,
    plannedTasks: 2,
    unplannedTasks: 80,
    deliveredTasks: 53,
    leftoverTasks: 29,
    completionPercentage: 2650,
  },
  { // New August Data
    sprintId: -27,
    sprintNumber: -27,
    monthId: "aug",
    monthName: "August",
    startDate: "2025-07-23",
    endDate: "2025-08-05",
    totalSprints: 1,
    sprintLengthInDays: 10,
    plannedTasks: 0,
    unplannedTasks: 23,
    deliveredTasks: 7,
    leftoverTasks: 16,
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