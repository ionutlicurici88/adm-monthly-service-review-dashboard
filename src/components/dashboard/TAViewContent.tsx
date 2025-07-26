import { OverviewType, MonthCapacityOverview } from "@/types/dashboard";
import { 
  taCapacityOverviewData, 
} from "@/data/ta-capacity-data";
import MonthCapacityOverviewComponent from "./MonthCapacityOverview";

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
    </div>
  );
};

export default TAViewContent;