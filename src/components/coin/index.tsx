import * as S from "./coin.styled";
import { CoinProps } from "utils/types";

const Coin = ({ icon, sColor, eColor }: CoinProps) => {
  return (
    <S.CoinContainer $sColor={sColor} $eColor={eColor}>
      <S.CoinContent $icon={icon} />
    </S.CoinContainer>
  );
};

export default Coin;
