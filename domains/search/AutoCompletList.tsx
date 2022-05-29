import SearchIcon from '@assets/icons/SearchIcon';
import { useRouter } from 'next/router';

import { api } from '@apis/api';

import { AutoCompleteListWrap, AutoCompleteList } from './AutoComplet.style';

function AutoCompletList({
  autoCompleteList,
  setSearchResults,
  setSearchInput,
}: {
  autoCompleteList: { id: number; title: string };
  setSearchResults: any;
  setSearchInput: any;
}) {
  const router = useRouter();

  const onClickAutoCompleteList = async () => {
    try {
      const keywordResults = await api
        .post(`webtoons/search`, {
          json: {
            webtoons: [autoCompleteList.id],
          },
        })
        .json();

      setSearchInput(autoCompleteList.title);
      setSearchResults(keywordResults as any);
      router.push(`/search?keyword=${autoCompleteList.title}`);
    } catch (e) {
      return e;
    }
  };

  return (
    <AutoCompleteListWrap
      key={autoCompleteList.id}
      onClick={onClickAutoCompleteList}
    >
      <SearchIcon stroke="#B6BCC7" />
      <AutoCompleteList>{autoCompleteList.title}</AutoCompleteList>
    </AutoCompleteListWrap>
  );
}

export default AutoCompletList;
