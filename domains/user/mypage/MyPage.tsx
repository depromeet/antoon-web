/* eslint-disable react-hooks/rules-of-hooks */
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';

import {
  useGetUserInformation,
  usePostUserLogOut,
  usePatchUserImg,
} from '@apis/user';

import MyPageBanner from '@assets/banners/MyPageBanner';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';
import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

import UserProfile from '@components/image/UserProfile';
import UserName from './UserName';
import CustomHr from '@components/line/CustomHr';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import {
  MyPageWrap,
  UserProfileForm,
  UserProfileInput,
  Menu,
  SettingText,
  PolicyLink,
  LogOutBtn,
} from './MyPage.style';

function MyPage() {
  const router = useRouter();

  const { mutate: mutateLogOut } = usePostUserLogOut();

  const onClickLogOut = () => {
    mutateLogOut();
    removeCookies('Access', { path: '/', domain: 'antoon.fun' });
    removeCookies('Refresh', { path: '/', domain: 'antoon.fun' });
    router.push('/');
  };

  const { data: user, isError } = useGetUserInformation();

  const [userImg, setUserImg] = useState<string>();

  const { mutate: mutatePatchUserImg } = usePatchUserImg(String(userImg));

  const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUserImg(String(reader.result));
        mutatePatchUserImg(reader.result as unknown as void);
      };
    }
  };

  if (isError)
    return <OnError>사용자 정보를 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="사용자 정보를 불러오지 못하고 있어요 😭😭😭">
      <MyPageWrap>
        {user ? (
          <UserProfileForm>
            <UserProfileInput
              id="user-profile-input"
              type="file"
              name="image"
              accept="image/*"
              onChange={uploadImg}
            />
            <label htmlFor="user-profile-input">
              {userImg ? (
                <UserProfile src={userImg} width="80" height="80" />
              ) : (
                <UserProfile src={user.imageUrl} width="80" height="80" />
              )}
            </label>
          </UserProfileForm>
        ) : (
          <UserProfileForm>
            <ProfileDefaultImg width="80" height="80" />
          </UserProfileForm>
        )}
        {user ? (
          <UserName name={user.name} />
        ) : (
          <UserName name="일하는일개미" />
        )}
        <MyPageBanner />
        <Menu>
          <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
          <SettingText>설정</SettingText>
          <PolicyLink
            href="https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34"
            target="_blank"
            rel="noreferrer noopener"
            margin="2.3rem 0 0"
          >
            <span>이용약관</span>
            <ChebronRightIcon />
          </PolicyLink>
          <PolicyLink
            href="https://antoon-fun.notion.site/2693f5030fb24a4c9bd1c9ff958c680e"
            target="_blank"
            rel="noreferrer noopener"
            margin="3.1rem 0 1.6rem"
          >
            <span>개인정보 처리방침</span>
            <ChebronRightIcon />
          </PolicyLink>
          <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
          <LogOutBtn onClick={() => onClickLogOut()}>
            <span>로그아웃</span>
            <ChebronRightIcon />
          </LogOutBtn>
        </Menu>
      </MyPageWrap>
    </ErrorBoundary>
  );
}

export default MyPage;
