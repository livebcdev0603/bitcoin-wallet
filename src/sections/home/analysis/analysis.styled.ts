import { styled } from "styled-components";

export const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0.75rem 0;

  @media screen and (max-width: 375px) {
    margin: 0.5rem 0;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  margin: 0.75rem 0 1.625rem 0;
`;
