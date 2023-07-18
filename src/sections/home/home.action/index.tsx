import { Card, Coin } from "components";
import * as S from "./action.styled";

import Dollar from "assets/images/dollar.svg";

const HomeAction = () => {
  return (
    <S.ActionContainer>
      <Card>
        <Coin icon={Dollar} sColor="#1d72f1" eColor="#17c8fc" />
        <S.ActionText>Buy BTC</S.ActionText>
      </Card>
      <Card>
        <Coin icon={Dollar} sColor="#ff677c" eColor="#fb23a2" />
        <S.ActionText>Sell BTC</S.ActionText>
      </Card>
    </S.ActionContainer>
  );
};

export default HomeAction;
