import Header from '@components/layout/Header/Header';
import MyPageWrap from '@domains/user/mypage/MyPage';

function MyPage() {
  return (
    <>
      <Header title="마이페이지" />
      <MyPageWrap />
    </>
  );
}

export default MyPage;
