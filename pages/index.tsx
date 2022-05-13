import type { NextPage } from 'next';
import { default as _Home } from '@domains/webtoon/home/Home';
import Header from '@components/layout/Header/Header';
import { QueryClient, dehydrate } from 'react-query';
import { getWebtoons, useGetWebtoonById, useGetWebtoons } from '@apis/webtoons';
import { webtoons } from '@apis/queryKeys';

const Home: NextPage = () => {
  console.log(
    '        /   |   / | / /___  __// __  // __  / / | / /\n\
       / /| |  /  |/ /  /  /  / / / // / / / /  |/ / \n\
      / /_| | / / | /  /  /  / /_/ // /_/ / / / | /  \n\
     /_/  |_|/_/  |/  /__/   \\____/ \\____/ /_/  |/ ',
  );

  // SSR;
  const { data: webtoons, isSuccess, isLoading, isError } = useGetWebtoons();
  console.log('webtoons', webtoons, isSuccess, isLoading, isError);

  const webtoonId = 1;

  // CSR;
  const { data: webtoon } = useGetWebtoonById(webtoonId);
  console.log('webtoon', webtoon);

  return (
    <>
      <Header leftBtn="logo" rightBtn="menu" accessToken="" />
      <_Home />
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // SSR prefetch
  await queryClient.prefetchQuery(webtoons.all, getWebtoons);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
