import Link from 'next/link';

import { MyPageBanner } from '@assets/banners';

import {
  SigninButtonWrap,
  Button,
} from '@domains/user/mypage/signin/SigninButton.style';

function SigninButton() {
  return (
    <SigninButtonWrap>
      <MyPageBanner />
      <Link href="/user/signin" passHref>
        <a>
          <Button>로그인</Button>
        </a>
      </Link>
    </SigninButtonWrap>
  );
}

export default SigninButton;
