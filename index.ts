import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines classnames using `clsx` and then merges the result with `twMerge` to optimize Tailwind CSS class utilities.
 * This function ensures that the resulting class string is free of duplicate or conflicting Tailwind utility classes.
 *
 * @param {ClassValue[]} inputs - An array of class values that can be strings, objects, or arrays that will be processed by `clsx`.
 * @returns {string} A string that represents the merged and optimized class names for use in a className attribute in React components.
 */
export const classMerge = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
