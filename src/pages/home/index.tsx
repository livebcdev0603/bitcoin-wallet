import { useState } from "react";

import { HomeAction, HomeAnalysis, HomeIntro } from "sections/home";
import * as S from "./home.styled";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.HomeContainer>
      <HomeIntro isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <S.Expanded $isExpanded={isExpanded}>
        <HomeAnalysis />
        <HomeAction />
      </S.Expanded>
    </S.HomeContainer>
  );
};

export default Home;
