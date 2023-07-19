import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

import * as S from "./tooltip.styled";
import { CurrencyFormatter } from "utils/functions";

const CustomToolTip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  return active ? (
    <S.CustomToolTipContainer>
      <p>Date: {label}</p>
      <p>Price: {CurrencyFormatter.format(Number(payload?.[0].value))}</p>
    </S.CustomToolTipContainer>
  ) : null;
};

export default CustomToolTip;
