import styled from "styled-components";

import { FilterStyledProps } from "utils/types";

export const FilterContainer = styled.div<FilterStyledProps>`
  padding: 0.5rem 0.875rem;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.$flag ? props.$color : props.theme.colors.background};
  cursor: pointer;

  & > p {
    color: ${(props) =>
      props.$flag ? props.theme.colors.primary : props.theme.colors.gray};
    &:hover {
      color: ${(props) => props.theme.colors.pink};
    }
  }

  @media screen and (max-width: 375px) {
    padding: 0.25rem 0.75rem;
  }
`;
