import { HomeAnalysisProps } from "./types";

export const CurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const getMinPrice = (arr: HomeAnalysisProps[]) => {
  return Math.min(...arr.map((item) => item.price));
};

export const getMaxPrice = (arr: HomeAnalysisProps[]) => {
  return Math.min(...arr.map((item) => item.price));
};

export const getPriceChange = (timestamp: number, filter: number) => {
  const time = new Date().getHours() - new Date(timestamp).getHours();
  const date = new Date().getDay() - new Date(timestamp).getDay();

  switch (filter) {
    case 1:
      if (time < 0) {
        return Math.abs(24 - time);
      }
      return time;
    case 7:
      if (date < 0) {
        return Math.abs(7 - date);
      }
      return date;
    case 30:
      if (date < 0) {
        return Math.abs(30 - date);
      }
      return date;
    case 365:
      if (date < 0) {
        return Math.abs(365 - date);
      }
      return date;
    default:
      if (time < 0) {
        return Math.abs(24 - time);
      }
      return time;
  }
};
