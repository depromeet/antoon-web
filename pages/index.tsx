import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import Modal from '@components/modal/onboard/Modal';
import { default as _Home } from '@domains/webtoon/home/Home';
import FloatingBtn from '@components/button/FloatingBtn';

import { api } from '@apis/api';

import { useGetUserInformation } from '@apis/user';

const Home: NextPage = () => {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '홈 페이지',
    });
  }, []);

  const accessToken = getCookie('Access');
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  const { data: user, isSuccess } = useGetUserInformation();

  return (
    <>
      {isSuccess ? (
        <Header leftBtn="logo" rightBtn="menu" imageUrl={user?.imageUrl} />
      ) : (
        <Header leftBtn="logo" rightBtn="menu" />
      )}
      <Modal />
      <_Home />
      <FloatingBtn />
    </>
  );
};

export default Home;
