import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

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

  const accessToken = getCookie('Access');

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <Header title="마이페이지" />
          {accessToken ? <MyPageWrap /> : <DefaultMyPage />}
          <Menu>
            <MyPageMenu />
            {accessToken ? <SignoutBtn /> : <SigninBtn />}
          </Menu>
        </>
      )}
    </>
  );
}

export default MyPage;
