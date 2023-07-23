import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  & > div {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    cursor: pointer;

    & > p {
      margin-top: 1rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.gray};

      & > p {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media screen and (max-width: 375px) {
    gap: 1rem;

    & > div {
      padding-top: 1rem;
      padding-bottom: 1rem;

      & > p {
        margin-top: 0.75rem;
      }
    }
  }
`;
