import Link from 'next/link';
import { getCookie } from 'cookies-next';

import { api } from '@apis/api';
import { useGetUserInformation } from '@apis/user';

import MyPageBanner from '@assets/banners/MyPageBanner';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';
import UserProfile from '@components/image/UserProfile';
import UserName from './UserName';
import CustomHr from '@components/line/CustomHr';

import {
  MyPageWrap,
  Menu,
  SettingText,
  PolicyLink,
  LogOutBtn,
} from './MyPage.style';

import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

function MyPage() {
  const accessToken = getCookie('Access');
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  const { data: user, isError } = useGetUserInformation();

  if (isError)
    return <OnError>사용자 정보를 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="사용자 정보를 불러오지 못하고 있어요 😭😭😭">
      <MyPageWrap>
        {user.imageUrl ? (
          <UserProfile src={user.imageUrl} width="80" height="80" />
        ) : (
          <ProfileDefaultImg width="80" height="80" />
        )}
        <UserName name={user.name} />
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
          <Link href="/user/signin" passHref>
            <a>
              <LogOutBtn>
                <span> 로그아웃</span>
                <ChebronRightIcon />
              </LogOutBtn>
            </a>
          </Link>
        </Menu>
      </MyPageWrap>
    </ErrorBoundary>
  );
}

export default MyPage;
