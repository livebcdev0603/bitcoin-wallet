// section types
export interface HomeIntroProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type IntroStyledProps = {
  $isExpanded: HomeIntroProps["isExpanded"];
};

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

export interface CardProps {
  children?: React.ReactNode;
}

export interface TagProps {
  color: string;
  text: string;
}

export interface FilterProps {
  color: string;
  text: string;
  flag: boolean;
  setFilter: (filter: string) => void;
}

export type CoinStyledProps = {
  $icon?: CoinProps["icon"];
  $sColor?: CoinProps["sColor"];
  $eColor?: CoinProps["eColor"];
};

export type TagStyledProps = {
  $color: TagProps["color"];
};

export type FilterStyledProps = {
  $color: FilterProps["color"];
  $flag: FilterProps["flag"];
};
