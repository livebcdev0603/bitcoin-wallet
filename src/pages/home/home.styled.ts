import styled from "styled-components";

import { IntroStyledProps } from "utils/types";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1.625rem;
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 375px) {
    padding: 1.25rem;
  }
`;

export const Expanded = styled.div<IntroStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  opacity: ${(props) => (!props.$isExpanded ? "0" : "1")};
  height: ${(props) => (!props.$isExpanded ? "1.625rem" : "3.5rem")};
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 375px) {
    height: ${(props) => (!props.$isExpanded ? "1.25rem" : "2.5rem")};
  }
`;
