import { useRouter } from 'next/router';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import FooterHomeIcon from '@assets/icons/FooterHomeIcon';
import FooterCommunityIcon from '@assets/icons/FooterCommunityIcon';
import FooterMyPageIcon from '@assets/icons/FooterMyPageIcon';

import { MainWrap, FooterWrap, BtnWrap } from './Layout.style';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [isFooter, setIsFooter] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);

  useEffect(() => {
    if (router.pathname === '/') {
      setIsFooter(true);
      setIsHome(true);
      setIsCommunity(false);
      setIsMyPage(false);
    } else if (router.pathname === '/community') {
      setIsFooter(true);
      setIsHome(false);
      setIsCommunity(true);
      setIsMyPage(false);
    } else if (router.pathname === '/user/mypage') {
      setIsFooter(true);
      setIsHome(false);
      setIsCommunity(false);
      setIsMyPage(true);
    }
  }, [router.pathname]);

  return (
    <>
      <MainWrap isFooter={isFooter}>{children}</MainWrap>
      {isFooter && (
        <FooterWrap>
          <BtnWrap>
            <Link href="/" passHref>
              <a>
                <FooterHomeIcon isHome={isHome} />
                <span>홈</span>
              </a>
            </Link>
          </BtnWrap>
          <BtnWrap>
            <Link href="/community" passHref>
              <a>
                <FooterCommunityIcon isCommunity={isCommunity} />
                <span>커뮤니티</span>
              </a>
            </Link>
          </BtnWrap>
          <BtnWrap>
            <Link href="/user/mypage" passHref>
              <a>
                <FooterMyPageIcon isMyPage={isMyPage} />
                <span>마이페이지</span>
              </a>
            </Link>
          </BtnWrap>
        </FooterWrap>
      )}
    </>
  );
}

export default Layout;
