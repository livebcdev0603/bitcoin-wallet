import styled from "styled-components";

import { IntroStyledProps } from "utils/types";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 90px;
  }
`;

export const IntroCoin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroCoinShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

export const IntroCoinName = styled.p`
  font-size: 53px;
  color: ${(props) => props.theme.colors.base};
`;

export const IntroCoinSymbol = styled.p`
  font-size: 53px;
  color: ${(props) => props.theme.colors.gray};
`;

export const IntroAmount = styled.div`
  font-size: 125px;
  color: ${(props) => props.theme.colors.base};
`;

export const IntroPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroPriceText = styled.p`
  font-size: 75px;
  color: ${(props) => props.theme.colors.gray};
`;

export const More = styled.div<IntroStyledProps>`
  align-self: center;

  & > svg {
    font-size: 90px;
    color: ${(props) => props.theme.colors.gray};
    transform: ${(props) => (props.$isExpanded ? "rotate(0)" : "rotateX(180deg)")};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
