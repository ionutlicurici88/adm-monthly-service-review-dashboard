
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
  getAllSprintsExcludeFirstStoryPointsOverview,
} from "@/data";

const months = [
  { id: 1, name: "February" },
  { id: 2, name: "March" },
];

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("month"); // Default to month view
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
    if (selectedSprintId === -1) {
      return getAllSprintsExcludeFirstStoryPointsOverview();
    }
    return (
      storyPointsOverviewData.find((item) => item.sprintId === selectedSprintId) ||
      getAllSprintsStoryPointsOverview()
    );
  };

  // Placeholder month data - will be replaced with actual data later
  const getMonthData = () => {
    return {
      capacityData: getAllSprintsCapacityOverview(), // Temporarily using sprint data
      taskData: getAllSprintsTaskOverview(),
      storyPointsData: getAllSprintsStoryPointsOverview()
    };
  };

  const renderMonthViewContent = () => {
    switch (currentOverview) {
      case "capacity":
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Capacity Overview</h2>
            <CapacityOverview 
              data={getMonthData().capacityData} 
              allData={capacityOverviewData.filter(item => item.sprintNumber > 0)}
            />
          </div>
        );
      case "task":
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Task Overview</h2>
            <TaskOverview 
              data={getMonthData().taskData}
              allData={taskOverviewData.filter(item => item.sprintNumber > 0)}
            />
          </div>
        );
      case "story":
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Story Points Overview</h2>
            <StoryPointsOverview 
              data={getMonthData().storyPointsData}
              allData={storyPointsOverviewData.filter(item => item.sprintNumber > 0)}
              excludeFirstSprint={selectedMonthId === -1}
            />
          </div>
        );
      default:
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Capacity Overview</h2>
            <CapacityOverview 
              data={getMonthData().capacityData}
              allData={capacityOverviewData.filter(item => item.sprintNumber > 0)}
            />
          </div>
        );
    }
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
        const storyPointsSpecificData = storyPointsOverviewData.filter(item => item.sprintNumber > 0);
        return <StoryPointsOverview 
                data={getStoryPointsData()} 
                allData={storyPointsSpecificData}
                excludeFirstSprint={selectedSprintId === -1}
               />;
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

      {currentView === "month" && (
        <>
          <OverviewTabs
            currentOverview={currentOverview}
            onOverviewChange={handleOverviewChange}
          />
          {renderMonthViewContent()}
        </>
      )}
    </div>
  );
};

export default Dashboard;
