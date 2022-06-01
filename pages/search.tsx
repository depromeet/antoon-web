import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { QueryClient, dehydrate } from 'react-query';
import { Mixpanel } from 'mixpanel';

import { webtoons } from '@apis/queryKeys';
import { getWebtoons } from '@apis/webtoons';

import SearchWrap from '@domains/search/Search';

function Search(props: any) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '검색 페이지',
    });
  });

  const webtoons =
    props && props.dehydratedState.queries[0].state.data.webtoons;

  return <SearchWrap webtoons={webtoons} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(webtoons.all, getWebtoons);

  if (query.keyword) {
    return {
      redirect: {
        destination: '/search',
        permanent: false,
      },
    };
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Search;
