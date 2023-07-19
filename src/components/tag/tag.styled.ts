import styled from "styled-components";

import { TagStyledProps } from "utils/types";

export const TagContainer = styled.div<TagStyledProps>`
  padding: 0.5rem 0.875rem;
  background-color: ${(props) => props.$color};
  border-radius: 2rem;

  & > p {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: 375px) {
    padding: 0.25rem 0.75rem;
  }
`;
