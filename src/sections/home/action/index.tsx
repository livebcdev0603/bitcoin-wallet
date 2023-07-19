import { Card, Coin } from "components";
import * as S from "./action.styled";

import Dollar from "assets/images/dollar.svg";

const HomeAction = () => {
  return (
    <S.ActionContainer>
      <Card>
        <Coin icon={Dollar} sColor="#1d72f1" eColor="#17c8fc" />
        <p>Buy BTC</p>
      </Card>
      <Card>
        <Coin icon={Dollar} sColor="#ff677c" eColor="#fb23a2" />
        <p>Sell BTC</p>
      </Card>
    </S.ActionContainer>
  );
};

export default HomeAction;
