
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
    <div className="mt-24">
      <h3 className="text-lg font-semibold text-dashboard-blue-dark mb-6 pl-2">Capacity Trend</h3>
      <div className="w-full border-t border-border pt-4">
        <p className="text-sm text-muted-foreground italic py-4 text-center">
          Chart visualization has been removed.
        </p>
      </div>
    </div>
  );
};

export default CapacityTrend;
