import { FaWallet, FaBell, FaRegSun, FaCompass } from "react-icons/fa";

import * as S from "./footer.styled";

const Footer = () => {
  return (
    <S.FooterContainer>
      <FaWallet />
      <FaCompass />
      <FaBell />
      <FaRegSun />
    </S.FooterContainer>
  );
};

export default Footer;
