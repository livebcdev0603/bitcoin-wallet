import * as S from "./label.styled";
import { CurrencyFormatter } from "utils/functions";
import { LabelProps } from "utils/types";

const Label = ({
  fColor,
  sColor = "",
  label,
  price,
  flag = false,
}: LabelProps) => {
  return (
    <S.LabelContainer>
      <S.Icon $fColor={fColor} $sColor={sColor} />
      <S.Text $flag={flag}>
        {label}
        {CurrencyFormatter.format(price)}
      </S.Text>
    </S.LabelContainer>
  );
};

export default Label;
