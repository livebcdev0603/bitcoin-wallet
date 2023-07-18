import styled from "styled-components";

import { CoinStyledProps } from "utils/types";

export const CoinContainer = styled.div<CoinStyledProps>`
  align-self: center;
  width: 163px;
  height: 163px;
  background: ${(props) =>
    "linear-gradient(90deg, " +
    props.$sColor +
    " 0%, " +
    props.$eColor +
    " 100%)"};
  border-radius: 50%;
`;

export const CoinContent = styled.div<CoinStyledProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$icon});
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
`;
