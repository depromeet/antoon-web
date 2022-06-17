import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import EditName from '@domains/user/mypage/edit/EditName';

function Edit() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '사용자 이름 수정',
    });
  }, []);

  return (
    <>
      <Header title="닉네임 수정" />
      <EditName />
    </>
  );
}

export default Edit;
