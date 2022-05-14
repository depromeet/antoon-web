import { QueryClient, dehydrate } from 'react-query';

import { webtoons } from '@apis/queryKeys';
import { getWebtoons } from '@apis/webtoons';

import Header from '@components/layout/Header/Header';

import SearchWrap from '@domains/search/Search';

function Search(props: {
  dehydratedState: { queries: { state: { data: { webtoons: any } } }[] };
}) {
  const webtoons =
    props && props.dehydratedState.queries[0].state.data.webtoons;

  return (
    <>
      <Header rightBtn="searchBar" />
      <SearchWrap webtoons={webtoons} />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(webtoons.all, getWebtoons);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Search;
