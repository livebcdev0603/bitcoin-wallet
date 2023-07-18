import { IoIosArrowBack, IoMdMore } from "react-icons/io";

import * as S from "./header.styled";

const Header = () => {
  return (
    <S.HeaderContainer>
      <IoIosArrowBack />
      <S.HeaderTitle>Bitcoin Wallet</S.HeaderTitle>
      <IoMdMore />
    </S.HeaderContainer>
  );
};

export default Header;
