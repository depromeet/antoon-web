import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import KakaoLoginImg from '@assets/images/KakaoLoginImg';
import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import Header from '@components/layout/Header/Header';
import Intro from '@domains/user/signin/Intro';

import { SignInWrap, GoToMain } from '@domains/user/signin/SignInMain.style';

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

  console.log('query', query);

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
