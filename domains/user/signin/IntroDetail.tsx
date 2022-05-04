import {
  IntroDetailWrap,
  Img,
  ContentWrap,
  MainText,
  SubText,
} from './IntroDetail.style';

function IntroDetail({ main, sub }: { main: string; sub: string }) {
  return (
    <IntroDetailWrap>
      <Img />
      <ContentWrap>
        <MainText>{main}</MainText>
        <SubText>{sub}</SubText>
      </ContentWrap>
    </IntroDetailWrap>
  );
}

export default IntroDetail;
