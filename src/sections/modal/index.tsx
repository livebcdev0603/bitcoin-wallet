import ReactDOM from "react-dom";

import * as S from "./modal.styled";
import { ModalProps } from "utils/types";
import { modalData } from "utils/consts";

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return isOpen
    ? ReactDOM.createPortal(
        <>
          <S.ModalWrapper>
            <S.ModalContainer>
              <S.ModalShadow onClick={() => setIsOpen(false)} />
              <S.ModalContent
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {modalData.map((item) => {
                  return (
                    <S.ModalItem
                      key={item.text}
                      onClick={() => setIsOpen(false)}
                    >
                      <S.ModalItemText>{item.text}</S.ModalItemText>
                      <item.icon />
                    </S.ModalItem>
                  );
                })}
              </S.ModalContent>
            </S.ModalContainer>
          </S.ModalWrapper>
        </>,
        document.getElementById("main") || document.createElement("div")
      )
    : null;
};

export default Modal;
