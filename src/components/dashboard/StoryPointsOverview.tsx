import { StoryPointsOverview as StoryPointsOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";
import StoryPointsTrend from "./StoryPointsTrend";

interface StoryPointsOverviewProps {
  data: StoryPointsOverviewType;
  allData?: StoryPointsOverviewType[];
  excludeFirstSprint?: boolean;
}

const StoryPointsOverview = ({ data, allData = [], excludeFirstSprint = false }: StoryPointsOverviewProps) => {
  const {
    sprintNumber,
    startDate,
    endDate,
    estimatedSTP,
    extraSTP,
    deliveredSTP,
    leftoverSTP,
    sprintVelocityPercentage,
    velocityVsTarget,
  } = data;

  const sprintTitle = sprintNumber === 0 ? "All Sprints" : `Sprint ${sprintNumber}`;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const showChart = allData.length > 0 && (sprintNumber === 0);

  const velocityVsTargetPercentage = Math.round(data.velocityVsTarget * 100);

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {sprintTitle} - Story Points Overview
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Estimated STP"
          value={estimatedSTP}
          description="during planning"
          tooltip="Story points estimated and committed to during sprint planning."
          compact
        />
        
        <StatCard
          title="Extra STP"
          value={extraSTP}
          description="unplanned tasks"
          tooltip="Story points added after sprint planning through unplanned tasks."
          compact
        />
        
        <StatCard
          title="Delivered STP"
          value={deliveredSTP}
          description="DEV & QA"
          tooltip="Story points for tasks that were fully completed (developed and passed QA)."
          compact
        />
        
        <StatCard
          title="Leftover STP"
          value={leftoverSTP}
          description="Analysis & WIP"
          tooltip="Story points for tasks that were started but not completed by the end of the sprint."
          compact
        />
        
        <StatCard
          title="Sprint Velocity %"
          value={sprintVelocityPercentage}
          isPercentage={true}
          colorThreshold={{ good: 90, medium: 80 }}
          tooltip="Percentage of estimated story points that were delivered, indicating the team's velocity."
          compact
        />
        
        <StatCard
          title="Velocity vs. Target"
          value={velocityVsTargetPercentage}
          isPercentage={true}
          colorThreshold={{ good: 100, medium: 90 }}
          tooltip="Percentage of target velocity achieved. Values above 100% indicate exceeding targets."
          compact
        />
      </div>

      {showChart && (
        <StoryPointsTrend data={allData} excludeFirstSprint={excludeFirstSprint} />
      )}
    </div>
  );
};

export default StoryPointsOverview;
