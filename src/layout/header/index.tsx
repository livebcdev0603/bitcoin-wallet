import { useState } from "react";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";

import Modal from "sections/modal";
import * as S from "./header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.HeaderContainer>
        <IoIosArrowBack />
        <h1>Bitcoin Wallet</h1>
        <S.HeaderMore $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <IoMdMore />
        </S.HeaderMore>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.HeaderContainer>
    </>
  );
};

export default Header;
