import {
  IntroDetailWrap,
  ImgWrap,
  Img,
  ContentWrap,
  MainText,
  SubText,
} from './IntroDetail.style';

function IntroDetail({
  src,
  main,
  sub,
}: {
  src: string;
  main: string;
  sub: string;
}) {
  return (
    <IntroDetailWrap>
      <ImgWrap>
        <Img src={src} width="24" height="24" />
      </ImgWrap>
      <ContentWrap>
        <MainText>{main}</MainText>
        <SubText>{sub}</SubText>
      </ContentWrap>
    </IntroDetailWrap>
  );
}

export default IntroDetail;
