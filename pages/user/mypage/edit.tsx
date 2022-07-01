import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

import { useGetUserInformation } from '@apis/user';

import Header from '@components/layout/Header/Header';
import OnError from '@components/OnError';
import UserProfile from '@components/image/UserProfile';
import EditName from '@domains/user/mypage/edit/EditName';

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
      <Header
        headerLeft="뒤로가기"
        headerTitle="프로필 수정"
        headerRight="없음"
      />
      {user ? (
        <UserProfile src={user.imageUrl} width="100" height="100" />
      ) : (
        <ProfileDefaultImg width="100" height="100" />
      )}
      <EditName user={user} />
    </>
  );
}

export default Edit;
