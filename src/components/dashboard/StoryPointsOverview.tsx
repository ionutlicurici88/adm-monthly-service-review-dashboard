
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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {sprintTitle} - Story Points Overview
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard
          title="Estimated STP"
          value={estimatedSTP}
          description="during planning"
        />
        
        <StatCard
          title="Extra STP"
          value={extraSTP}
          description="unplanned tasks"
        />
        
        <StatCard
          title="Delivered STP"
          value={deliveredSTP}
          description="Dev & QA"
        />
        
        <StatCard
          title="Leftover STP"
          value={leftoverSTP}
          description="Analysis & WIP"
        />
        
        <StatCard
          title="Sprint Velocity %"
          value={sprintVelocityPercentage}
          isPercentage={true}
          colorThreshold={{ good: 90, medium: 80 }}
        />
        
        <StatCard
          title="Velocity vs. Target"
          value={velocityVsTarget}
          colorThreshold={{ good: 1, medium: 0.9 }}
        />
      </div>
    </div>
  );
};

export default StoryPointsOverview;
