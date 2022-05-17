import type { NextPage } from 'next';
import { default as _Home } from '@domains/webtoon/home/Home';
import Header from '@components/layout/Header/Header';
import { QueryClient, dehydrate } from 'react-query';
import { getWebtoonsRanks, getWebtoonsByDay } from '@apis/webtoons';
import { webtoons } from '@apis/queryKeys';
import Modal from '@components/modal/onboard/Modal';
import FloatingBtn from '@components/button/FloatingBtn';
import { Mixpanel } from 'mixpanel';
import { useEffect } from 'react';

const Home: NextPage = () => {
  console.log(
    '        /   |   / | / /___  __// __  // __  / / | / /\n\
       / /| |  /  |/ /  /  /  / / / // / / / /  |/ / \n\
      / /_| | / / | /  /  /  / /_/ // /_/ / / / | /  \n\
     /_/  |_|/_/  |/  /__/   \\____/ \\____/ /_/  |/ ',
  );

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '홈 페이지',
    });
  }, []);

  return (
    <>
      <Header leftBtn="logo" rightBtn="menu" accessToken="" />
      <Modal />
      <_Home />
      <FloatingBtn />
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(webtoons.ranks(), getWebtoonsRanks);
  // TODO: 계속 타임아웃 나서 나중에 사용
  // await queryClient.prefetchQuery(webtoons.genres(), getWebtoonsGenres);
  await queryClient.prefetchQuery(webtoons.days('금'), () =>
    getWebtoonsByDay('금'),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
