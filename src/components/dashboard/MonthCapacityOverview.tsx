
import { MonthCapacityOverview as MonthCapacityOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";

interface MonthCapacityOverviewProps {
  data: MonthCapacityOverviewType;
}

const MonthCapacityOverview = ({ data }: MonthCapacityOverviewProps) => {
  const {
    monthName,
    monthId,
    workingDaysAvailable,
    availableCapacity,
    contractedCapacity,
    plannedHoliday,
    plannedCapacity,
    unplannedHoliday,
    deliveredCapacity,
    capacityPercentage,
  } = data;

  let title;
  if (monthId === "grand_total") {
    title = "All Months (Grand Total)";
  } else if (monthId === "total") {
    title = "All Months (Excluding Sprint 1)";
  } else {
    title = monthName || "Unknown Month";
  }

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Working Days Available" 
          value={workingDaysAvailable} 
          tooltip="Total number of working days in the month, excluding weekends and holidays."
          compact
        />
        
        <StatCard 
          title="Available Capacity" 
          value={availableCapacity} 
          description="man-day"
          tooltip="Total capacity of the team measured in man-days (working days × number of team members)."
          compact
        />
        
        <StatCard 
          title="Contracted Capacity" 
          value={contractedCapacity} 
          description="man-day"
          tooltip="Contracted capacity for the month."
          compact
        />
        
        <StatCard 
          title="Planned Holiday" 
          value={plannedHoliday} 
          description="man-day"
          tooltip="Pre-planned time off for team members during the month (vacations, training, etc.)."
          compact
        />
        
        <StatCard 
          title="Planned Capacity" 
          value={plannedCapacity} 
          description="man-day, excluding planned holiday"
          tooltip="Net capacity after subtracting planned holidays from available capacity."
          compact
        />
        
        <StatCard 
          title="Unplanned Holiday" 
          value={unplannedHoliday} 
          description="man-day"
          tooltip="Unexpected absences during the month (sick leaves, emergencies, etc.)."
          compact
        />
        
        <StatCard 
          title="Delivered Capacity" 
          value={deliveredCapacity} 
          description="man-day, excluding unplanned leave"
          tooltip="Actual working capacity delivered after subtracting both planned and unplanned holidays."
          compact
        />
        
        <StatCard 
          title="Capacity %" 
          value={capacityPercentage} 
          isPercentage={true}
          description="delivered vs. planned" 
          colorThreshold={{ good: 95, medium: 85 }}
          tooltip="Percentage of planned capacity that was actually delivered. Higher percentages indicate better utilization of planned resources."
          compact
        />
      </div>
    </div>
  );
};

export default MonthCapacityOverview;
