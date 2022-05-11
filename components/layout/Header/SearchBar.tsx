import React, { useCallback } from 'react';

import { useRecoilState, useResetRecoilState } from 'recoil';
import { searchAtom } from '@states/search';

import DeleteIcon from '@assets/icons/DeleteIcon';

import { SearchBarWrap, SearchInput } from './SearchBar.style';

function SearchBar() {
  const [searchInput, setSearchInput] = useRecoilState(searchAtom);

  const onChangeInput = useCallback(
    (e) => {
      setSearchInput(e.target.value);
    },
    [setSearchInput],
  );

  const resetInput = useResetRecoilState(searchAtom);

  return (
    <SearchBarWrap>
      <SearchInput
        value={searchInput}
        onChange={onChangeInput}
        placeholder="웹툰 제목을 입력해주세요."
      />
      <DeleteIcon onClick={resetInput} />
    </SearchBarWrap>
  );
}

export default SearchBar;
