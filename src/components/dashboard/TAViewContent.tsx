import { OverviewType, MonthCapacityOverview } from "@/types/dashboard";
import { 
  taCapacityOverviewData, 
} from "@/data/ta-capacity-data";
import MonthCapacityOverviewComponent from "./MonthCapacityOverview";
import TACapacityTrend from "./TACapacityTrend";

interface TAViewContentProps {
  selectedMonthId: string;
  getTACapacityData: () => MonthCapacityOverview;
}

const TAViewContent = ({
  selectedMonthId,
  getTACapacityData,
}: TAViewContentProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="p-6 bg-white rounded-lg shadow-sm min-h-[300px] flex flex-col items-center w-full">
        <MonthCapacityOverviewComponent data={getTACapacityData()} />
      </div>
      
      {(selectedMonthId === "grand_total" || selectedMonthId === "grand_total_excluding_feb_delta") && (
        <div className="p-6 bg-white rounded-lg shadow-sm w-full">
          <TACapacityTrend 
            data={selectedMonthId === "grand_total_excluding_feb_delta" 
              ? taCapacityOverviewData.filter(item => item.monthId !== "feb_3_21")
              : taCapacityOverviewData
            } 
          />
        </div>
      )}
    </div>
  );
};

export default TAViewContent;