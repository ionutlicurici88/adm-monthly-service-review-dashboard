
import { MonthCapacityOverview } from "@/types/dashboard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface MonthCapacityTrendProps {
  data: MonthCapacityOverview[];
  excludeS1Data?: boolean;
}

const MonthCapacityTrend = ({ data, excludeS1Data = false }: MonthCapacityTrendProps) => {
  // Filter out data if excludeS1Data is true
  const filteredData = data
    .filter(item => {
      if (excludeS1Data && (item.monthId === "jan_s1" || item.monthId === "feb_s1")) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Custom sort logic for months
      const monthOrder: Record<string, number> = {
        "jan_s1": 1, 
        "feb_s1": 2,
        "feb": 3,
        "mar": 4,
        "total": 5,
        "grand_total": 6
      };
      
      return (monthOrder[a.monthId] || 99) - (monthOrder[b.monthId] || 99);
    })
    .map(month => ({
      name: month.monthName,
      available: month.availableCapacity,
      contracted: month.contractedCapacity || 0,
      planned: month.plannedCapacity,
      delivered: month.deliveredCapacity,
    }));

  const chartConfig = {
    available: {
      label: "Available Capacity",
      color: "#94a3b8", // slate-400
    },
    contracted: {
      label: "Contracted Capacity",
      color: "#a855f7", // purple-500
    },
    planned: {
      label: "Planned Capacity",
      color: "#60a5fa", // blue-400
    },
    delivered: {
      label: "Delivered Capacity",
      color: "#4ade80", // green-400
    },
  };

  return (
    <div className="w-full px-4 pt-6">
      <h3 className="text-lg font-medium mb-4 text-center text-dashboard-blue-dark">Capacity Trend Across Months</h3>
      <div className="w-full h-[500px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip
                content={
                  <ChartTooltipContent />
                }
              />
              <Legend />
              <Bar dataKey="available" fill="var(--color-available)" name="Available Capacity" />
              <Bar dataKey="contracted" fill="var(--color-contracted)" name="Contracted Capacity" />
              <Bar dataKey="planned" fill="var(--color-planned)" name="Planned Capacity" />
              <Bar dataKey="delivered" fill="var(--color-delivered)" name="Delivered Capacity" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default MonthCapacityTrend;
