import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';

import { usePostUserLogOut } from '@apis/user';

import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import CustomHr from '@components/line/CustomHr';

import { SignoutButton } from './SignoutBtn.style';

function SignoutBtn() {
  const router = useRouter();

  const { mutate: mutateLogOut } = usePostUserLogOut();

  const onClickLogOut = () => {
    mutateLogOut();
    removeCookies('Access', { path: '/', domain: '.antoon.fun' });
    removeCookies('Refresh', { path: '/', domain: '.antoon.fun' });
    router.push('/');
  };

  return (
    <>
      <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
      <SignoutButton onClick={() => onClickLogOut()}>
        <span>로그아웃</span>
        <ChebronRightIcon />
      </SignoutButton>
    </>
  );
}

export default SignoutBtn;
