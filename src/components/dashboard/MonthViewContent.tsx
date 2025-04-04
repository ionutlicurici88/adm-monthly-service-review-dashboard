
import { OverviewType } from "@/types/dashboard";
import { monthCapacityOverviewData, MonthCapacityOverview as MonthCapacityOverviewType } from "@/data";
import TaskOverview from "./TaskOverview";
import StoryPointsOverview from "./StoryPointsOverview";
import MonthCapacityOverviewComponent from "./MonthCapacityOverview";
import MonthCapacityTrend from "./MonthCapacityTrend";

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
  switch (currentOverview) {
    case "capacity":
      return (
        <div className="flex flex-col w-full gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <MonthCapacityOverviewComponent data={getMonthCapacityData()} />
          </div>
          
          {/* Add the capacity trend chart */}
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <MonthCapacityTrend 
              data={monthCapacityOverviewData}
              excludeS1Data={selectedMonthId === "total"}
            />
          </div>
        </div>
      );
    case "task":
      return (
        <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
          <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Task Overview</h2>
          <TaskOverview 
            data={getMonthTaskData()}
            allData={[]}
          />
        </div>
      );
    case "story":
      return (
        <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
          <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">Monthly Story Points Overview</h2>
          <StoryPointsOverview 
            data={getMonthStoryPointsData()}
            allData={[]}
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
          
          {/* Add the capacity trend chart */}
          <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
            <MonthCapacityTrend 
              data={monthCapacityOverviewData}
              excludeS1Data={selectedMonthId === "total"}
            />
          </div>
        </div>
      );
  }
};

export default MonthViewContent;
