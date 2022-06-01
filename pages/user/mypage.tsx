import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import MyPageWrap from '@domains/user/mypage/MyPage';

function MyPage() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '마이 페이지',
    });
  }, []);

  return (
    <>
      <Header title="마이페이지" />
      <MyPageWrap />
    </>
  );
}

export default MyPage;
