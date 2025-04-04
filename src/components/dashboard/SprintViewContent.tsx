
import { CapacityOverview as CapacityOverviewType, TaskOverview as TaskOverviewType, StoryPointsOverview as StoryPointsOverviewType, OverviewType } from "@/types/dashboard";
import CapacityOverview from "./CapacityOverview";
import TaskOverview from "./TaskOverview";
import StoryPointsOverview from "./StoryPointsOverview";

interface SprintViewContentProps {
  currentOverview: OverviewType;
  selectedSprintId: number;
  getCapacityData: () => CapacityOverviewType;
  getTaskData: () => TaskOverviewType;
  getStoryPointsData: () => StoryPointsOverviewType;
  capacityOverviewData: CapacityOverviewType[];
  taskOverviewData: TaskOverviewType[];
  storyPointsOverviewData: StoryPointsOverviewType[];
}

const SprintViewContent = ({
  currentOverview,
  selectedSprintId,
  getCapacityData,
  getTaskData,
  getStoryPointsData,
  capacityOverviewData,
  taskOverviewData,
  storyPointsOverviewData
}: SprintViewContentProps) => {
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

export default SprintViewContent;
