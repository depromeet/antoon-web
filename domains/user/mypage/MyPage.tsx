import { useGetUserInformation } from '@apis/user';

import UserData from './UserData';
import UserCoin from './UserCoin';
import UserBadge from './UserBadge';

import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import { MyPageWrap } from './MyPage.style';

function MyPage() {
  const { data: profile, isError } = useGetUserInformation();

  if (isError)
    return <OnError>사용자 정보를 불러오지 못하고 있어요 😭😭😭</OnError>;

  const coin = 256;

  const badge = '일개미';

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
