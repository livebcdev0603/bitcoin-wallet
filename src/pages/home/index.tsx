import { useState } from "react";

import HomeView from "views/home";
import * as S from "./home.styled";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState(1);

  return (
    <S.HomeContainer>
      <HomeView.Intro
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <S.Expanded $isExpanded={isExpanded}>
        <HomeView.Filter filter={filter} setFilter={setFilter} />
      </S.Expanded>
      <HomeView.Analysis filter={filter} />
      <HomeView.Action />
    </S.HomeContainer>
  );
};

export default Home;
