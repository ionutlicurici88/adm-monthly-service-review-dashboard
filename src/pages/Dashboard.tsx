
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
  getAllSprintsStoryPointsOverview,
} from "@/data/mock-data";

const Dashboard = () => {
  // State for current view, overview type, and selected sprint
  const [currentView, setCurrentView] = useState<ViewType>("sprint");
  const [currentOverview, setCurrentOverview] = useState<OverviewType>("capacity");
  const [selectedSprintId, setSelectedSprintId] = useState<number>(0); // 0 for all sprints

  // Handle view change
  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  // Handle overview change
  const handleOverviewChange = (overview: OverviewType) => {
    setCurrentOverview(overview);
  };

  // Handle sprint change
  const handleSprintChange = (sprintId: number) => {
    setSelectedSprintId(sprintId);
  };

  // Get the appropriate data based on selected sprint
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

  // Content for the release view
  const renderReleaseViewContent = () => {
    return (
      <div className="p-6 bg-white border rounded-lg shadow-sm min-h-[400px] mb-4">
        <h2 className="text-xl font-semibold text-dashboard-blue-dark">Release View</h2>
        <p className="mt-4 text-gray-600">
          The Release View functionality is coming soon. This view will provide insights
          across multiple sprints grouped by release.
        </p>
      </div>
    );
  };

  // Content for the sprint view based on the current overview type
  const renderSprintViewContent = () => {
    switch (currentOverview) {
      case "capacity":
        return <CapacityOverview 
                data={getCapacityData()} 
                allData={capacityOverviewData} 
               />;
      case "task":
        return <TaskOverview data={getTaskData()} />;
      case "story":
        return <StoryPointsOverview data={getStoryPointsData()} />;
      default:
        return <CapacityOverview 
                data={getCapacityData()} 
                allData={capacityOverviewData} 
               />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <DashboardHeader
        currentView={currentView}
        onViewChange={handleViewChange}
        sprints={sprints}
        selectedSprintId={selectedSprintId}
        onSprintChange={handleSprintChange}
      />

      {currentView === "sprint" && (
        <>
          <OverviewTabs
            currentOverview={currentOverview}
            onOverviewChange={handleOverviewChange}
          />
          <div className="p-6 bg-white border rounded-lg shadow-sm min-h-[400px] mb-8">
            {renderSprintViewContent()}
          </div>
        </>
      )}

      {currentView === "release" && renderReleaseViewContent()}
    </div>
  );
};

export default Dashboard;
