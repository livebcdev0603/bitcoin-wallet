import styled from "styled-components";
import { FooterStyledProps } from "utils/types";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 3.25rem;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 375px) {
    padding: 0.75rem 2.5rem;
  }
`;

export const FooterItem = styled.div<FooterStyledProps>`
  & > svg {
    color: ${(props) => props.$flag && props.theme.colors.base};
  }
`;
