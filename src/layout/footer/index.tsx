import { useState } from "react";

import * as S from "./footer.styled";
import { footerData } from "utils/consts";

const Footer = () => {
  const [active, setActive] = useState("wallet");

  return (
    <S.FooterContainer>
      {footerData.map((item) => {
        return (
          <S.FooterItem
            key={item.symbol}
            $flag={active === item.symbol}
            onClick={() => setActive(item.symbol)}
          >
            <item.icon />
          </S.FooterItem>
        );
      })}
    </S.FooterContainer>
  );
};

export default Footer;
