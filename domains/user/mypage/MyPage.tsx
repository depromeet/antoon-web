import { useEffect, useState } from 'react';

import { useGetUserInformation } from '@apis/user';

import UserData from './UserData';
import UserCoin from './UserCoin';
import UserBadge from './UserBadge';

import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import { MyPageWrap } from './MyPage.style';

function MyPage() {
  const { data: profile, isError } = useGetUserInformation();

  const [coin, setCoin] = useState(0);
  const [badge, setBadge] = useState('');

  useEffect(() => {
    profile && setCoin(profile.wallet);
    profile && setBadge(profile.coinRank);
  }, [profile]);

  if (isError)
    return <OnError>사용자 정보를 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="사용자 정보를 불러오지 못하고 있어요 😭😭😭">
      <MyPageWrap>
        <UserData profile={profile} />
        <UserCoin coin={coin} />
        <UserBadge coin={coin} badge={badge} />
      </MyPageWrap>
    </ErrorBoundary>
  );
}

export default MyPage;
