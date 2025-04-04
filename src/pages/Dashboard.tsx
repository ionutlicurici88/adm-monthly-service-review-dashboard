
import { useState } from "react";
import { OverviewType, ViewType } from "@/types/dashboard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import OverviewTabs from "@/components/dashboard/OverviewTabs";
import CapacityOverview from "@/components/dashboard/CapacityOverview";
import TaskOverview from "@/components/dashboard/TaskOverview";
import StoryPointsOverview from "@/components/dashboard/StoryPointsOverview";
import {
  sprints,
  capacityOverviewData,
  taskOverviewData,
  storyPointsOverviewData,
  getAllSprintsCapacityOverview,
  getAllSprintsExcludeFirstCapacityOverview,
  getAllSprintsTaskOverview,
  getAllSprintsExcludeFirstTaskOverview,
  getAllSprintsStoryPointsOverview,
} from "@/data";

const months = [
  { id: 1, name: "February" },
  { id: 2, name: "March" },
];

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("sprint");
  const [currentOverview, setCurrentOverview] = useState<OverviewType>("capacity");
  const [selectedSprintId, setSelectedSprintId] = useState<number>(0);
  const [selectedMonthId, setSelectedMonthId] = useState<number>(0);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleOverviewChange = (overview: OverviewType) => {
    setCurrentOverview(overview);
  };

  const handleSprintChange = (sprintId: number) => {
    setSelectedSprintId(sprintId);
  };

  const handleMonthChange = (monthId: number) => {
    setSelectedMonthId(monthId);
  };

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
    return (
      storyPointsOverviewData.find((item) => item.sprintId === selectedSprintId) ||
      getAllSprintsStoryPointsOverview()
    );
  };

  const renderMonthViewContent = () => {
    return (
      <div className="p-6 bg-white border rounded-lg shadow-sm min-h-[300px] flex flex-col items-center justify-center w-full">
        <h2 className="text-xl font-semibold text-dashboard-blue-dark">Month View</h2>
        {selectedMonthId === 0 && (
          <p className="mt-4 text-gray-600">
            Viewing data for all months. This view provides insights across multiple sprints grouped by month.
          </p>
        )}
        {selectedMonthId === -1 && (
          <p className="mt-4 text-gray-600">
            Viewing data for all months, excluding Sprint 1. This helps to see trends after the initial sprint.
          </p>
        )}
        {selectedMonthId > 0 && (
          <p className="mt-4 text-gray-600">
            Viewing data for {months.find(m => m.id === selectedMonthId)?.name}. This shows all metrics for the selected month.
          </p>
        )}
      </div>
    );
  };

  const renderSprintViewContent = () => {
    switch (currentOverview) {
      case "capacity":
        const sprintSpecificData = capacityOverviewData.filter(item => item.sprintNumber > 0);
        return <CapacityOverview 
                data={getCapacityData()} 
                allData={sprintSpecificData} 
               />;
      case "task":
        const taskSpecificData = taskOverviewData.filter(item => item.sprintNumber > 0);
        return <TaskOverview 
                data={getTaskData()} 
                allData={taskSpecificData}
               />;
      case "story":
        return <StoryPointsOverview data={getStoryPointsData()} />;
      default:
        return <CapacityOverview 
                data={getCapacityData()} 
                allData={capacityOverviewData.filter(item => item.sprintNumber > 0)} 
               />;
    }
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

      {currentView === "sprint" && (
        <>
          <OverviewTabs
            currentOverview={currentOverview}
            onOverviewChange={handleOverviewChange}
          />
          <div className="p-6 bg-white border rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            {renderSprintViewContent()}
          </div>
        </>
      )}

      {currentView === "month" && renderMonthViewContent()}
    </div>
  );
};

export default Dashboard;
