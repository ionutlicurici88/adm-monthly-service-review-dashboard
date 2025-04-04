
import { TaskOverview as TaskOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";

interface TaskOverviewProps {
  data: TaskOverviewType;
}

const TaskOverview = ({ data }: TaskOverviewProps) => {
  const {
    sprintNumber,
    startDate,
    endDate,
    sprintLengthInDays,
    plannedTasks,
    unplannedTasks,
    deliveredTasks,
    leftoverTasks,
    completionPercentage,
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
        {sprintTitle} - Task Overview
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard
          title="Start Date"
          value={formatDate(startDate)}
          tooltip="The official start date of the sprint."
        />
        
        <StatCard
          title="End Date"
          value={formatDate(endDate)}
          tooltip="The official end date of the sprint."
        />
        
        <StatCard
          title="Sprint Length"
          value={sprintLengthInDays}
          description="days"
          tooltip="Total calendar days between the start and end dates of the sprint."
        />
        
        <StatCard
          title="Planned Tasks"
          value={plannedTasks}
          tooltip="Number of tasks committed to during sprint planning."
        />
        
        <StatCard
          title="Unplanned Tasks"
          value={unplannedTasks}
          tooltip="Additional tasks that were added after sprint planning began."
        />
        
        <StatCard
          title="Delivered Tasks"
          value={deliveredTasks}
          description="Dev & QA"
          tooltip="Tasks that were fully completed (developed and passed QA) during the sprint."
        />
        
        <StatCard
          title="Leftover Tasks"
          value={leftoverTasks}
          description="Analysis & WIP"
          tooltip="Tasks that were started but not completed by the end of the sprint."
        />
        
        <StatCard
          title="Completion %"
          value={completionPercentage}
          isPercentage={true}
          description="delivered vs. planned"
          colorThreshold={{ good: 90, medium: 80 }}
          tooltip="Percentage of planned tasks that were fully delivered, indicating team reliability in meeting commitments."
        />
      </div>
    </div>
  );
};

export default TaskOverview;
