
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

/**
 * Calculate the average of a specific property across an array of objects
 */
export const calculateAverage = <T>(items: T[], property: keyof T): number => {
  if (items.length === 0) return 0;
  const sum = sumProperty(items, property);
  return Math.round(sum / items.length);
};

/**
 * Get the difference in days between two date strings
 */
export const getDaysBetweenDates = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Group an array of objects by a specific property
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, currentItem) => {
    const groupKey = String(currentItem[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentItem);
    return result;
  }, {} as Record<string, T[]>);
};
