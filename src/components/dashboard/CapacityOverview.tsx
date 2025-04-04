
import { CapacityOverview as CapacityOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";
import CapacityTrend from "./CapacityTrend";

interface CapacityOverviewProps {
  data: CapacityOverviewType;
  allData?: CapacityOverviewType[]; // Added to pass all data for the trend chart
}

const CapacityOverview = ({ data, allData = [] }: CapacityOverviewProps) => {
  const {
    sprintNumber,
    workingDaysAvailable,
    availableCapacity,
    plannedHoliday,
    plannedCapacity,
    unplannedHoliday,
    deliveredCapacity,
    capacityPercentage,
  } = data;

  const sprintTitle = sprintNumber === 0 ? "All Sprints" : `Sprint ${sprintNumber}`;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {sprintTitle} - Capacity Overview
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Working Days Available" 
          value={workingDaysAvailable} 
        />
        
        <StatCard 
          title="Available Capacity" 
          value={availableCapacity} 
          description="man-day"
        />
        
        <StatCard 
          title="Planned Holiday" 
          value={plannedHoliday} 
          description="man-day"
        />
        
        <StatCard 
          title="Planned Capacity" 
          value={plannedCapacity} 
          description="man-day, excluding planned holiday"
        />
        
        <StatCard 
          title="Unplanned Holiday" 
          value={unplannedHoliday} 
          description="man-day"
        />
        
        <StatCard 
          title="Delivered Capacity" 
          value={deliveredCapacity} 
          description="man-day, excluding unplanned leave"
        />
        
        <StatCard 
          title="Capacity %" 
          value={capacityPercentage} 
          isPercentage={true}
          description="delivered vs. planned" 
          colorThreshold={{ good: 95, medium: 85 }}
          className="sm:col-span-2"
        />
      </div>
      
      {/* Only show trend chart if this is the "All Sprints" view and we have data */}
      {sprintNumber === 0 && allData.length > 0 && (
        <CapacityTrend data={allData} />
      )}
    </div>
  );
};

export default CapacityOverview;
