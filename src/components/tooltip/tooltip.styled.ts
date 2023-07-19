import { styled } from "styled-components";

export const CustomToolTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: ${(props) => `0 5px 10px 0 ` + props.theme.colors.base};
  padding: 1rem 1rem;
`;
