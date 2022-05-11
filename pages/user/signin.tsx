import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import Header from '@components/layout/Header/Header';
import Intro from '@domains/user/signin/Intro';

import {
  SignInWrap,
  GoToMain,
  SignInBtn,
} from '@domains/user/signin/SignInMain.style';

function SignIn() {
  const router = useRouter();

  const onClickKakao = () => {
    router.push('https://api.antoon.fun/oauth2/authorization/kakao');
  };

  return (
    <>
      <Header />
      <SignInWrap>
        <Intro />
        <SignInBtn onClick={onClickKakao}>카카오톡으로 로그인</SignInBtn>
        <Link href="/" passHref>
          <a>
            <GoToMain>개미는툰툰 둘러보기 &gt;</GoToMain>
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
