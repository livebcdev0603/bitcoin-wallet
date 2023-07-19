import { useState, useEffect, useMemo } from "react";
import { Area, AreaChart, Tooltip, ResponsiveContainer } from "recharts";

import C from "components";
import * as S from "./analysis.styled";
import { MARKET_CHART_ID, filterData } from "utils/consts";
import { HomeAnalysisProps } from "utils/types";

const Analysis = () => {
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
      const result = res.prices.map((item: [number, number]) => ({
        date: new Date(item[0]),
        price: item[1],
      }));
      setChartData(result);
      console.log(result);
    });
  }, [fetchData]);

  return (
    <S.AnalysisContainer>
      <S.FilterContainer>
        {filterData.map((item) => {
          return (
            <C.Filter
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
      <S.ChartContainer>
        <C.Card>
          <ResponsiveContainer height="150px">
            <AreaChart data={chartData}>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="linear-gradient(90deg, #ffc843 0%, #ff8f17 100%)"
                fill="red"
              />
            </AreaChart>
          </ResponsiveContainer>
        </C.Card>
      </S.ChartContainer>
    </S.AnalysisContainer>
  );
};

export default Analysis;
