
import { ViewType } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Button
        variant={currentView === "sprint" ? "default" : "outline"}
        className={cn(
          "px-4 py-2 font-medium",
          currentView === "sprint" && "bg-dashboard-blue"
        )}
        onClick={() => onViewChange("sprint")}
      >
        Sprint View
      </Button>
      <Button
        variant={currentView === "month" ? "default" : "outline"}
        className={cn(
          "px-4 py-2 font-medium",
          currentView === "month" && "bg-dashboard-blue"
        )}
        onClick={() => onViewChange("month")}
      >
        Month View
      </Button>
    </div>
  );
};

export default ViewToggle;
