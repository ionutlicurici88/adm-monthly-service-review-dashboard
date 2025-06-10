import { OverviewType } from "@/types/dashboard";
import { 
  monthCapacityOverviewData, 
  MonthCapacityOverview as MonthCapacityOverviewType,
  monthlyTaskOverviewData, // Corrected: Import from @/data
  monthStoryPointsOverviewData // Updated: Import from @/data for consistency
} from "@/data";
import TaskOverview from "./TaskOverview";
import StoryPointsOverview from "./StoryPointsOverview";
import MonthCapacityOverviewComponent from "./MonthCapacityOverview";
import MonthCapacityTrend from "./MonthCapacityTrend";
// Removed: import { monthlyTaskOverviewData } from "@/data/task-data";
// Removed: import { monthStoryPointsOverviewData } from "@/data/month-story-points-data";

interface MonthViewContentProps {
  currentOverview: OverviewType;
  selectedMonthId: string;
  getMonthCapacityData: () => MonthCapacityOverviewType;
  getMonthTaskData: () => any;
  getMonthStoryPointsData: () => any;
}

const MonthViewContent = ({
  currentOverview,
  selectedMonthId,
  getMonthCapacityData,
  getMonthTaskData,
  getMonthStoryPointsData,
}: MonthViewContentProps) => {
  // Determine if we should show the capacity trend chart
  // Hide chart for feb, mar, apr, and may selections
  const shouldShowCapacityTrend = !['feb', 'mar', 'apr', 'may'].includes(selectedMonthId);

  switch (currentOverview) {
    case "capacity":
      return (
        <div className="flex flex-col w-full gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <MonthCapacityOverviewComponent data={getMonthCapacityData()} />
          </div>
          
          {shouldShowCapacityTrend && (
            <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
              <MonthCapacityTrend 
                data={monthCapacityOverviewData} // Pass the full data array for trend calculation
                excludeS1Data={selectedMonthId === "total"}
              />
            </div>
          )}
        </div>
      );
    case "task":
      return (
        <div className="flex flex-col w-full gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <TaskOverview 
              data={getMonthTaskData()}
              allData={monthlyTaskOverviewData} 
            />
          </div>
        </div>
      );
    case "story":
      return (
        <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
          <StoryPointsOverview 
            data={getMonthStoryPointsData()}
            allData={monthStoryPointsOverviewData}
            excludeFirstSprint={selectedMonthId === "total"}
          />
        </div>
      );
    default:
      return (
        <div className="flex flex-col w-full gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <MonthCapacityOverviewComponent data={getMonthCapacityData()} />
          </div>
          
          {shouldShowCapacityTrend && (
            <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
              <MonthCapacityTrend 
                data={monthCapacityOverviewData}
                excludeS1Data={selectedMonthId === "total"}
              />
            </div>
          )}
        </div>
      );
  }
};

export default MonthViewContent;
