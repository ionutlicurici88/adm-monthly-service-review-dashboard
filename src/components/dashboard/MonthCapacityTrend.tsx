import { MonthCapacityOverview } from "@/types/dashboard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface MonthCapacityTrendProps {
  data: MonthCapacityOverview[];
  excludeS1Data?: boolean;
}

const MonthCapacityTrend = ({ data, excludeS1Data = false }: MonthCapacityTrendProps) => {
  // Process data for chart display
  const processData = () => {
    if (excludeS1Data) {
      // For "total" view, filter out S1 data
      return data
        .filter(item => item.monthId !== "jan_s1" && item.monthId !== "feb_s1")
        .sort((a, b) => {
          // Custom sort logic for months
          const monthOrder: Record<string, number> = {
            "feb": 1,
            "mar": 2,
            "total": 3,
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
    } else {
      // For "grand_total" view, combine feb_s1 with feb, and keep jan_s1 separate
      const febS1Data = data.find(item => item.monthId === "feb_s1");
      const janS1Data = data.find(item => item.monthId === "jan_s1");
      
      // Filter and process other data
      const processedData = data
        .filter(item => item.monthId !== "jan_s1" && item.monthId !== "feb_s1")
        .sort((a, b) => {
          // Custom sort logic for months
          const monthOrder: Record<string, number> = {
            "feb": 1,
            "mar": 2,
            "total": 3,
            "grand_total": 4
          };
          
          return (monthOrder[a.monthId] || 99) - (monthOrder[b.monthId] || 99);
        })
        .map(month => {
          if (month.monthId === "feb") {
            // For Feb, include Feb S1 data stacked on top
            return {
              name: month.monthName,
              available: month.availableCapacity,
              availableS1: febS1Data?.availableCapacity || 0,
              contracted: month.contractedCapacity || 0,
              contractedS1: febS1Data?.contractedCapacity || 0,
              planned: month.plannedCapacity,
              plannedS1: febS1Data?.plannedCapacity || 0,
              delivered: month.deliveredCapacity,
              deliveredS1: febS1Data?.deliveredCapacity || 0,
            };
          }
          return {
            name: month.monthName,
            available: month.availableCapacity,
            contracted: month.contractedCapacity || 0,
            planned: month.plannedCapacity,
            delivered: month.deliveredCapacity,
          };
        });
        
      // Add Jan S1 at the beginning
      if (janS1Data) {
        processedData.unshift({
          name: janS1Data.monthName,
          available: janS1Data.availableCapacity,
          contracted: janS1Data.contractedCapacity || 0,
          planned: janS1Data.plannedCapacity,
          delivered: janS1Data.deliveredCapacity,
        });
      }
      
      return processedData;
    }
  };

  const filteredData = processData();

  const chartConfig = {
    available: {
      label: "Available Capacity",
      color: "#94a3b8", // slate-400
    },
    availableS1: {
      label: "Available Capacity (S1)",
      color: "#cbd5e1", // lighter slate
    },
    contracted: {
      label: "Contracted Capacity",
      color: "#a855f7", // purple-500
    },
    contractedS1: {
      label: "Contracted Capacity (S1)",
      color: "#c084fc", // lighter purple
    },
    planned: {
      label: "Planned Capacity",
      color: "#60a5fa", // blue-400
    },
    plannedS1: {
      label: "Planned Capacity (S1)",
      color: "#93c5fd", // lighter blue
    },
    delivered: {
      label: "Delivered Capacity",
      color: "#4ade80", // green-400
    },
    deliveredS1: {
      label: "Delivered Capacity (S1)",
      color: "#86efac", // lighter green
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
              <Bar dataKey="available" stackId="a" fill="var(--color-available)" name="Available Capacity" />
              {!excludeS1Data && <Bar dataKey="availableS1" stackId="a" fill="var(--color-availableS1)" name="Available Capacity (S1)" />}
              
              <Bar dataKey="contracted" stackId="b" fill="var(--color-contracted)" name="Contracted Capacity" />
              {!excludeS1Data && <Bar dataKey="contractedS1" stackId="b" fill="var(--color-contractedS1)" name="Contracted Capacity (S1)" />}
              
              <Bar dataKey="planned" stackId="c" fill="var(--color-planned)" name="Planned Capacity" />
              {!excludeS1Data && <Bar dataKey="plannedS1" stackId="c" fill="var(--color-plannedS1)" name="Planned Capacity (S1)" />}
              
              <Bar dataKey="delivered" stackId="d" fill="var(--color-delivered)" name="Delivered Capacity" />
              {!excludeS1Data && <Bar dataKey="deliveredS1" stackId="d" fill="var(--color-deliveredS1)" name="Delivered Capacity (S1)" />}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default MonthCapacityTrend;
