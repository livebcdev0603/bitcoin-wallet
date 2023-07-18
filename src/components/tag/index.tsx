import * as S from "./tag.styled";
import { TagProps } from "utils/types";

const Tag = ({ color, text }: TagProps) => {
  return <S.TagContainer $color={color}>{text}</S.TagContainer>;
};

export default Tag;
