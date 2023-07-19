import styled from "styled-components";

import { HeaderStyeldProps } from "utils/types";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.75rem 2.25rem;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 375px) {
    padding: 1rem 1.5rem;
  }
`;

export const HeaderMore = styled.div<HeaderStyeldProps>`
  z-index: 10;

  & > svg {
    color: ${(props) => props.$isOpen && props.theme.colors.background};
    transform: ${(props) => (!props.$isOpen ? "rotate(0)" : "rotate(90deg)")};
    transition: all 0.3s ease-in-out;
  }
`;
