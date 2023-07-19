import { FaWallet, FaBell, FaRegSun, FaCompass } from "react-icons/fa";
import {
  CgEditFlipH,
  CgInfo,
  CgSoftwareUpload,
  CgRemove,
} from "react-icons/cg";

export const MARKET_CHART_ID = "bitcoin";

export const Currency = "usd";

export const filterData = [
  {
    symbol: "Day",
    count: 1,
  },
  {
    symbol: "Week",
    count: 7,
  },
  {
    symbol: "Month",
    count: 30,
  },
  {
    symbol: "Year",
    count: 365,
  },
];

export const footerData = [
  {
    symbol: "wallet",
    icon: FaWallet,
  },
  {
    symbol: "compass",
    icon: FaCompass,
  },
  {
    symbol: "bell",
    icon: FaBell,
  },
  {
    symbol: "setting",
    icon: FaRegSun,
  },
];

export const modalData = [
  {
    text: "Edit",
    icon: CgEditFlipH,
  },
  {
    text: "Courier info",
    icon: CgInfo,
  },
  {
    text: "Share",
    icon: CgSoftwareUpload,
  },
  {
    text: "Remove",
    icon: CgRemove,
  },
];
