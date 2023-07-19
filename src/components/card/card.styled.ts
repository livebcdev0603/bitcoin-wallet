import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
`;
