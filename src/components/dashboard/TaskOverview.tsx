
import React from 'react';
import { TaskOverview as TaskOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";
import TaskTrend from "./TaskTrend";
import MonthTaskTrend from "./MonthTaskTrend";

interface TaskOverviewProps {
  data: TaskOverviewType;
  allData?: TaskOverviewType[]; 
}

const TaskOverview = ({ data, allData = [] }: TaskOverviewProps) => {
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
    monthName,
    monthId,
    totalSprints
  } = data;

  let title;
  
  const isMonthView = !!monthName;

  if (isMonthView) {
    if (monthId === "grand_total") {
      title = "All Months (Grand Total) - Task Overview";
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

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark mb-4">
        {isMonthView ? `${title} - Task Overview` : `${title} - Task Overview`}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Start Date"
          value={formatDate(startDate)}
          tooltip="The official start date of the sprint or month."
          compact
        />
        
        <StatCard
          title="End Date"
          value={formatDate(endDate)}
          tooltip="The official end date of the sprint or month."
          compact
        />
        
        {isMonthView && totalSprints !== undefined && (
          <StatCard
            title="Total Sprints"
            value={totalSprints}
            tooltip="Number of sprints in this month."
            compact
          />
        )}
        
        <StatCard
          title={isMonthView ? "Length in Days" : "Sprint Length"}
          value={sprintLengthInDays}
          description="days"
          tooltip="Total calendar days between the start and end dates."
          compact
        />
        
        <StatCard
          title="Planned Tasks"
          value={plannedTasks}
          tooltip="Number of tasks committed to during planning."
          compact
        />
        
        <StatCard
          title="Unplanned Tasks"
          value={unplannedTasks}
          tooltip="Additional tasks that were added after planning began."
          compact
        />
        
        <StatCard
          title="Delivered Tasks"
          value={deliveredTasks}
          description="DEV & QA"
          tooltip="Tasks that were fully completed (developed and passed QA)."
          compact
        />
        
        <StatCard
          title="Leftover Tasks"
          value={leftoverTasks}
          description="Analysis & WIP"
          tooltip="Tasks that were started but not completed by the end of the period."
          compact
        />
        
        <StatCard
          title="Completion %"
          value={completionPercentage}
          isPercentage={true}
          description="delivered vs. planned"
          colorThreshold={{ good: 90, medium: 80 }}
          tooltip="Percentage of planned tasks that were fully delivered, indicating team reliability in meeting commitments."
          compact
        />
      </div>

      {isMonthView && (monthId === "grand_total" || monthId === "total") && allData.length > 0 && (
        <MonthTaskTrend 
          data={allData} 
          excludeS1Data={monthId === "total"}
        />
      )}

      {!isMonthView && (sprintNumber === 0 || sprintNumber === -1) && allData.length > 0 && (
        <TaskTrend 
          data={allData} 
          excludeFirstSprint={sprintNumber === -1}
        />
      )}
    </div>
  );
};

export default TaskOverview;
