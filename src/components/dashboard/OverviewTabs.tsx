
import { OverviewType } from "@/types/dashboard";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { BarChartIcon, ClipboardCheckIcon, UsersIcon } from "lucide-react";

interface OverviewTabsProps {
  currentOverview: OverviewType;
  onOverviewChange: (overview: OverviewType) => void;
}

const OverviewTabs = ({
  currentOverview,
  onOverviewChange,
}: OverviewTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant="ghost"
        className={cn(
          "flex items-center gap-2 px-4 py-2",
          currentOverview === "capacity" &&
            "bg-dashboard-blue text-white hover:bg-dashboard-blue-dark hover:text-white"
        )}
        onClick={() => onOverviewChange("capacity")}
      >
        <UsersIcon size={18} />
        <span>Capacity Overview</span>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "flex items-center gap-2 px-4 py-2",
          currentOverview === "task" &&
            "bg-dashboard-blue text-white hover:bg-dashboard-blue-dark hover:text-white"
        )}
        onClick={() => onOverviewChange("task")}
      >
        <ClipboardCheckIcon size={18} />
        <span>Task Overview</span>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "flex items-center gap-2 px-4 py-2",
          currentOverview === "story" &&
            "bg-dashboard-blue text-white hover:bg-dashboard-blue-dark hover:text-white"
        )}
        onClick={() => onOverviewChange("story")}
      >
        <BarChartIcon size={18} />
        <span>Story Points Overview</span>
      </Button>
    </div>
  );
};

export default OverviewTabs;
