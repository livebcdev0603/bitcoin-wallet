import { IoIosArrowDown } from "react-icons/io";

import C from "components";
import * as S from "./intro.styled";
import { HomeIntroProps } from "utils/types";

import Bitcoin from "assets/images/bitcoin.svg";

const Intro = ({ isExpanded, setIsExpanded }: HomeIntroProps) => {
  return (
    <S.IntroContainer>
      <C.Card>
        <S.IntroCoin>
          <S.IntroCoinShape>
            <C.Coin icon={Bitcoin} sColor="#ffc843" eColor="#ff8f17" />
            <p>Bitcoin</p>
          </S.IntroCoinShape>
          <S.IntroCoinSymbol>BTC</S.IntroCoinSymbol>
        </S.IntroCoin>
        <S.IntroAmount>3.529020 BTC</S.IntroAmount>
        <S.IntroPrice>
          <S.IntroPriceText>$19.153 USD</S.IntroPriceText>
          <C.Tag color="#ee225d" text="- 2.32%" />
        </S.IntroPrice>
        <S.More $isExpanded={isExpanded}>
          <IoIosArrowDown onClick={() => setIsExpanded(!isExpanded)} />
        </S.More>
      </C.Card>
    </S.IntroContainer>
  );
};

export default Intro;
