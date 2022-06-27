import Link from 'next/link';

import { MyPageBanner } from '@assets/banners';

import { SigninWrap, SigninButton } from './SigninBtn.style';

function SigninBtn() {
  return (
    <SigninWrap>
      <MyPageBanner />
      <Link href="/user/signin" passHref>
        <a>
          <SigninButton>로그인</SigninButton>
        </a>
      </Link>
    </SigninWrap>
  );
}

export default SigninBtn;
