import { IoIosArrowDown } from "react-icons/io";

import { Card, Coin, Tag } from "components";
import * as S from "./intro.styled";
import { HomeIntroProps } from "utils/types";

import Bitcoin from "assets/images/bitcoin.svg";

const HomeIntro = ({ isExpanded, setIsExpanded }: HomeIntroProps) => {
  return (
    <S.IntroContainer>
      <Card>
        <S.IntroCoin>
          <S.IntroCoinShape>
            <Coin icon={Bitcoin} sColor="#ffc843" eColor="#ff8f17" />
            <p>Bitcoin</p>
          </S.IntroCoinShape>
          <S.IntroCoinSymbol>BTC</S.IntroCoinSymbol>
        </S.IntroCoin>
        <S.IntroAmount>3.529020 BTC</S.IntroAmount>
        <S.IntroPrice>
          <S.IntroPriceText>$19.153 USD</S.IntroPriceText>
          <Tag color="#ee225d" text="- 2.32%" />
        </S.IntroPrice>
        <S.More $isExpanded={isExpanded}>
          <IoIosArrowDown onClick={() => setIsExpanded(!isExpanded)} />
        </S.More>
      </Card>
    </S.IntroContainer>
  );
};

export default HomeIntro;
