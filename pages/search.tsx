import Header from '@components/layout/Header/Header';
import SearchWrap from '@domains/search/Search';

function Search() {
  return (
    <>
      <Header rightBtn="searchBar" />
      <SearchWrap />
    </>
  );
}

export default Search;
