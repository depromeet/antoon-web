import Header from '@components/layout/Header';
import _Search from '@domains/search/Search';

function Search() {
  return (
    <>
      <Header rightBtn="search" />
      <_Search />
    </>
  );
}

export default Search;
