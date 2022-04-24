import { useRouter } from 'next/router';

import Logo from '@assets/svgs/Logo';
import BackIcon from '@components/icon/BackIcon';

import SearchBar from './SearchBar';

import { HeaderWrap, LeftBtn, RightBtn } from './Header.style';

type HeaderProps = {
  leftBtn?: string;
  rightBtn?: string;
};

function Header({ leftBtn, rightBtn }: HeaderProps) {
  const router = useRouter();

  return (
    <HeaderWrap>
      <LeftBtn>
        {leftBtn === 'logo' ? (
          <button onClick={() => router.reload()}>
            <Logo />
          </button>
        ) : (
          <button onClick={() => router.back()}>
            <BackIcon />
          </button>
        )}
      </LeftBtn>

      <RightBtn>
        {rightBtn === 'menu' ? (
          <></>
        ) : rightBtn === 'search' ? (
          <SearchBar />
        ) : (
          <></>
        )}
      </RightBtn>
    </HeaderWrap>
  );
}

export default Header;
