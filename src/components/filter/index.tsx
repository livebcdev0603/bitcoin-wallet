import * as S from "./filter.styled";
import { FilterProps } from "utils/types";

const Filter = ({ color, text, flag, setFilter }: FilterProps) => {
  return (
    <S.FilterContainer
      $color={color}
      $flag={flag}
      onClick={() => setFilter(text)}
    >
      {text}
    </S.FilterContainer>
  );
};

export default Filter;
