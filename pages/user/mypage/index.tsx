import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import { useGetUserInformation } from '@apis/user';

import Header from '@components/layout/Header/Header';
import MyPageWrap from '@domains/user/mypage/MyPage';
import DefaultMyPage from '@domains/user/mypage/DefaultMyPage';
import MyPageMenu from '@domains/user/mypage/MyPageMenu';

import { Menu } from '@domains/user/mypage/MyPage.style';
import SignoutButton from '@domains/user/mypage/signout/SignoutButton';
import SigninBtn from '@domains/user/mypage/signin/SigninButton';

function MyPage() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '마이 페이지',
    });
  }, []);

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const accessToken = getCookie('Access');

  const { data: profile } = useGetUserInformation();

  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    accessToken && profile && setIsSignIn(true);
  }, [accessToken, profile]);

  return (
    <>
      {!isSSR && (
        <>
          <Header left="없음" title="마이페이지" right="없음" />
          {isSignIn ? <MyPageWrap /> : <DefaultMyPage />}
          <Menu>
            <MyPageMenu />
            {isSignIn ? <SignoutButton /> : <SigninBtn />}
          </Menu>
        </>
      )}
    </>
  );
}

export default MyPage;
