import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import Modal from '@components/modal/onboard/Modal';
import { default as _Home } from '@domains/webtoon/home/Home';
import FeedbackButton from '@domains/webtoon/home/FeedbackButton';
import CoinModal from '@domains/user/signup/modal/CoinModal';

const Home: NextPage = () => {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '홈 페이지',
    });
  }, []);

  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if (getCookie('antoon-signup-status') === 'SIGNUP') setModalStatus(true);
  }, []);

  return (
    <>
      {modalStatus && (
        <CoinModal modalStatus={modalStatus} setModalStatus={setModalStatus} />
      )}
      <Header left="로고" right="검색" />
      <Modal />
      <_Home />
      <FeedbackButton />
    </>
  );
};

export default Home;
