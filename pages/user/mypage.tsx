import { useState, useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import { useGetUserInformation } from '@apis/user';

import Header from '@components/layout/Header/Header';
import MyPageWrap from '@domains/user/mypage/MyPage';
import DefaultMyPage from '@domains/user/mypage/DefaultMyPage';
import MyPageMenu from '@domains/user/mypage/MyPageMenu';

import { Menu } from '@domains/user/mypage/MyPage.style';
import SignoutBtn from '@domains/user/mypage/SignoutBtn';
import SigninBtn from '@domains/user/mypage/SigninBtn';

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

  const { isSuccess } = useGetUserInformation();

  return (
    <>
      {!isSSR && (
        <>
          <Header
            headerLeft="없음"
            headerTitle="마이페이지"
            headerRight="없음"
          />
          {isSuccess ? <MyPageWrap /> : <DefaultMyPage />}
          <Menu>
            <MyPageMenu />
            {isSuccess ? <SignoutBtn /> : <SigninBtn />}
          </Menu>
        </>
      )}
    </>
  );
}

export default MyPage;
