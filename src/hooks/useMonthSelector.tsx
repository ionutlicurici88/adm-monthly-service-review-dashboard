
import { useState } from "react";
import { Month } from "@/types/dashboard";
import { getFullMonthName } from "@/utils/format-utils";

type UseMonthSelectorProps = {
  initialMonthId?: string;
  months: Month[];
};

export function useMonthSelector({ initialMonthId = "grand_total", months }: UseMonthSelectorProps) {
  // State for selected month ID
  const [selectedMonthId, setSelectedMonthId] = useState<string>(initialMonthId);

  // Handle month change
  const handleMonthChange = (monthId: string) => {
    setSelectedMonthId(monthId);
  };

  // Get current month data based on selection
  const getCurrentMonthData = () => {
    if (selectedMonthId === "grand_total") {
      return { id: "grand_total", name: "All Months (Grand Total)" };
    }
    if (selectedMonthId === "total") {
      return { id: "total", name: "All Months (Excluding Sprint 1)" };
    }
    const month = months.find(m => m.id === selectedMonthId);
    return month ? { ...month, name: getFullMonthName(month.id) } : null;
  };

  return {
    selectedMonthId,
    handleMonthChange,
    getCurrentMonthData
  };
}
