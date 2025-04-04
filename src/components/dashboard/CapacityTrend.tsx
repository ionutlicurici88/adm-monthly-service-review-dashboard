
import { CapacityOverview } from "@/types/dashboard";

interface CapacityTrendProps {
  data: CapacityOverview[];
  excludeFirstSprint?: boolean;
}

const CapacityTrend = ({ data, excludeFirstSprint = false }: CapacityTrendProps) => {
  // Filter out "All Sprints" aggregated data and optionally exclude Sprint 1
  const filteredData = data
    .filter(item => {
      const isRegularSprint = item.sprintNumber > 0;
      
      if (excludeFirstSprint && item.sprintNumber === 1) {
        return false;
      }
      
      return isRegularSprint;
    })
    .sort((a, b) => a.sprintNumber - b.sprintNumber);

  return (
    <div>
      <div className="w-full border-t border-border pt-4">
      </div>
    </div>
  );
};

export default CapacityTrend;
