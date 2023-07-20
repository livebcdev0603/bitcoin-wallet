import C from "components";
import * as S from "./filter.styled";
import { FILTER_DATA } from "utils/consts";
import { HomeFilterProps } from "utils/types";

const Filter = ({ filter, setFilter }: HomeFilterProps) => {
  return (
    <S.FilterContainer>
      {FILTER_DATA.map((item) => {
        return (
          <C.Filter
            key={item.symbol}
            color="#aeb8c4"
            text={item.symbol}
            count={item.count}
            flag={filter === item.count}
            setFilter={setFilter}
          />
        );
      })}
    </S.FilterContainer>
  );
};

export default Filter;
