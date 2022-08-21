import Profile from '@domains/user/mypage/Profile';
import Coin from '@domains/user/mypage/coin/Coin';
import Badge from '@domains/user/mypage/badge/Badge';

import { MyPageWrap } from './MyPage.style';

function DefaultMyPage() {
  return (
    <MyPageWrap>
      <Profile />
      <Coin coin={0} />
      <Badge coin={0} badge="로그인을 하시면 등급을 받을 수 있어요" />
    </MyPageWrap>
  );
}

export default DefaultMyPage;
