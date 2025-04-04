
import { CapacityOverview } from "@/types/dashboard";

interface CapacityTrendProps {
  data: CapacityOverview[];
}

const CapacityTrend = ({ data }: CapacityTrendProps) => {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark">Capacity Trend</h3>
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-500">Capacity trend data will be updated soon.</p>
      </div>
    </div>
  );
};

export default CapacityTrend;
