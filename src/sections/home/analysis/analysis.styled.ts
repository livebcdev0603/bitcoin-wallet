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
  margin-bottom: 1.625rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 1.25rem;
  }
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem;

  @media screen and (max-width: 375px) {
    padding: 1rem;
  }
`;

export const Price = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;

  @media screen and (max-width: 375px) {
    left: 1rem;
    bottom: 1rem;
  }
`;
