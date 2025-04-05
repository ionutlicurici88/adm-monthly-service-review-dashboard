
import { useState } from "react";
import { Sprint } from "@/types/dashboard";

type UseSprintSelectorProps = {
  initialSprintId?: number;
  sprints: Sprint[];
};

export function useSprintSelector({ initialSprintId = 0, sprints }: UseSprintSelectorProps) {
  // State for selected sprint ID
  const [selectedSprintId, setSelectedSprintId] = useState<number>(initialSprintId);

  // Handle sprint change
  const handleSprintChange = (sprintId: number) => {
    setSelectedSprintId(sprintId);
  };

  // Get current sprint data based on selection
  const getCurrentSprintData = () => {
    if (selectedSprintId === 0) {
      return { id: 0, number: 0, name: "All Sprints (Grand Total)" };
    }
    if (selectedSprintId === -1) {
      return { id: -1, number: -1, name: "All Sprints (Excluding Sprint 1)" };
    }
    const sprint = sprints.find(s => s.id === selectedSprintId);
    return sprint ? { ...sprint, name: `Sprint ${sprint.number}` } : null;
  };

  return {
    selectedSprintId,
    handleSprintChange,
    getCurrentSprintData
  };
}
