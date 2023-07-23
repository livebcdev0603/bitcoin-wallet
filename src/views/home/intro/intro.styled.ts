import styled from "styled-components";

import { IntroStyledProps } from "utils/types";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 1.625rem;
  }

  @media screen and (max-width: 375px) {
    & > div {
      padding: 1.25rem;
    }
  }
`;

export const IntroCoin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 1rem;
  }
`;

export const IntroCoinShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;

  @media screen and (max-width: 375px) {
    gap: 1rem;
  }
`;

export const IntroCoinSymbol = styled.p`
  color: ${(props) => props.theme.colors.gray};
`;

export const IntroAmount = styled.div`
  font-size: ${(props) => props.theme.fonts.size.large.lg};
  color: ${(props) => props.theme.colors.base};

  @media screen and (max-width: 375px) {
    font-size: ${(props) => props.theme.fonts.size.large.sm};
  }
`;

export const IntroPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.125rem;
  margin-bottom: 1.875rem;

  @media screen and (max-width: 375px) {
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const IntroPriceText = styled.p`
  font-size: ${(props) => props.theme.fonts.size.normal.lg};
  color: ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 375px) {
    font-size: ${(props) => props.theme.fonts.size.normal.sm};
  }
`;

export const More = styled.div<IntroStyledProps>`
  align-self: center;

  & > svg {
    transform: ${(props) =>
      !props.$isExpanded ? "rotate(0)" : "rotateX(180deg)"};
    transition: all 0.3s ease-in-out;
  }
`;
