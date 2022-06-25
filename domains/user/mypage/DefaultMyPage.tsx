import UserData from './UserData';
import UserCoin from './UserCoin';
import UserBadge from './UserBadge';

import { MyPageWrap } from './MyPage.style';

function DefaultMyPage() {
  return (
    <MyPageWrap>
      <UserData />
      <UserCoin coin={0} />
      <UserBadge coin={0} badge="로그인을 하시면 등급을 받을 수 있어요" />
    </MyPageWrap>
  );
}

export default DefaultMyPage;
