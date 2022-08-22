import { useState, useEffect } from 'react';

import LeftButton from '@components/layout/Header/LeftButton';
import RightButton from '@components/layout/Header/RightButton';

import useScroll from '@hooks/useScroll';

import { HeaderWrap, Title } from '@components/layout/Header/Header.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';
type HeaderRight = '검색' | '공유하기' | '없음';

type HeaderProps = {
  left: HeaderLeft;
  right: HeaderRight;
  title?: string | undefined;
  color?: string | undefined;
};

function Header({ left, right, title, color }: HeaderProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const isScrolled = useScroll();

  const [isPainted, setIsPainted] = useState(false);

  useEffect(() => {
    if (color && !isScrolled) setIsPainted(true);
    else setIsPainted(false);
  }, [color, isScrolled]);

  return (
    <HeaderWrap color={isScrolled ? 'FFFFFF' : color}>
      {!isSSR && (
        <>
          <LeftButton left={left} isPainted={isPainted} />
          {title && <Title>{title}</Title>}
          <RightButton right={right} isPainted={isPainted} />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
