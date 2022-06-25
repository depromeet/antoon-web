import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import { useGetUserInformation } from '@apis/user';

import Header from '@components/layout/Header/Header';
import OnError from '@components/OnError';
import EditName from '@domains/user/mypage/edit/EditName';
import EditImg from '@domains/user/mypage/edit/EditImg';

function Edit() {
  const router = useRouter();

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '사용자 프로필 수정',
    });
  }, []);

  const accessToken = getCookie('Access');

  useEffect(() => {
    if (!accessToken) router.push('/user/mypage');
  }, [accessToken, router]);

  const { data: user, isError } = useGetUserInformation();

  if (isError) return <OnError>로그인이 필요합니다.</OnError>;

  return (
    <>
      <Header title="프로필 수정" />
      <EditImg user={user} />
      <EditName user={user} />
    </>
  );
}

export default Edit;
