
// Dashboard Types
export type ViewType = 'sprint' | 'month';
export type OverviewType = 'capacity' | 'task' | 'story';

export interface Sprint {
  id: number;
  number: number;
  startDate: string;
  endDate: string;
  lengthInDays: number;
}

export interface Month {
  id: string;
  name: string;
}

export interface CapacityOverview {
  sprintId: number;
  sprintNumber: number;
  workingDaysAvailable: number;
  availableCapacity: number;
  plannedHoliday: number;
  plannedCapacity: number;
  unplannedHoliday: number;
  deliveredCapacity: number;
  capacityPercentage: number;
}

export interface MonthCapacityOverview {
  monthId: string;
  monthName: string;
  workingDaysAvailable: number;
  availableCapacity: number;
  contractedCapacity: number;
  plannedHoliday: number;
  plannedCapacity: number;
  unplannedHoliday: number;
  deliveredCapacity: number;
  capacityPercentage: number;
}

export interface TaskOverview {
  sprintId: number;
  sprintNumber: number;
  startDate: string;
  endDate: string;
  sprintLengthInDays: number;
  plannedTasks: number;
  unplannedTasks: number;
  deliveredTasks: number;
  leftoverTasks: number;
  completionPercentage: number;
}

export interface StoryPointsOverview {
  sprintId: number;
  sprintNumber: number;
  startDate: string;
  endDate: string;
  estimatedSTP: number;
  extraSTP: number;
  deliveredSTP: number;
  leftoverSTP: number;
  sprintVelocityPercentage: number;
  velocityVsTarget: number;
}
