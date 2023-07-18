import styled from "styled-components";

import { TagStyledProps } from "utils/types";

export const TagContainer = styled.div<TagStyledProps>`
  background-color: ${(props) => props.color};
  border-radius: 100px;
  padding: 30px 50px;
  font-size: 53px;
  color: ${(props) => props.theme.colors.primary};
`;
