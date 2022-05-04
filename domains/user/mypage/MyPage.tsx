import EditProfileImg from './EditProfileImg';
import EditName from './EditName';

import MyPageBanner from '@assets/banners/MyPageBanner';

import {
  MyPageWrap,
  Menu,
  SettingText,
  PolicyLink,
  LogOutBtn,
} from './MyPage.style';

function MyPage() {
  return (
    <MyPageWrap>
      <EditProfileImg />
      <EditName />
      <MyPageBanner />
      <Menu>
        <SettingText>설정</SettingText>
        <PolicyLink
          href="https://github.com/depromeet/antoon_web/"
          target="_blank"
          rel="noreferrer noopener"
        >
          이용약관
        </PolicyLink>
        <PolicyLink
          href="https://github.com/depromeet/antoon_web/"
          target="_blank"
          rel="noreferrer noopener"
        >
          개인정보 처리방침
        </PolicyLink>
        <LogOutBtn>로그아웃</LogOutBtn>
      </Menu>
    </MyPageWrap>
  );
}

export default MyPage;
