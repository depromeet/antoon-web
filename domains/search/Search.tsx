import React from 'react';

import { useRecoilValue } from 'recoil';
import { searchAtom } from '@states/search';

import useAutoComplete from '@hooks/useAutoComplete';

import SearchIcon from '@assets/svgs/SearchIcon';
import Logo from '@assets/svgs/Logo';

import { webtoons } from './Search.data';

import { SearchResultWrap, SearchResult, Default } from './Search.style';

function Search() {
  const data = webtoons;

  const searchInput = useRecoilValue(searchAtom);

  const autoComplete = useAutoComplete(searchInput);

  const searchResult = data.filter((data) => {
    if (searchInput == '') return;
    else
      return (
        autoComplete.test(data['title']) || autoComplete.test(data['author'])
      );
  });

  return (
    <>
      {searchInput == '' ? (
        <Default>
          <Logo />
        </Default>
      ) : (
        searchResult.map((searchResult) => {
          return (
            <SearchResultWrap key={searchResult.id}>
              <>
                <SearchIcon stroke="#AEAEAE" />
                <SearchResult>{searchResult.title}</SearchResult>
              </>
            </SearchResultWrap>
          );
        })
      )}
    </>
  );
}

export default Search;
