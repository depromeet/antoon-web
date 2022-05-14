import React from 'react';

import { useRecoilValue } from 'recoil';
import { searchAtom } from '@states/search';

import useAutoComplete from '@hooks/useAutoComplete';

import SearchDefaultImg from '@assets/images/SearchDefaultImg';
import SearchIcon from '@assets/icons/SearchIcon';

import { SearchResultWrap, SearchResult, Default } from './Search.style';

function Search({ webtoons }: { webtoons: any }) {
  const data = webtoons;

  const searchInput = useRecoilValue(searchAtom);

  const autoComplete = useAutoComplete(searchInput);

  const searchResult = data.filter((data: { title: string }) => {
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
        searchResult.map(
          (searchResult: {
            id: React.Key | null | undefined;
            title:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <SearchResultWrap key={searchResult.id}>
                <>
                  <SearchIcon stroke="#B6BCC7" />
                  <SearchResult>{searchResult.title}</SearchResult>
                </>
              </SearchResultWrap>
            );
          },
        )
      )}
    </>
  );
}

export default Search;
