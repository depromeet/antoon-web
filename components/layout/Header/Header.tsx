import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import { HeaderWrap, Title } from './Header.style';

type HeaderProps = {
  leftBtn?: string;
  title?: string;
  rightBtn?: string;
  accessToken?: string;
};

function Header({ leftBtn, title, rightBtn, accessToken }: HeaderProps) {
  return (
    <HeaderWrap>
      <HeaderLeftMenu leftBtn={leftBtn} />
      {title && <Title>{title}</Title>}
      <HeaderRightMenu rightBtn={rightBtn} accessToken={accessToken} />
    </HeaderWrap>
  );
}

export default Header;
