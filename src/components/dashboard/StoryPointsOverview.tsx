
import { StoryPointsOverview as StoryPointsOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";

interface StoryPointsOverviewProps {
  data: StoryPointsOverviewType;
}

const StoryPointsOverview = ({ data }: StoryPointsOverviewProps) => {
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
  
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
        />
        
        <StatCard
          title="Extra STP"
          value={extraSTP}
          description="unplanned tasks"
          tooltip="Story points added after sprint planning through unplanned tasks."
        />
        
        <StatCard
          title="Delivered STP"
          value={deliveredSTP}
          description="Dev & QA"
          tooltip="Story points for tasks that were fully completed (developed and passed QA)."
        />
        
        <StatCard
          title="Leftover STP"
          value={leftoverSTP}
          description="Analysis & WIP"
          tooltip="Story points for tasks that were started but not completed by the end of the sprint."
        />
        
        <StatCard
          title="Sprint Velocity %"
          value={sprintVelocityPercentage}
          isPercentage={true}
          colorThreshold={{ good: 90, medium: 80 }}
          tooltip="Percentage of estimated story points that were delivered, indicating the team's velocity."
        />
        
        <StatCard
          title="Velocity vs. Target"
          value={velocityVsTarget}
          colorThreshold={{ good: 1, medium: 0.9 }}
          tooltip="Ratio of actual velocity against target velocity. Values above 1 indicate exceeding targets."
        />
      </div>
    </div>
  );
};

export default StoryPointsOverview;
