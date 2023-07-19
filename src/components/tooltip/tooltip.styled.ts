import { styled } from "styled-components";

export const CustomToolTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: ${(props) => `0 5px 10px 0 ` + props.theme.colors.base};
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 375px) {
    padding: 0.5rem 0.5rem;
  }
`;
