
import { TaskOverview } from "@/types/dashboard";

// Monthly Task Overview Data
// Updated based on the user's provided table
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
    deliveredTasks: 58,
    leftoverTasks: 0,
    completionPercentage: 107,
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
    unplannedTasks: 42,
    deliveredTasks: 77,
    leftoverTasks: 1,
    completionPercentage: 214,
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
    deliveredTasks: 84,
    leftoverTasks: 4,
    completionPercentage: 400,
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
    deliveredTasks: 41,
    leftoverTasks: 4,
    completionPercentage: 315,
  },
];

