import styled from "styled-components";

import { IntroStyledProps } from "utils/types";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 90px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Expanded = styled.div<IntroStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  opacity: ${(props) => (!props.$isExpanded ? "0" : "1")};
  height: ${(props) => (!props.$isExpanded ? "0" : "fit-content")};
  transition: all 0.5s ease-out;
`;
