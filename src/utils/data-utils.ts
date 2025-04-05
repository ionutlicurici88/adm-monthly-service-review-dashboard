
/**
 * Common utility functions for data manipulation and calculations.
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
 * Calculate the percentage based on actual and planned values
 */
export const calculatePercentage = (actual: number, planned: number): number => {
  return planned > 0 ? Math.round((actual / planned) * 100) : 0;
};

/**
 * Sum a specific property across an array of objects
 */
export const sumProperty = <T>(items: T[], property: keyof T): number => {
  return items.reduce((sum, item) => sum + (Number(item[property]) || 0), 0);
};

/**
 * Filter an array of objects by excluding specific values in a property
 */
export const filterByExcluding = <T>(items: T[], property: keyof T, excludeValues: any[]): T[] => {
  return items.filter(item => !excludeValues.includes(item[property]));
};

