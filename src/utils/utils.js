import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const groupedArray = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.region]) acc[item.region] = [];
    acc[item.region].push(item);
    return acc;
  }, {});
};
