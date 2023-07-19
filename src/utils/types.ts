// section types
export interface HomeIntroProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export type IntroStyledProps = {
  $isExpanded: HomeIntroProps["isExpanded"];
};

export interface HomeAnalysisProps {
  date: string | Date;
  price: number;
}

export interface TokenPriceProps {
  timestamp: number;
  price: number;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// layout types

export interface HeaderStyeldProps {
  $isOpen: boolean;
}

export interface FooterStyledProps {
  $flag: boolean;
}

// componnet types
export interface CoinProps {
  icon: string;
  sColor: string;
  eColor: string;
}

export type CoinStyledProps = {
  $icon?: CoinProps["icon"];
  $sColor?: CoinProps["sColor"];
  $eColor?: CoinProps["eColor"];
};

export interface CardProps {
  children?: React.ReactNode;
}

export interface TagProps {
  color: string;
  text: string;
}

export type TagStyledProps = {
  $color: TagProps["color"];
};

export interface FilterProps {
  color: string;
  text: string;
  count: number;
  flag: boolean;
  setFilter: (filter: number) => void;
}

export type FilterStyledProps = {
  $color: FilterProps["color"];
  $flag: FilterProps["flag"];
};

export interface LabelProps {
  fColor: string;
  sColor?: string;
  label: string;
  price: number;
  flag?: boolean;
}

export type LabelStyledProps = {
  $fColor?: LabelProps["fColor"];
  $sColor?: LabelProps["sColor"];
  $flag?: LabelProps["flag"];
};

export interface CustomToolTipProps {
  filter: number;
}
