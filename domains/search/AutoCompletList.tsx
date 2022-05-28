import SearchIcon from '@assets/icons/SearchIcon';

import { AutoCompleteListWrap, AutoCompleteList } from './AutoComplet.style';

function AutoCompletList({
  autoCompleteList,
}: {
  autoCompleteList: { id: number; title: string };
}) {
  return (
    <AutoCompleteListWrap key={autoCompleteList.id}>
      <SearchIcon stroke="#B6BCC7" />
      <AutoCompleteList>{autoCompleteList.title}</AutoCompleteList>
    </AutoCompleteListWrap>
  );
}

export default AutoCompletList;
