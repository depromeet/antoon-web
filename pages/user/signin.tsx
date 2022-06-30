import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { setCookies } from 'cookies-next';
import { Mixpanel } from 'mixpanel';

import KakaoLoginImg from '@assets/images/KakaoLoginImg';
import GoogleLoginImg from '@assets/images/GoogleLoginImg';

import Header from '@components/layout/Header/Header';
import Intro from '@domains/user/signin/Intro';

import {
  SignInWrap,
  BtnWrap,
  Text,
} from '@domains/user/signin/SignInMain.style';

function SignIn() {
  const KAKAO_SIGNIN_URL = 'https://api.antoon.fun/oauth2/authorization/kakao';
  const GOOGLE_SIGNIN_URL =
    'https://api.antoon.fun/oauth2/authorization/google';

  const router = useRouter();

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '로그인 페이지',
    });
  }, []);

  const onClickKakaoSignIn = () => {
    router.push(KAKAO_SIGNIN_URL);
  };

  const onClickGoogleSignIn = () => {
    router.push(GOOGLE_SIGNIN_URL);
  };

  return (
    <>
      <Header headerLeft="뒤로가기" headerRight="없음" headerColor="#1C1C1C" />
      <SignInWrap>
        <Intro />
        <BtnWrap>
          <Text>간편하게 SNS로 로그인</Text>
          <button onClick={onClickKakaoSignIn}>
            <KakaoLoginImg />
          </button>
          <button onClick={onClickGoogleSignIn}>
            <GoogleLoginImg />
          </button>
        </BtnWrap>
      </SignInWrap>
    </>
  );
}

export async function getServerSideProps({
  req,
  res,
  query,
}: GetServerSidePropsContext) {
  const statusQuery = query.status as string;
  const authArr = statusQuery?.split(/[?=]/);

  const status = authArr && authArr[0];
  const accessToken = authArr && authArr[2];
  const refreshToken = authArr && authArr[4];

  accessToken &&
    setCookies('Access', accessToken, { req, res, maxAge: 60 * 60 * 24 * 60 });

  refreshToken &&
    setCookies('Refresh', refreshToken, {
      req,
      res,
      maxAge: 60 * 60 * 24 * 60,
    });

  if (status === 'SIGNUP') {
    setCookies('antoon-signup-status', 'SIGNUP', {
      req,
      res,
      maxAge: 60 * 60 * 1 * 1,
    });

    return {
      redirect: {
        destination: '/user/signup/policy',
        permanent: false,
      },
    };
  }

  if (status === 'SUCCESS') {
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
