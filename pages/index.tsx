import type { NextPage } from 'next';
import { default as _Home } from '@domains/webtoon/home/Home';
import Header from '@components/layout/Header';
import { QueryClient, dehydrate } from 'react-query';
import { getWebtoons, useGetWebtoons } from '@apis/webtoons';
import { webtoons } from '@apis/queryKeys';

const Home: NextPage = () => {
  console.log(
    '        /   |   / | / /___  __// __  // __  / / | / /\n\
       / /| |  /  |/ /  /  /  / / / // / / / /  |/ / \n\
      / /_| | / / | /  /  /  / /_/ // /_/ / / / | /  \n\
     /_/  |_|/_/  |/  /__/   \\____/ \\____/ /_/  |/ ',
  );

  const { data, isSuccess, isLoading, isError } = useGetWebtoons();
  console.log('webtoons', data, isSuccess, isLoading, isError);

  return (
    <>
      <Header leftBtn="logo" rightBtn="menu" />
      <_Home />
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(webtoons.all, getWebtoons);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
