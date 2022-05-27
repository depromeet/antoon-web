import React from 'react';

import { useRecoilValue } from 'recoil';
import { searchAtom } from '@states/search';

import autoComplete from 'utils/autoComplete';

import SearchDefaultImg from '@assets/images/SearchDefaultImg';
import SearchIcon from '@assets/icons/SearchIcon';

import { SearchResultWrap, SearchResult, Default } from './Search.style';

function Search({ webtoons }: { webtoons: [] }) {
  const data = webtoons;

  const searchInput = useRecoilValue(searchAtom);

  const searchResult = data.filter((data: { title: string }) => {
    if (searchInput == '') return;
    else return autoComplete(searchInput).test(data.title);
  });

  return (
    <>
      {searchInput == '' ? (
        <Default>
          <SearchDefaultImg />
        </Default>
      ) : (
        searchResult.map((searchResult: { id: number; title: string }) => {
          return (
            <SearchResultWrap key={searchResult.id}>
              <SearchIcon stroke="#B6BCC7" />
              <SearchResult>{searchResult.title}</SearchResult>
            </SearchResultWrap>
          );
        })
      )}
    </>
  );
}

export default Search;
