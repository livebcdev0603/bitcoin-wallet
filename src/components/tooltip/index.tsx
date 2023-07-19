import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

import * as S from "./tooltip.styled";
import { CurrencyFormatter } from "utils/functions";
import { CustomToolTipProps } from "utils/types";

const CustomToolTip = ({
  filter,
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType> & CustomToolTipProps) => {
  return active ? (
    <S.CustomToolTipContainer>
      {filter === 1 ? <p>{label} hours ago</p> : <p>{label} days ago</p>}
      <p>Price: {CurrencyFormatter.format(Number(payload?.[0].value))}</p>
    </S.CustomToolTipContainer>
  ) : null;
};

export default CustomToolTip;
