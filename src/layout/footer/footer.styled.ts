import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 70px 180px;
  background-color: ${(props) => props.theme.colors.primary};
  
  & > svg {
    font-size: 90px;
    color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  }
`;
