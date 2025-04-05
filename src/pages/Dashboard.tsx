
import { useState } from "react";
import { OverviewType, ViewType } from "@/types/dashboard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardContent from "@/components/dashboard/DashboardContent";
import {
  sprints,
  capacityOverviewData,
  taskOverviewData,
  storyPointsOverviewData,
  getAllSprintsCapacityOverview,
  getAllSprintsExcludeFirstCapacityOverview,
  getAllSprintsStoryPointsOverview,
  getAllSprintsExcludeFirstStoryPointsOverview,
  monthCapacityOverviewData,
  getAllMonthsCapacityOverview,
  getGrandTotalCapacityOverview
} from "@/data";

import {
  getAllSprintsTaskOverview,
  getAllSprintsExcludeFirstTaskOverview,
  monthlyTaskOverviewData,
  getAllMonthsTaskOverview,
  getGrandTotalTaskOverview,
  getMonthTaskOverview
} from "@/data/task-data";

import {
  monthStoryPointsOverviewData,
  getAllMonthsStoryPointsOverview,
  getGrandTotalStoryPointsOverview,
  getMonthStoryPointsOverview
} from "@/data/month-story-points-data";

const months = [
  { id: "feb", name: "February" },
  { id: "mar", name: "March" },
];

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("month"); // Default to month view
  const [currentOverview, setCurrentOverview] = useState<OverviewType>("capacity");
  const [selectedSprintId, setSelectedSprintId] = useState<number>(0);
  const [selectedMonthId, setSelectedMonthId] = useState<string>("grand_total");

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleOverviewChange = (overview: OverviewType) => {
    setCurrentOverview(overview);
  };

  const handleSprintChange = (sprintId: number) => {
    setSelectedSprintId(sprintId);
  };

  const handleMonthChange = (monthId: string) => {
    setSelectedMonthId(monthId);
  };

  // Data retrieval functions for sprints
  const getCapacityData = () => {
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
  };

  const getTaskData = () => {
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
  };

  const getStoryPointsData = () => {
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
  };

  // Data retrieval functions for months
  const getMonthCapacityData = () => {
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
  };

  const getMonthTaskData = () => {
    if (selectedMonthId === "grand_total") {
      return getGrandTotalTaskOverview();
    }
    if (selectedMonthId === "total") {
      return getAllMonthsTaskOverview();
    }
    return getMonthTaskOverview(selectedMonthId);
  };

  const getMonthStoryPointsData = () => {
    if (selectedMonthId === "grand_total") {
      return getGrandTotalStoryPointsOverview();
    }
    if (selectedMonthId === "total") {
      return getAllMonthsStoryPointsOverview();
    }
    return getMonthStoryPointsOverview(selectedMonthId);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <DashboardHeader
        currentView={currentView}
        onViewChange={handleViewChange}
        sprints={sprints}
        months={months}
        selectedSprintId={selectedSprintId}
        selectedMonthId={selectedMonthId}
        onSprintChange={handleSprintChange}
        onMonthChange={handleMonthChange}
      />

      <DashboardContent 
        currentView={currentView}
        currentOverview={currentOverview}
        onOverviewChange={handleOverviewChange}
        selectedSprintId={selectedSprintId}
        selectedMonthId={selectedMonthId}
        getCapacityData={getCapacityData}
        getTaskData={getTaskData}
        getStoryPointsData={getStoryPointsData}
        getMonthCapacityData={getMonthCapacityData}
        getMonthTaskData={getMonthTaskData}
        getMonthStoryPointsData={getMonthStoryPointsData}
        capacityOverviewData={capacityOverviewData}
        taskOverviewData={taskOverviewData}
        storyPointsOverviewData={storyPointsOverviewData}
      />
    </div>
  );
};

export default Dashboard;
