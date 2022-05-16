import { QueryClient, dehydrate } from 'react-query';

import { webtoons } from '@apis/queryKeys';
import { getWebtoons } from '@apis/webtoons';

import Header from '@components/layout/Header/Header';

import SearchWrap from '@domains/search/Search';
import { Mixpanel } from 'mixpanel';
import { useEffect } from 'react';

function Search(props: {
  dehydratedState: { queries: { state: { data: { webtoons: any } } }[] };
}) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '검색 페이지',
    });
  });

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
