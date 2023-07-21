import styled from "styled-components";

import { ModalStyledProps } from "utils/types";

export const ModalWrapper = styled.div<ModalStyledProps>`
  position: absolute;
  width: 100%;
  height: ${(props) => (!props.$isOpen ? "0" : "100%")};
  transition: none;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ModalShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

export const ModalContent = styled.div<ModalStyledProps>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  position: absolute;
  width: 50%;
  height: ${(props) => (!props.$isOpen ? "0" : "25%")};
  top: 5rem;
  right: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  overflow: hidden;
  z-index: 10;

  & > :not(:last-child) {
    border-bottom: ${(props) => "1px solid" + props.theme.colors.base};
  }

  @media screen and (max-width: 375px) {
    top: 3.5rem;
  }
`;

export const ModalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 0.875rem;
  padding: 0.875rem 0;
  cursor: pointer;

  &:hover {
    & > p,
    svg {
      color: ${(props) => props.theme.colors.pink};
    }
  }

  @media screen and (max-width: 375px) {
    margin: 0 0.75rem;
    padding: 0.5rem 0;
  }
`;

export const ModalItemText = styled.p`
  font-size: ${(props) => props.theme.fonts.size.normal.lg};

  @media screen and (max-width: 375px) {
    font-size: ${(props) => props.theme.fonts.size.normal.sm};
  }
`;
