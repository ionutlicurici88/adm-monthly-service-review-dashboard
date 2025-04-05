import { StoryPointsOverview as StoryPointsOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";
import StoryPointsTrend from "./StoryPointsTrend";
import MonthStoryPointsTrend from "./MonthStoryPointsTrend";

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
    monthId,
    monthName,
    totalSprints
  } = data;

  let title;
  
  const isMonthView = !!monthName;

  if (isMonthView) {
    if (monthId === "grand_total") {
      title = "All Months (Grand Total) - Story Points Overview";
    } else {
      title = monthName || "Unknown Month";
    }
  } else if (sprintNumber === 0) {
    title = "All Sprints (Grand Total)";
  } else if (sprintNumber === -1) {
    title = "All Sprints (Excluding Sprint 1)";
  } else {
    title = `Sprint ${sprintNumber}`;
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Determine when to show charts
  const showSprintChart = allData.length > 0 && (!isMonthView && sprintNumber === 0);
  const showMonthChart = isMonthView && (monthId === "grand_total" || monthId === "total") && allData.length > 0;

  const velocityVsTargetPercentage = Math.round(data.velocityVsTarget * 100);

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {isMonthView ? `${title} - Story Points Overview` : `${title} - Story Points Overview`}
      </h2>
      
      {isMonthView && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Start Date"
            value={formatDate(startDate)}
            tooltip="The official start date of the month."
            compact
          />
          
          <StatCard
            title="End Date"
            value={formatDate(endDate)}
            tooltip="The official end date of the month."
            compact
          />
          
          {totalSprints !== undefined && (
            <StatCard
              title="Total Sprints"
              value={totalSprints}
              tooltip="Number of sprints in this month."
              compact
            />
          )}
        </div>
      )}
      
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
          tooltip="Percentage of target velocity achieved. Higher percentages indicate better target velocity achieved."
          compact
        />
      </div>

      {showSprintChart && (
        <StoryPointsTrend data={allData} excludeFirstSprint={excludeFirstSprint} />
      )}

      {showMonthChart && (
        <MonthStoryPointsTrend 
          data={allData} 
          excludeS1Data={monthId === "total"}
        />
      )}
    </div>
  );
};

export default StoryPointsOverview;
