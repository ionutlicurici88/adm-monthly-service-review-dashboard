
import { CapacityOverview as CapacityOverviewType } from "@/types/dashboard";
import StatCard from "./StatCard";
import CapacityTrend from "./CapacityTrend";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

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

  let sprintTitle;
  if (sprintNumber === 0) {
    sprintTitle = "All Sprints";
  } else if (sprintNumber === -1) {
    sprintTitle = "All Sprints (excludes Sprint 1)";
  } else {
    sprintTitle = `Sprint ${sprintNumber}`;
  }
  
  // Data for pie chart - only for individual sprints
  const pieData = [
    {
      name: "Planned Holiday",
      value: plannedHoliday,
      fill: "#9b87f5" // Primary Purple
    },
    {
      name: "Unplanned Holiday",
      value: unplannedHoliday,
      fill: "#F97316" // Bright Orange
    },
    {
      name: "Delivered Capacity",
      value: deliveredCapacity,
      fill: "#0EA5E9" // Ocean Blue
    }
  ];
  
  // Should we show the pie chart? Only for individual sprints
  const showPieChart = sprintNumber !== 0 && sprintNumber !== -1;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-dashboard-blue-dark">
        {sprintTitle} - Capacity Overview
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Working Days Available" 
          value={workingDaysAvailable} 
          tooltip="Total number of working days in the sprint period, excluding weekends and holidays."
        />
        
        <StatCard 
          title="Available Capacity" 
          value={availableCapacity} 
          description="man-day"
          tooltip="Total capacity of the team measured in man-days (working days × number of team members)."
        />
        
        <StatCard 
          title="Planned Holiday" 
          value={plannedHoliday} 
          description="man-day"
          tooltip="Pre-planned time off for team members during the sprint period (vacations, training, etc.)."
        />
        
        <StatCard 
          title="Planned Capacity" 
          value={plannedCapacity} 
          description="man-day, excluding planned holiday"
          tooltip="Net capacity after subtracting planned holidays from available capacity."
        />
        
        <StatCard 
          title="Unplanned Holiday" 
          value={unplannedHoliday} 
          description="man-day"
          tooltip="Unexpected absences during the sprint (sick leaves, emergencies, etc.)."
        />
        
        <StatCard 
          title="Delivered Capacity" 
          value={deliveredCapacity} 
          description="man-day, excluding unplanned leave"
          tooltip="Actual working capacity delivered after subtracting both planned and unplanned holidays."
        />
        
        <StatCard 
          title="Capacity %" 
          value={capacityPercentage} 
          isPercentage={true}
          description="delivered vs. planned" 
          colorThreshold={{ good: 95, medium: 85 }}
          className="sm:col-span-2"
          tooltip="Percentage of planned capacity that was actually delivered. Higher percentages indicate better utilization of planned resources."
        />
      </div>
      
      {/* Only show trend chart if this is the "All Sprints" or "All Sprints -1" view and we have data */}
      {(sprintNumber === 0 || sprintNumber === -1) && allData.length > 0 && (
        <CapacityTrend 
          data={allData} 
          excludeFirstSprint={sprintNumber === -1}
        />
      )}
      
      {/* Add pie chart for individual sprints */}
      {showPieChart && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-dashboard-blue-dark mb-4">
            Sprint Capacity Distribution
          </h3>
          <div className="h-[400px] border rounded-lg p-4 bg-white">
            <ChartContainer
              config={{
                plannedHoliday: {
                  label: "Planned Holiday",
                  color: "#9b87f5"
                },
                unplannedHoliday: {
                  label: "Unplanned Holiday", 
                  color: "#F97316"
                },
                deliveredCapacity: {
                  label: "Delivered Capacity",
                  color: "#0EA5E9"
                }
              }}
            >
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  innerRadius={60}
                  label={(entry) => `${entry.name}: ${entry.value} man-days`}
                  labelLine={true}
                  paddingAngle={2}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip
                  content={(props) => (
                    <ChartTooltipContent
                      formatter={(value, name) => {
                        return [`${value} man-days`, name];
                      }}
                      {...props}
                    />
                  )}
                />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default CapacityOverview;
