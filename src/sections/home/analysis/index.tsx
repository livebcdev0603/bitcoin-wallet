import { useState, useEffect, useMemo } from "react";

import { Filter } from "components";
import * as S from "./analysis.styled";
import { MARKET_CHART_ID, filterData } from "utils/consts";
import { HomeAnalysisProps } from "utils/types";

const HomeAnalysis = () => {
  const [filter, setFilter] = useState(1);
  const [chartData, setChartData] = useState<HomeAnalysisProps[]>();

  const fetchData = useMemo(() => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/${MARKET_CHART_ID}/market_chart?vs_currency=usd&days=${filter}`
    ).then((res) => {
      return res.json();
    });
  }, [filter]);

  useEffect(() => {
    fetchData.then((res) => {
      const result = res.prices
        ? res.prices.map((item: [number, number]) => ({
            date: new Date(item[0]),
            price: item[1],
          }))
        : [];
      setChartData(result);
      console.log(result)
    });
  }, [fetchData]);

  return (
    <S.AnalysisContainer>
      <S.FilterContainer>
        {filterData.map((item) => {
          return (
            <Filter
              key={item.symbol}
              color="#aeb8c4"
              text={item.symbol}
              count={item.count}
              flag={filter === item.count}
              setFilter={setFilter}
            />
          );
        })}
      </S.FilterContainer>
      <S.ChatContainer></S.ChatContainer>
    </S.AnalysisContainer>
  );
};

export default HomeAnalysis;
