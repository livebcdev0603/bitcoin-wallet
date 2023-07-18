import styled from "styled-components";

import { FilterStyledProps } from "utils/types";

export const FilterContainer = styled.div<FilterStyledProps>`
  padding: 30px 50px;
  border-radius: 100px;
  background-color: ${(props) => props.$flag? props.$color: props.theme.colors.background};
  font-size: 53px;
  color: ${(props) => props.$flag? props.theme.colors.primary: props.theme.colors.gray};
`;
