import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import KakaoLoginImg from '@assets/images/KakaoLoginImg';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import Header from '@components/layout/Header/Header';
import Intro from '@domains/user/signin/Intro';

import { SignInWrap, GoToMain } from '@domains/user/signin/SignInMain.style';
import { Mixpanel } from 'mixpanel';
import { useEffect } from 'react';

function SignIn() {
  const router = useRouter();

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '로그인 페이지',
    });
  }, []);

  const onClickKakao = () => {
    router.push('https://api.antoon.fun/oauth2/authorization/kakao');
  };

  return (
    <>
      <Header />
      <SignInWrap>
        <Intro />
        <button onClick={onClickKakao}>
          <KakaoLoginImg />
        </button>
        <Link href="/" passHref>
          <a>
            <GoToMain>
              <span>개미는툰툰 둘러보기</span> <ChebronRightIcon />
            </GoToMain>
          </a>
        </Link>
      </SignInWrap>
    </>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const loginStatus = query.status ? true : '';

  if (loginStatus) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default SignIn;
