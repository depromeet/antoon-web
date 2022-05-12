import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import { HeaderWrap, Title } from './Header.style';

type HeaderProps = {
  leftBtn?: string;
  title?: string;
  rightBtn?: string;
};

function Header({ leftBtn, title, rightBtn }: HeaderProps) {
  return (
    <HeaderWrap>
      <HeaderLeftMenu leftBtn={leftBtn} />
      {title && <Title>{title}</Title>}
      <HeaderRightMenu rightBtn={rightBtn} />
    </HeaderWrap>
  );
}

export default Header;
