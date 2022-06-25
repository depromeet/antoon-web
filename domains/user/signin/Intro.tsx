import SignInDefaultImg from '@assets/images/SignInDefaultImg';

import {
  IntroMainWrap,
  SignInImgWrap,
  IntroMain,
  IntroDetail,
} from './Intro.style';

function Intro() {
  return (
    <>
      <IntroMainWrap>
        <SignInImgWrap>
          <SignInDefaultImg />
        </SignInImgWrap>
        <IntroMain>웹툰의 새로운 덕질, 개미는 툰툰</IntroMain>
        <IntroDetail>
          내 취향에 맞는 웹툰을
          <br />
          많은 사람들과 함께 즐겨보세요
        </IntroDetail>
      </IntroMainWrap>
    </>
  );
}

export default Intro;
