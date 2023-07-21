import ReactDOM from "react-dom";

import * as S from "./modal.styled";
import { MODAL_DATA } from "utils/consts";
import { ModalProps } from "utils/types";

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return ReactDOM.createPortal(
    <S.ModalWrapper $isOpen={isOpen}>
      <S.ModalContainer>
        <S.ModalShadow onClick={() => setIsOpen(false)} />
        <S.ModalContent
          onClick={(e) => {
            e.stopPropagation();
          }}
          $isOpen={isOpen}
        >
          {MODAL_DATA.map((item) => {
            return (
              <S.ModalItem key={item.text} onClick={() => setIsOpen(false)}>
                <S.ModalItemText>{item.text}</S.ModalItemText>
                <item.icon />
              </S.ModalItem>
            );
          })}
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById("main") || document.createElement("div")
  );
};

export default Modal;
