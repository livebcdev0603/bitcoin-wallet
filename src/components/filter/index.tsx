import * as S from "./filter.styled";
import { FilterProps } from "utils/types";

const Filter = ({ color, text, count, flag, setFilter }: FilterProps) => {
  return (
    <S.FilterContainer
      $color={color}
      $flag={flag}
      onClick={() => setFilter(count)}
    >
      <p>{text}</p>
    </S.FilterContainer>
  );
};

export default Filter;
