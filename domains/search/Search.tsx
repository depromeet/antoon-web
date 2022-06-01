import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import { api } from '@apis/api';

import autoComplete from 'utils/autoComplete';

import SearchDefaultImg from '@assets/images/SearchDefaultImg';

import SearchBar from './SearchBar';
import AutoCompletList from './AutoCompletList';
import SearchResult from './SearchResult';

import { Default } from './Search.style';

import { WebtoonSearch } from '@_types/webtoon-type';

function Search({ webtoons }: { webtoons: [] }) {
  const router = useRouter();

  const data = webtoons;

  const [searchInput, setSearchInput] = useState('');

  const onChangeInput = useCallback(
    (e) => {
      setSearchInput(e.target.value);
    },
    [setSearchInput],
  );

  const resetInput = useCallback(() => {
    setSearchInput('');
  }, []);

  const autoCompleteLists = data.filter(
    (data: { id: number; title: string }) => {
      if (searchInput == '') return;
      else {
        return autoComplete(searchInput).test(data.title);
      }
    },
  );

  const searchLists = [] as number[];

  const [searchResults, setSearchResults] = useState('') as any;

  const onKeyDownEnter = async (e: any) => {
    if (e.key == 'Enter' && searchLists.length > 0) {
      try {
        const keywordResults = await api
          .post(`webtoons/search`, {
            json: {
              webtoons: searchLists,
            },
          })
          .json();

        setSearchResults(keywordResults as any);
        router.replace('/search', `/search?keyword=${searchInput}`, {
          shallow: true,
        });
      } catch (e) {
        return e;
      }
    } else {
      setSearchResults('');
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        onChangeInput={onChangeInput}
        onKeyDownEnter={onKeyDownEnter}
        resetInput={resetInput}
        setSearchResults={setSearchResults}
      />
      {searchInput == '' ? (
        <Default>
          <SearchDefaultImg />
        </Default>
      ) : searchResults !== '' ? (
        searchResults.webtoons.map((searchResults: WebtoonSearch) => {
          return (
            <SearchResult
              key={searchResults.webtoonId}
              searchResults={searchResults}
            />
          );
        })
      ) : (
        autoCompleteLists.map(
          (autoCompleteList: { id: number; title: string }) => {
            searchLists.push(autoCompleteList.id);
            return (
              <AutoCompletList
                key={autoCompleteList.id}
                autoCompleteList={autoCompleteList}
                setSearchResults={setSearchResults}
                setSearchInput={setSearchInput}
              />
            );
          },
        )
      )}
    </>
  );
}

export default Search;
