import { useEffect, useState } from 'react';

import { useGetUserInformation } from '@apis/user';

import Profile from '@domains/user/mypage/Profile';
import Coin from '@domains/user/mypage/coin/Coin';
import Badge from '@domains/user/mypage/badge/Badge';

import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import { MyPageWrap } from '@domains/user/mypage/MyPage.style';

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
        <Profile profile={profile} />
        <Coin coin={coin} />
        <Badge coin={coin} badge={badge} />
      </MyPageWrap>
    </ErrorBoundary>
  );
}

export default MyPage;
