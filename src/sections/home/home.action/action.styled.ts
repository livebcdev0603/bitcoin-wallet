import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 87px;

  & > div {
    padding-top: 85px;
    padding-bottom: 85px;
  }
`;

export const ActionText = styled.div`
  margin-top: 54px;
  font-size: 53px;
  color: ${(props) => props.theme.colors.base};
  text-align: center;
`;
