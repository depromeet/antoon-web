import React from 'react';

import { useRecoilValue } from 'recoil';
import { searchAtom } from '@states/search';

import useAutoComplete from '@hooks/useAutoComplete';

import SearchDefaultImg from '@assets/images/SearchDefaultImg';
import SearchIcon from '@assets/icons/SearchIcon';

import { SearchResultWrap, SearchResult, Default } from './Search.style';

function Search({ webtoons }) {
  const data = webtoons;

  const searchInput = useRecoilValue(searchAtom);

  const autoComplete = useAutoComplete(searchInput);

  const searchResult = data.filter((data) => {
    if (searchInput == '') return;
    else return autoComplete.test(data.title);
  });

  return (
    <>
      {searchInput == '' ? (
        <Default>
          <SearchDefaultImg />
        </Default>
      ) : (
        searchResult.map((searchResult) => {
          return (
            <SearchResultWrap key={searchResult.id}>
              <>
                <SearchIcon stroke="#B6BCC7" />
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
