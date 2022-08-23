/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export function SearchInput() {
  return (
    <S.Container>
      <S.SearchInputStyle placeholder="Search.." />
      <FontAwesomeIcon
        css={S.IconContainer}
        icon={faSearch}
        width={15}
        height={15}
      />
    </S.Container>
  );
}
