
import { ViewType } from "@/types/dashboard";
import SprintSelector from "./SprintSelector";
import MonthSelector from "./MonthSelector";
import ViewToggle from "./ViewToggle";
import { Sprint, Month } from "@/types/dashboard";

interface DashboardHeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  sprints: Sprint[];
  months: Month[];
  selectedSprintId: number;
  selectedMonthId: number;
  onSprintChange: (sprintId: number) => void;
  onMonthChange: (monthId: number) => void;
}

const DashboardHeader = ({
  currentView,
  onViewChange,
  sprints,
  months,
  selectedSprintId,
  selectedMonthId,
  onSprintChange,
  onMonthChange,
}: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-dashboard-blue-dark mb-6">
        Monthly Service Review Dashboard
      </h1>
      
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <ViewToggle currentView={currentView} onViewChange={onViewChange} />
        
        {currentView === "sprint" && (
          <SprintSelector
            sprints={sprints}
            selectedSprintId={selectedSprintId}
            onSprintChange={onSprintChange}
          />
        )}

        {currentView === "month" && (
          <MonthSelector
            months={months}
            selectedMonthId={selectedMonthId}
            onMonthChange={onMonthChange}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
