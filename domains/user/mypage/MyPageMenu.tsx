import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import CustomHr from '@components/line/CustomHr';

import { SettingText, PolicyLink } from './MyPageMenu.style';

function MyPageMenu() {
  return (
    <>
      <CustomHr margin="3.3rem 0 1.6rem -2.4rem" />
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
    </>
  );
}

export default MyPageMenu;
