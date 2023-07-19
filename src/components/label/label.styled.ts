import styled from "styled-components";

import { LabelStyledProps } from "utils/types";

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span<LabelStyledProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;

  ${(props) =>
    props.$sColor === ""
      ? `background-color: ${props.$fColor};`
      : `background: ${props.$fColor};
         border-color: ${props.$sColor};
         box-sizing: content-box;
         border-width: 5px;
         border-style: solid;`}
`;

export const Text = styled.p<LabelStyledProps>`
  color: ${(props) => props.$flag && props.theme.colors.gray};
`;
