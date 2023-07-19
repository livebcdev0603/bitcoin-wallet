import C from "components";
import * as S from "./action.styled";

import Dollar from "assets/images/dollar.svg";

const Action = () => {
  return (
    <S.ActionContainer>
      <C.Card>
        <C.Coin icon={Dollar} sColor="#1d72f1" eColor="#17c8fc" />
        <p>Buy BTC</p>
      </C.Card>
      <C.Card>
        <C.Coin icon={Dollar} sColor="#ff677c" eColor="#fb23a2" />
        <p>Sell BTC</p>
      </C.Card>
    </S.ActionContainer>
  );
};

export default Action;
