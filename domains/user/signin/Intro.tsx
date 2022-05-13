import IntroDetail from './IntroDetail';

import SignInDefaultImg from '@assets/images/SignInDefaultImg';

import { IntroMainWrap, IntroMain } from './Intro.style';

function Intro() {
  return (
    <>
      <IntroMainWrap>
        <IntroMain>
          좋아하는 웹툰 순위를
          <br />
          직접 올려보세요
        </IntroMain>
        <SignInDefaultImg />
      </IntroMainWrap>
      <IntroDetail
        main="취향에 맞는 웹툰을 찾아보세요"
        sub="나랑 같은 취향의 웹툰을 보는사람까지"
      />
      <IntroDetail
        main="직접 최애 웹툰 순위를 올릴 수 있어요"
        sub="숨겨왔던 나만의 웹툰을 응원해주세요"
      />
      <IntroDetail
        main="같은 웹툰을 보는 사람들과 소통할 수 있어요"
        sub="혼자만 궁금했던 떡밥들을 회수해봐요"
      />
    </>
  );
}

export default Intro;
