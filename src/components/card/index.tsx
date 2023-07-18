import * as S from "./card.styled";
import { CardProps } from "utils/types";

const Card = ({children}: CardProps) => {
  return <S.CardContainer>{children}</S.CardContainer>;
};

export default Card;
