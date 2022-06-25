import Link from 'next/link';

import { MyPageBanner } from '@assets/banners';

import { DefaultMyPageWrap, SigninWrap, SigninButton } from './SigninBtn.style';

function SigninBtn() {
  return (
    <DefaultMyPageWrap>
      <SigninWrap>
        <MyPageBanner />
        <Link href="/user/signin" passHref>
          <SigninButton>로그인</SigninButton>
        </Link>
      </SigninWrap>
    </DefaultMyPageWrap>
  );
}

export default SigninBtn;
