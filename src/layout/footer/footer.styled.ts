import styled from "styled-components";
import { FooterStyledProps } from "utils/types";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 70px 180px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const FooterItem = styled.div<FooterStyledProps>`
  & > svg {
    font-size: 90px;
    color: ${(props) => props.$flag? props.theme.colors.base: props.theme.colors.gray};
    cursor: pointer;
  }
`;
