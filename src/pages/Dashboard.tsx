
import { useState } from "react";
import { OverviewType, ViewType } from "@/types/dashboard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardContent from "@/components/dashboard/DashboardContent";
import { useDashboardData } from "@/hooks/useDashboardData";
import { sprints } from "@/data";

const months = [
  { id: "feb", name: "February" },
  { id: "mar", name: "March" },
];

const Dashboard = () => {
  // State for view type, overview type, and selection IDs
  const [currentView, setCurrentView] = useState<ViewType>("month");
  const [currentOverview, setCurrentOverview] = useState<OverviewType>("capacity");
  const [selectedSprintId, setSelectedSprintId] = useState<number>(0);
  const [selectedMonthId, setSelectedMonthId] = useState<string>("grand_total");

  // Use the custom hook to get memoized data based on selections
  const dashboardData = useDashboardData(currentView, selectedSprintId, selectedMonthId);

  // Event handlers
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
