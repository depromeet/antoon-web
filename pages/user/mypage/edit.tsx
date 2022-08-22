import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import DefaultProfile from '@assets/images/DefaultProfile';

import { useGetProfile } from '@apis/user';

import Header from '@components/layout/Header/Header';
import OnError from '@components/OnError';
import ProfileImage from '@components/image/ProfileImage';
import EditName from '@domains/user/mypage/edit/EditName';
import { ImgWrap } from '@domains/user/mypage/MyPage.style';

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

  const { data: user, isError } = useGetProfile();

  if (isError) return <OnError>로그인이 필요합니다.</OnError>;

  return (
    <>
      <Header left="뒤로가기" title="프로필 수정" right="없음" />
      <ImgWrap>
        {user ? (
          <ProfileImage src={user.imageUrl} width="100" height="100" />
        ) : (
          <DefaultProfile width="100" height="100" />
        )}
      </ImgWrap>
      <EditName user={user} />
    </>
  );
}

export default Edit;
