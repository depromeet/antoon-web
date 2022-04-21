import styled from '@emotion/styled';

// TODO: 공통 레이아웃으로 변경
const DefaultLayout = styled.div`
  min-width: 320px;
  max-width: 1024px;
  height: 100vh;
`;

// TODO: 공통 헤더로 변경
const DefaultHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.4rem;
  height: 56px;
`;

const HomeContainer = styled.main``;

const HomeTopWrapper = styled.section`
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 100%;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  padding: ${(props) => props.theme.padding.layout};
  padding-top: 2rem;
  height: 200px;
`;

const HomeTopTitle = styled.span`
  width: 200px;
`;

const ContentWrapper = styled.div`
  padding: ${(props) => props.theme.padding.layout_carousel};
  padding-top: 3rem;
`;

const ContentTitle = styled.h2`
  font-size: ${(props) => props.theme.font_size.h2};
  font-weight: bold;
`;

const ContentSubTitle = styled.h3`
  font-size: ${(props) => props.theme.font_size.h3};
`;

const CarouselWrapper = styled.div``;

const CarouselBox = styled.div``;

const CarouselContent = styled.div``;

const CarouselContentCard = styled.div``;

const CarouselContentRanking = styled.div``;

const CarouselContentTitle = styled.div``;

const CarouselContentScore = styled.div``;

const CarouselContentScoreChangeIcon = styled.div``;

const CarouselContentScoreChange = styled.div``;

const CarouselContentAuthor = styled.div``;

const CarouselContentScoreChangePercentWrapper = styled.div``;

const CarouselContentScoreChangePercent = styled.div``;

export {
  DefaultLayout,
  DefaultHeader,
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopTitle,
  ContentWrapper,
  ContentTitle,
  ContentSubTitle,
  CarouselWrapper,
  CarouselBox,
  CarouselContent,
  CarouselContentCard,
  CarouselContentRanking,
  CarouselContentTitle,
  CarouselContentScore,
  CarouselContentScoreChangeIcon,
  CarouselContentScoreChange,
  CarouselContentAuthor,
  CarouselContentScoreChangePercentWrapper,
  CarouselContentScoreChangePercent,
};
