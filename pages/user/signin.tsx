import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

import { Mixpanel } from 'mixpanel';

import { api } from '@apis/api';

import KakaoLoginImg from '@assets/images/KakaoLoginImg';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import Header from '@components/layout/Header/Header';
import Intro from '@domains/user/signin/Intro';

import { SignInWrap, GoToMain } from '@domains/user/signin/SignInMain.style';

function SignIn() {
  const KAKAO_SIGNIN_URL = 'https://api.antoon.fun/oauth2/authorization/kakao';

  const router = useRouter();

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '로그인 페이지',
    });
  }, []);

  const onClickKakaoSignIn = () => {
    router.push(KAKAO_SIGNIN_URL);
  };

  return (
    <>
      <Header />
      <SignInWrap>
        <Intro />
        <button onClick={onClickKakaoSignIn}>
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
  const statusQuery = query.status as string;
  const authArr = statusQuery?.split(/[?=]/);

  const status = authArr && authArr[0];
  const accessToken = authArr && authArr[2];
  // const refreshToken = authArr && authArr[4];

  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  if (status === 'signup') {
    return {
      redirect: {
        destination: '/user/signup/policy',
        permanent: false,
      },
    };
  }

  if (status === 'success') {
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
