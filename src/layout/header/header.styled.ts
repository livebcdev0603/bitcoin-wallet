import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 95px 120px;
  background-color: ${(props) => props.theme.colors.primary};

  & > svg {
    font-size: 90px;
    color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 108px;
  color: #4c5968;
`;
