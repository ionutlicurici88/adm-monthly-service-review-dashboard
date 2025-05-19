import { StoryPointsOverview } from "@/types/dashboard";
import { sumProperty, calculatePercentage } from "@/utils/data-utils";

/**
 * Generate aggregated story points data for all sprints
 */
export const generateAllSprintsStoryPointsOverview = (sprintsData: StoryPointsOverview[]): StoryPointsOverview => {
  const firstSprint = sprintsData[0];
  const lastSprint = sprintsData[sprintsData.length - 1];
  
  const totalEstimatedSTP = sumProperty(sprintsData, 'estimatedSTP');
  const totalExtraSTP = sumProperty(sprintsData, 'extraSTP');
  const totalDeliveredSTP = sumProperty(sprintsData, 'deliveredSTP');
  const totalLeftoverSTP = sumProperty(sprintsData, 'leftoverSTP');
  
  // Calculate aggregate velocity percentage
  const avgVelocityPercentage = calculatePercentage(totalDeliveredSTP, totalEstimatedSTP);

  // Updated velocity vs target value as per requirement
  const velocityVsTarget = 1.17; // Fixed to match 117% as requested

  return {
    sprintId: 0,
    sprintNumber: 0,
    startDate: firstSprint.startDate,
    endDate: lastSprint.endDate,
    estimatedSTP: totalEstimatedSTP,
    extraSTP: totalExtraSTP,
    deliveredSTP: totalDeliveredSTP,
    leftoverSTP: totalLeftoverSTP,
    sprintVelocityPercentage: avgVelocityPercentage,
    velocityVsTarget: velocityVsTarget,
  };
};

/**
 * Generate aggregated story points data excluding the first sprint
 */
export const generateAllSprintsExcludeFirstStoryPointsOverview = (sprintsData: StoryPointsOverview[]): StoryPointsOverview => {
  // Filter out Sprint 1
  const dataExcludingFirstSprint = sprintsData.filter(sprint => sprint.sprintNumber > 1);
  
  const firstSprint = dataExcludingFirstSprint[0];
  const lastSprint = dataExcludingFirstSprint[dataExcludingFirstSprint.length - 1];
  
  const totalEstimatedSTP = sumProperty(dataExcludingFirstSprint, 'estimatedSTP');
  const totalExtraSTP = sumProperty(dataExcludingFirstSprint, 'extraSTP');
  const totalDeliveredSTP = sumProperty(dataExcludingFirstSprint, 'deliveredSTP');
  const totalLeftoverSTP = sumProperty(dataExcludingFirstSprint, 'leftoverSTP');
  
  // Calculate aggregate velocity percentage
  const avgVelocityPercentage = calculatePercentage(totalDeliveredSTP, totalEstimatedSTP);

  // Updated velocity vs target value as per requirement
  const velocityVsTarget = 1.23; // Fixed to match 123% as requested

  return {
    sprintId: -1,
    sprintNumber: 0,
    startDate: firstSprint.startDate,
    endDate: lastSprint.endDate,
    estimatedSTP: totalEstimatedSTP,
    extraSTP: totalExtraSTP,
    deliveredSTP: totalDeliveredSTP,
    leftoverSTP: totalLeftoverSTP,
    sprintVelocityPercentage: avgVelocityPercentage,
    velocityVsTarget: velocityVsTarget,
  };
};

/**
 * Generate aggregated monthly story points data for "All Months (Excluding S1)"
 * S1 data includes "jan" (Jan S1) and "feb_s1" (Feb S1)
 */
export const generateAllMonthsStoryPointsOverview = (monthsData: StoryPointsOverview[]): StoryPointsOverview => {
  // Filter out "jan" (Jan S1) and "feb_s1" (Feb S1) data
  const relevantMonths = monthsData.filter(
    (month) => month.monthId !== "jan" && month.monthId !== "feb_s1"
  );

  // Calculate sum of leftoverSTP for Feb, Mar, Apr
  const totalLeftoverSTPRelevant = sumProperty(relevantMonths, 'leftoverSTP');
  // Calculate sum of totalSprints for Feb, Mar, Apr
  const totalSprintsRelevant = sumProperty(relevantMonths, 'totalSprints');

  // Per user request, some values are kept specific for All Months (Excluding S1)
  // We will use the start date of the first relevant month (Feb) and end date of the last (Apr)
  const startDate = relevantMonths.length > 0 ? relevantMonths[0].startDate : "N/A";
  const endDate = relevantMonths.length > 0 ? relevantMonths[relevantMonths.length - 1].endDate : "N/A";

  return {
    sprintId: 201, // Kept original ID
    sprintNumber: 0,
    startDate: startDate, // e.g., "2025-02-05" (February start)
    endDate: endDate,     // e.g., "2025-04-29" (April end)
    estimatedSTP: 342,  // Hardcoded as per previous requirement
    extraSTP: 175,      // Hardcoded as per previous requirement
    deliveredSTP: 469,  // Hardcoded as per previous requirement
    leftoverSTP: totalLeftoverSTPRelevant, // Sum of Feb, Mar, Apr leftovers (8 + 4 + 18 = 30)
    sprintVelocityPercentage: 137, // Hardcoded as per previous requirement
    velocityVsTarget: 1.27,        // Hardcoded as per previous requirement
    monthId: "total",
    monthName: "All Months (Excluding S1)",
    totalSprints: totalSprintsRelevant, // Sum of Feb, Mar, Apr sprints (4 + 2 + 2 = 8)
  };
};

/**
 * Generate grand total monthly story points data
 */
export const generateGrandTotalStoryPointsOverview = (monthsData: StoryPointsOverview[]): StoryPointsOverview => {
  // Ensure monthsData is not empty to avoid errors with firstMonth/lastMonth
  if (monthsData.length === 0) {
    return {
      sprintId: 202, sprintNumber: 0, startDate: "N/A", endDate: "N/A",
      estimatedSTP: 0, extraSTP: 0, deliveredSTP: 0, leftoverSTP: 0,
      sprintVelocityPercentage: 0, velocityVsTarget: 0,
      monthId: "grand_total", monthName: "All Months", totalSprints: 0,
    };
  }

  const firstMonth = monthsData[0];
  // Sort by startDate to ensure lastMonth is chronologically correct for endDate
  const sortedMonths = [...monthsData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  const lastMonth = sortedMonths[sortedMonths.length - 1];
  
  const totalEstimatedSTP = sumProperty(monthsData, 'estimatedSTP');
  const totalExtraSTP = sumProperty(monthsData, 'extraSTP');
  const totalDeliveredSTP = sumProperty(monthsData, 'deliveredSTP');
  const totalLeftoverSTP = sumProperty(monthsData, 'leftoverSTP');
  const totalSprints = sumProperty(monthsData, 'totalSprints');
  
  // Use the required fixed values for percentages for Grand Total
  const sprintVelocityPercentage = 133;
  const velocityVsTarget = 1.19;

  return {
    sprintId: 202, // Kept original ID
    sprintNumber: 0,
    startDate: sortedMonths[0].startDate, // Use start date of the chronologically first month
    endDate: lastMonth.endDate,
    estimatedSTP: totalEstimatedSTP,
    extraSTP: totalExtraSTP,
    deliveredSTP: totalDeliveredSTP,
    leftoverSTP: totalLeftoverSTP,
    sprintVelocityPercentage: sprintVelocityPercentage, // Fixed as per previous requirement
    velocityVsTarget: velocityVsTarget,               // Fixed as per previous requirement
    monthId: "grand_total",
    monthName: "All Months",
    totalSprints: totalSprints,
  };
};
