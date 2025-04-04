
import { CapacityOverview } from "@/types/dashboard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface CapacityTrendProps {
  data: CapacityOverview[];
  excludeFirstSprint?: boolean;
}

const CapacityTrend = ({ data, excludeFirstSprint = false }: CapacityTrendProps) => {
  // Prepare data for the chart
  const chartData = data
    .filter(item => {
      // Filter out "All Sprints" aggregated data
      const isRegularSprint = item.sprintNumber > 0;
      
      // Also filter out Sprint 1 when excludeFirstSprint is true
      if (excludeFirstSprint && item.sprintNumber === 1) {
        return false;
      }
      
      return isRegularSprint;
    })
    .sort((a, b) => a.sprintNumber - b.sprintNumber) // Sort by sprint number
    .map((item) => ({
      name: `S${item.sprintNumber}`, // Shorter sprint name
      "Available Capacity": item.availableCapacity,
      "Planned Capacity": item.plannedCapacity,
      "Delivered Capacity": item.deliveredCapacity,
    }));

  return (
    <div className="mt-12"> {/* Increased top margin to push title lower */}
      <h3 className="text-lg font-semibold text-dashboard-blue-dark mb-6 pl-2">Capacity Trend</h3>
      <div className="w-full border-t border-border pt-4"> {/* Added border and padding */}
        <ChartContainer
          config={{
            "Available Capacity": {
              label: "Available Capacity",
              color: "#10B981", // Green
            },
            "Planned Capacity": {
              label: "Planned Capacity",
              color: "#93C5FD", // Light blue
            },
            "Delivered Capacity": {
              label: "Delivered Capacity",
              color: "#1E40AF", // Dark blue
            },
          }}
        >
          {/* ResponsiveContainer is the single child of ChartContainer */}
          <ResponsiveContainer width="100%" height={180}> {/* Reduced height from 250 to 180 */}
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 40, bottom: 20 }}
              barSize={20}
              barGap={0}
              barCategoryGap={40}
            >
              <CartesianGrid vertical={false} horizontal={true} strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                scale="point" 
                padding={{ left: 50, right: 50 }} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tick={{ fontSize: 11 }} 
                width={35}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend 
                wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} 
                iconSize={8}
              />
              <Bar dataKey="Available Capacity" fill="#10B981" />
              <Bar dataKey="Planned Capacity" fill="#93C5FD" />
              <Bar dataKey="Delivered Capacity" fill="#1E40AF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CapacityTrend;
