
import { useMemo } from "react";
import { ViewType, OverviewType } from "@/types/dashboard";
import {
  capacityOverviewData,
  taskOverviewData,
  storyPointsOverviewData,
  getAllSprintsCapacityOverview,
  getAllSprintsExcludeFirstCapacityOverview,
  getAllSprintsStoryPointsOverview,
  getAllSprintsExcludeFirstStoryPointsOverview,
  monthCapacityOverviewData,
  getAllMonthsCapacityOverview,
  getGrandTotalCapacityOverview,
  getAllSprintsTaskOverview,
  getAllSprintsExcludeFirstTaskOverview,
  monthlyTaskOverviewData,
  getAllMonthsTaskOverview,
  getGrandTotalTaskOverview,
  getMonthTaskOverview,
  monthStoryPointsOverviewData,
  getAllMonthsStoryPointsOverview,
  getGrandTotalStoryPointsOverview,
  getMonthStoryPointsOverview
} from "@/data";
import { getTACapacityOverview } from "@/data/ta-capacity-data";

/**
 * Custom hook to handle dashboard data calculations with memoization
 */
export function useDashboardData(
  currentView: ViewType,
  selectedSprintId: number,
  selectedMonthId: string
) {
  // Memoize the calculation of capacity data for the selected sprint
  const capacityData = useMemo(() => {
    if (currentView !== "sprint") return null;
    
    if (selectedSprintId === 0) {
      return getAllSprintsCapacityOverview();
    }
    if (selectedSprintId === -1) {
      return getAllSprintsExcludeFirstCapacityOverview();
    }
    return (
      capacityOverviewData.find((item) => item.sprintId === selectedSprintId) ||
      getAllSprintsCapacityOverview()
    );
  }, [currentView, selectedSprintId]);
  
  // Memoize the calculation of task data for the selected sprint
  const taskData = useMemo(() => {
    if (currentView !== "sprint") return null;
    
    if (selectedSprintId === 0) {
      return getAllSprintsTaskOverview();
    }
    if (selectedSprintId === -1) {
      return getAllSprintsExcludeFirstTaskOverview();
    }
    return (
      taskOverviewData.find((item) => item.sprintId === selectedSprintId) ||
      getAllSprintsTaskOverview()
    );
  }, [currentView, selectedSprintId]);
  
  // Memoize the calculation of story points data for the selected sprint
  const storyPointsData = useMemo(() => {
    if (currentView !== "sprint") return null;
    
    if (selectedSprintId === 0) {
      return getAllSprintsStoryPointsOverview();
    }
    if (selectedSprintId === -1) {
      return getAllSprintsExcludeFirstStoryPointsOverview();
    }
    return (
      storyPointsOverviewData.find((item) => item.sprintId === selectedSprintId) ||
      getAllSprintsStoryPointsOverview()
    );
  }, [currentView, selectedSprintId]);
  
  // Memoize the calculation of month capacity data for the selected month
  const monthCapacityData = useMemo(() => {
    if (currentView !== "month") return null;
    
    if (selectedMonthId === "grand_total") {
      return getGrandTotalCapacityOverview();
    }
    if (selectedMonthId === "total") {
      return getAllMonthsCapacityOverview();
    }
    return (
      monthCapacityOverviewData.find((item) => item.monthId === selectedMonthId) ||
      getGrandTotalCapacityOverview()
    );
  }, [currentView, selectedMonthId]);
  
  // Memoize the calculation of month task data for the selected month
  const monthTaskData = useMemo(() => {
    if (currentView !== "month") return null;
    
    if (selectedMonthId === "grand_total") {
      return getGrandTotalTaskOverview();
    }
    if (selectedMonthId === "total") {
      return getAllMonthsTaskOverview();
    }
    return getMonthTaskOverview(selectedMonthId);
  }, [currentView, selectedMonthId]);
  
  // Memoize the calculation of month story points data for the selected month
  const monthStoryPointsData = useMemo(() => {
    if (currentView !== "month") return null;
    
    if (selectedMonthId === "grand_total") {
      return getGrandTotalStoryPointsOverview();
    }
    if (selectedMonthId === "total") {
      return getAllMonthsStoryPointsOverview();
    }
    return getMonthStoryPointsOverview(selectedMonthId);
  }, [currentView, selectedMonthId]);
  
  // Memoize the calculation of TA capacity data for the selected month
  const taCapacityData = useMemo(() => {
    if (currentView !== "ta") return null;
    
    return getTACapacityOverview(selectedMonthId);
  }, [currentView, selectedMonthId]);
  
  // Return all the memoized data and raw data arrays
  return {
    // Sprint view data
    capacityData,
    taskData,
    storyPointsData,
    capacityOverviewData,
    taskOverviewData,
    storyPointsOverviewData,
    
    // Month view data
    monthCapacityData,
    monthTaskData,
    monthStoryPointsData,
    monthCapacityOverviewData,
    monthlyTaskOverviewData,
    monthStoryPointsOverviewData,
    
    // TA view data
    taCapacityData,
    
    // Data getter functions (conveniently named for a more intuitive interface)
    getCapacityData: () => capacityData!,
    getTaskData: () => taskData!,
    getStoryPointsData: () => storyPointsData!,
    getMonthCapacityData: () => monthCapacityData!,
    getMonthTaskData: () => monthTaskData!,
    getMonthStoryPointsData: () => monthStoryPointsData!,
    getTACapacityData: () => taCapacityData!,
  };
}
