
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
      // For "grand_total" view, combine jan_s1 and feb_s1
      const janS1Data = data.find(item => item.monthId === "jan_s1");
      const febS1Data = data.find(item => item.monthId === "feb_s1");
      
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
        .map(month => ({
          name: month.monthName,
          available: month.availableCapacity,
          contracted: month.contractedCapacity || 0,
          planned: month.plannedCapacity,
          delivered: month.deliveredCapacity,
        }));
        
      // Create and add combined Jan & Feb S1 at the beginning
      if (janS1Data || febS1Data) {
        const janAvailable = janS1Data?.availableCapacity || 0;
        const janContracted = janS1Data?.contractedCapacity || 0;
        const janPlanned = janS1Data?.plannedCapacity || 0;
        const janDelivered = janS1Data?.deliveredCapacity || 0;
        
        const febAvailable = febS1Data?.availableCapacity || 0;
        const febContracted = febS1Data?.contractedCapacity || 0;
        const febPlanned = febS1Data?.plannedCapacity || 0;
        const febDelivered = febS1Data?.deliveredCapacity || 0;
        
        processedData.unshift({
          name: "Jan & Feb S1",
          available: janAvailable + febAvailable,
          contracted: janContracted + febContracted,
          planned: janPlanned + febPlanned,
          delivered: janDelivered + febDelivered,
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
