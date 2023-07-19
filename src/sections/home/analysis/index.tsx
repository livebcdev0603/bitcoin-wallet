import { useState, useEffect, useMemo } from "react";
import { Area, AreaChart, Tooltip, ResponsiveContainer, XAxis } from "recharts";

import C from "components";
import * as S from "./analysis.styled";
import { getMaxPrice, getMinPrice, getPriceChange } from "utils/functions";
import { Currency, MARKET_CHART_ID } from "utils/consts";
import { HomeAnalysisProps, ChartDataProps } from "utils/types";

const Analysis = ({ filter }: HomeAnalysisProps) => {
  const [chartData, setChartData] = useState<ChartDataProps[]>();
  const [price, setPrice] = useState(0);
  const [lower, setLower] = useState(0);
  const [higher, setHigher] = useState(0);

  const fetchData = useMemo(() => {
    const interval = filter === 1 ? "hourly" : "daily";

    return fetch(
      `https://api.coingecko.com/api/v3/coins/${MARKET_CHART_ID}/market_chart?vs_currency=${Currency}&days=${filter}&interval=${interval}`
    ).then((res) => {
      return res.json();
    });
  }, [filter]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData;
        const result = res.prices.map((item: [number, number]) => ({
          date: getPriceChange(item[0], filter),
          price: item[1],
        }));
        setChartData(result);
        setLower(getMinPrice(result));
        setHigher(getMaxPrice(result));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchData, filter]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${MARKET_CHART_ID}&vs_currencies=${Currency}`
        ).then((res) => res.json());
        setPrice(result.bitcoin.usd);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <S.AnalysisContainer>
      <C.Card>
        <S.Labels>
          <C.Label fColor="#ee225d" label="Lower: " price={lower} flag />
          <C.Label fColor="#1ec070" label="Higher: " price={higher} flag />
        </S.Labels>
        <S.Price>
          <C.Label
            fColor="linear-gradient(90deg, #ff8f17 0%, #ffc843 100%)"
            sColor="#ffe9c0"
            label="1BTC="
            price={price}
          />
        </S.Price>
        <ResponsiveContainer width={"100%"} height={150}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff8f17" stopOpacity={1} />
                <stop offset="100%" stopColor="#ffc843" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Tooltip content={<C.CustomToolTip filter={filter} />} />
            <XAxis dataKey="date" height={0} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="url(#colorUv)"
              strokeWidth={5}
              fill="#FFF7EE"
            />
          </AreaChart>
        </ResponsiveContainer>
      </C.Card>
    </S.AnalysisContainer>
  );
};

export default Analysis;
