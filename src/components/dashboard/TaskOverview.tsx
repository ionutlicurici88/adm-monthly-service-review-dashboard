
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
        />
        
        <StatCard
          title="End Date"
          value={formatDate(endDate)}
        />
        
        <StatCard
          title="Sprint Length"
          value={sprintLengthInDays}
          description="days"
        />
        
        <StatCard
          title="Planned Tasks"
          value={plannedTasks}
        />
        
        <StatCard
          title="Unplanned Tasks"
          value={unplannedTasks}
        />
        
        <StatCard
          title="Delivered Tasks"
          value={deliveredTasks}
          description="Dev & QA"
        />
        
        <StatCard
          title="Leftover Tasks"
          value={leftoverTasks}
          description="Analysis & WIP"
        />
        
        <StatCard
          title="Completion %"
          value={completionPercentage}
          isPercentage={true}
          description="delivered vs. planned"
          colorThreshold={{ good: 90, medium: 80 }}
        />
      </div>
    </div>
  );
};

export default TaskOverview;
