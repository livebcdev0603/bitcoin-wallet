import { useState } from "react";

import HomeSection from "sections/home";
import * as S from "./home.styled";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState(1);

  return (
    <S.HomeContainer>
      <HomeSection.Intro
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <S.Expanded $isExpanded={isExpanded}>
        <HomeSection.Filter filter={filter} setFilter={setFilter} />
      </S.Expanded>
      <HomeSection.Analysis filter={filter} />
      <HomeSection.Action />
    </S.HomeContainer>
  );
};

export default Home;
