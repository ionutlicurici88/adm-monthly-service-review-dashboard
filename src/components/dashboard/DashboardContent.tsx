
import { ViewType, OverviewType } from "@/types/dashboard";
import OverviewTabs from "./OverviewTabs";
import MonthViewContent from "./MonthViewContent";
import SprintViewContent from "./SprintViewContent";
import TAViewContent from "./TAViewContent";

interface DashboardContentProps {
  currentView: ViewType;
  currentOverview: OverviewType;
  onOverviewChange: (overview: OverviewType) => void;
  selectedSprintId: number;
  selectedMonthId: string;
  getCapacityData: () => any;
  getTaskData: () => any;
  getStoryPointsData: () => any;
  getMonthCapacityData: () => any;
  getMonthTaskData: () => any;
  getMonthStoryPointsData: () => any;
  getTACapacityData?: () => any;
  capacityOverviewData: any[];
  taskOverviewData: any[];
  storyPointsOverviewData: any[];
}

const DashboardContent = ({
  currentView,
  currentOverview,
  onOverviewChange,
  selectedSprintId,
  selectedMonthId,
  getCapacityData,
  getTaskData,
  getStoryPointsData,
  getMonthCapacityData,
  getMonthTaskData,
  getMonthStoryPointsData,
  getTACapacityData,
  capacityOverviewData,
  taskOverviewData,
  storyPointsOverviewData
}: DashboardContentProps) => {
  return (
    <>
      {(currentView === "sprint" || currentView === "month") && (
        <OverviewTabs
          currentOverview={currentOverview}
          onOverviewChange={onOverviewChange}
        />
      )}
      
      {currentView === "sprint" && (
        <div className="p-6 bg-white border rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
          <SprintViewContent
            currentOverview={currentOverview}
            selectedSprintId={selectedSprintId}
            getCapacityData={getCapacityData}
            getTaskData={getTaskData}
            getStoryPointsData={getStoryPointsData}
            capacityOverviewData={capacityOverviewData}
            taskOverviewData={taskOverviewData}
            storyPointsOverviewData={storyPointsOverviewData}
          />
        </div>
      )}

      {currentView === "month" && (
        <MonthViewContent
          currentOverview={currentOverview}
          selectedMonthId={selectedMonthId}
          getMonthCapacityData={getMonthCapacityData}
          getMonthTaskData={getMonthTaskData}
          getMonthStoryPointsData={getMonthStoryPointsData}
        />
      )}

      {currentView === "ta" && getTACapacityData && (
        <TAViewContent
          selectedMonthId={selectedMonthId}
          getTACapacityData={getTACapacityData}
        />
      )}
    </>
  );
};

export default DashboardContent;
