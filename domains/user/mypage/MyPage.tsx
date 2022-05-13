import EditProfileImg from './EditProfileImg';
import EditName from './EditName';

import MyPageBanner from '@assets/banners/MyPageBanner';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import CustomHr from '@components/line/CustomHr';

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
        <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
        <SettingText>설정</SettingText>
        <PolicyLink
          href="https://www.notion.so/ko-kr/product/"
          target="_blank"
          rel="noreferrer noopener"
          margin="2.3rem 0 0"
        >
          <span>이용약관</span>
          <ChebronRightIcon />
        </PolicyLink>
        <PolicyLink
          href="https://www.notion.so/ko-kr/product/"
          target="_blank"
          rel="noreferrer noopener"
          margin="3.1rem 0 1.6rem"
        >
          <span>개인정보 처리방침</span>
          <ChebronRightIcon />
        </PolicyLink>
        <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
        <LogOutBtn>
          <span> 로그아웃</span>
          <ChebronRightIcon />
        </LogOutBtn>
      </Menu>
    </MyPageWrap>
  );
}

export default MyPage;
