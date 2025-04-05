
/**
 * Utility functions for formatting data for display
 */

/**
 * Format a date string to a localized date format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * Get the full month name from a month ID
 */
export const getFullMonthName = (monthId: string): string => {
  const monthMap: Record<string, string> = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
  };
  
  // Handle special month IDs
  if (monthId === "jan_s1") return "January S1";
  if (monthId === "feb_s1") return "February S1";
  if (monthId === "total") return "All Months";
  if (monthId === "grand_total") return "All Months (Grand Total)";
  
  // Try to get the month name from the map
  const baseMonthId = monthId.split("_")[0];
  return monthMap[baseMonthId] || monthId;
};

/**
 * Format a title based on sprint or month selection
 */
export const formatDashboardTitle = (
  isMonthView: boolean,
  monthId?: string,
  monthName?: string,
  sprintNumber?: number
): string => {
  if (isMonthView) {
    if (monthId === "grand_total") {
      return "All Months (Grand Total)";
    } else if (monthId === "total") {
      return "All Months (Excluding Sprint 1)";
    } else {
      return monthName || "";
    }
  } else if (sprintNumber === 0) {
    return "All Sprints (Grand Total)";
  } else if (sprintNumber === -1) {
    return "All Sprints (Excluding Sprint 1)";
  } else {
    return `Sprint ${sprintNumber}`;
  }
};
