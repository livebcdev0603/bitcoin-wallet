import { useState } from "react";

import HomeSection from "sections/home";
import * as S from "./home.styled";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.HomeContainer>
      <HomeSection.Intro
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <S.Expanded $isExpanded={isExpanded}>
        <HomeSection.Analysis />
        <HomeSection.Action />
      </S.Expanded>
    </S.HomeContainer>
  );
};

export default Home;
