import { ChartDataProps } from "./types";

export const CurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const getMinPrice = (arr: ChartDataProps[]) => {
  return Math.min(...arr.map((item) => item.price));
};

export const getMaxPrice = (arr: ChartDataProps[]) => {
  return Math.min(...arr.map((item) => item.price));
};

export const generateDateTime = (timestamp: number, filter: number) => {
  const date = new Date(timestamp);
  if (filter === 1) {
    return date.toLocaleString();
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
};
