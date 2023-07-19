import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  & > div {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media screen and (max-width: 375px) {
    gap: 1rem;

    & > div {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

export const ActionText = styled.p`
  margin-top: 1rem;

  @media screen and (max-width: 375px) {
    margin-top: 0.75rem;
  }
`;
