import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthCapacityOverview } from "@/types/dashboard";
import { getFullMonthName } from "@/utils/format-utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface TACapacityTrendProps {
  data: MonthCapacityOverview[];
}

const TACapacityTrend = ({ data }: TACapacityTrendProps) => {
  // Define the desired order for TA months in the chart
  const baseMonthOrder: Record<string, number> = {
    "feb_3_21": 0,    // February (Delta)
    "feb_24_28": 1,   // February (Contracted)
    "mar": 2,         // March
    "apr": 3,         // April
    "may": 4,         // May
    "june": 5,        // June
    "july": 6,        // July
    "aug": 7,         // August
  };

  // Process data for chart display
  const processData = () => {
    let chartDataItems = [...data];
    
    // Filter out any aggregate rows like "total" or "grand_total"
    chartDataItems = chartDataItems.filter(item => 
        item.monthId !== "total" && item.monthId !== "grand_total"
    );
    
    // Sort the items based on the defined order
    chartDataItems.sort((a, b) => {
      const orderA = baseMonthOrder[a.monthId] ?? 99; // Items not in order map go to end
      const orderB = baseMonthOrder[b.monthId] ?? 99;
      return orderA - orderB;
    });

    // Map to the format expected by the chart
    return chartDataItems.map(month => ({
      name: getFullMonthName(month.monthId),
      available: month.availableCapacity,
      contracted: month.contractedCapacity || 0,
      planned: month.plannedCapacity,
      delivered: month.deliveredCapacity,
    }));
  };

  const chartFormattedData = processData();

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
            <BarChart data={chartFormattedData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
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

export default TACapacityTrend;