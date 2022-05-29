import { useRouter } from 'next/router';

import BackIcon from '@assets/icons/BackIcon';
import DeleteIcon from '@assets/icons/DeleteIcon';

import {
  SearchBarHeaderWrap,
  LeftWrap,
  RightWrap,
  SearchBarWrap,
  SearchInput,
} from './SearchBar.style';

function SearchBar({
  searchInput,
  onChangeInput,
  onKeyDownEnter,
  resetInput,
  setSearchResults,
}: any) {
  const router = useRouter();

  const onClickSearchBar = () => {
    setSearchResults('');
  };

  return (
    <SearchBarHeaderWrap>
      <LeftWrap>
        <button onClick={() => router.back()}>
          <BackIcon />
        </button>
      </LeftWrap>

      <RightWrap>
        <SearchBarWrap>
          <SearchInput
            value={searchInput}
            onClick={onClickSearchBar}
            onChange={onChangeInput}
            onKeyDown={onKeyDownEnter}
            placeholder="웹툰 제목을 입력해주세요."
          />
          <DeleteIcon resetInput={resetInput} />
        </SearchBarWrap>
      </RightWrap>
    </SearchBarHeaderWrap>
  );
}

export default SearchBar;
