import { useState } from "react";

import { Filter } from "components";
import * as S from "./analysis.styled";
import { filterData } from "utils/consts";

const HomeAnalysis = () => {
  const [filter, setFilter] = useState("Day");

  return (
    <S.AnalysisContainer>
      <S.FilterContainer>
        {filterData.map((item) => {
          return (
            <Filter
              key={item.symbol}
              color="#aeb8c4"
              text={item.symbol}
              flag={filter === item.symbol}
              setFilter={setFilter}
            />
          );
        })}
      </S.FilterContainer>
    </S.AnalysisContainer>
  );
};

export default HomeAnalysis;
