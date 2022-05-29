import type { NextPage } from 'next';
import { default as _Home } from '@domains/webtoon/home/Home';
import Header from '@components/layout/Header/Header';
import { QueryClient, dehydrate } from 'react-query';
import {
  getWebtoonsRanks,
  getWebtoonsRecommendation,
  getWebtoonsGenresTop3,
  getWebtoonsRising,
} from '@apis/webtoons';
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
      <Header leftBtn="logo" rightBtn="menu" />
      <Modal />
      <_Home />
      <FloatingBtn />
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(webtoons.ranks(), getWebtoonsRanks);
  await queryClient.prefetchQuery(webtoons.rising(), getWebtoonsRising);
  await queryClient.prefetchQuery(
    webtoons.recommendation(),
    getWebtoonsRecommendation,
  );
  await queryClient.prefetchQuery(webtoons.genresTop3(), getWebtoonsGenresTop3);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
