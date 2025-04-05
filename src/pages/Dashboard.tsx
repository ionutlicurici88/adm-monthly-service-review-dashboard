
import { useState } from "react";
import { OverviewType, ViewType } from "@/types/dashboard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardContent from "@/components/dashboard/DashboardContent";
import { useDashboardData } from "@/hooks/useDashboardData";
import { sprints } from "@/data";
import { useSprintSelector } from "@/hooks/useSprintSelector";
import { useMonthSelector } from "@/hooks/useMonthSelector";

const months = [
  { id: "feb", name: "February" },
  { id: "mar", name: "March" },
];

const Dashboard = () => {
  // State for view type and overview type
  const [currentView, setCurrentView] = useState<ViewType>("month");
  const [currentOverview, setCurrentOverview] = useState<OverviewType>("capacity");
  
  // Use the custom hooks for sprint and month selection
  const sprintSelector = useSprintSelector({ sprints });
  const monthSelector = useMonthSelector({ months });

  // Use the custom hook to get memoized data based on selections
  const dashboardData = useDashboardData(
    currentView, 
    sprintSelector.selectedSprintId, 
    monthSelector.selectedMonthId
  );

  // Event handlers
  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleOverviewChange = (overview: OverviewType) => {
    setCurrentOverview(overview);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <DashboardHeader
        currentView={currentView}
        onViewChange={handleViewChange}
        sprints={sprints}
        months={months}
        selectedSprintId={sprintSelector.selectedSprintId}
        selectedMonthId={monthSelector.selectedMonthId}
        onSprintChange={sprintSelector.handleSprintChange}
        onMonthChange={monthSelector.handleMonthChange}
      />

      <DashboardContent 
        currentView={currentView}
        currentOverview={currentOverview}
        onOverviewChange={handleOverviewChange}
        selectedSprintId={sprintSelector.selectedSprintId}
        selectedMonthId={monthSelector.selectedMonthId}
        // Pass the getter functions and data arrays from the custom hook
        getCapacityData={dashboardData.getCapacityData}
        getTaskData={dashboardData.getTaskData}
        getStoryPointsData={dashboardData.getStoryPointsData}
        getMonthCapacityData={dashboardData.getMonthCapacityData}
        getMonthTaskData={dashboardData.getMonthTaskData}
        getMonthStoryPointsData={dashboardData.getMonthStoryPointsData}
        capacityOverviewData={dashboardData.capacityOverviewData}
        taskOverviewData={dashboardData.taskOverviewData}
        storyPointsOverviewData={dashboardData.storyPointsOverviewData}
      />
    </div>
  );
};

export default Dashboard;
