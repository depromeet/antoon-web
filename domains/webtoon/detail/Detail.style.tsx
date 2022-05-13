import styled from '@emotion/styled';

const DetailWrapper = styled.div`
  background-color: #f1f1f1;
  background-position: center top;
  background-size: 100%;
  width: 100%;
  min-width: 320px;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
`;

const DetailContents = styled.section`
  display: block;
  background: #fff;
`;

const DetailMain = styled.div`
  position: relative;
  height: 520px;

  & a {
    display: block;
    position: relative;
  }

  & a span {
    display: inline-block;
  }

  & h2 {
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const MainWrapper = styled.div`
  padding: 0.8rem 0 0;

  & h2 {
    line-height: 144%;
    font-size: 20px;
    font-weight: 800;
    font-style: normal;
  }
`;

const MainTitle = styled.div`
  float: left;
  width: 55%;
  max-width: 300px;

  & .ellipsis2 {
    display: box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Platform = styled.div<{ platform: string }>`
  display: inline-block;
  align-items: center;
  margin-bottom: 4px;
  width: 100%;
  height: 100%;
  line-height: 17.28px;
  color: ${(props) =>
    props?.platform == 'NAVER'
      ? props.theme.colors.platform.naver
      : props?.platform == 'KAKAO'
      ? props.theme.colors.platform.kakao
      : props.theme.colors.platform.lezhin};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;

  & ::after {
    display: block;
    width: 100%;
    content: '';
  }
`;

const PlatformImg = styled.span<{ platform: string }>`
  margin-right: 4px;
  border-radius: 20%;
  background-image: url(${(props) =>
    `/assets/platform_${props?.platform}.png`});
  background-size: cover;
  width: 13px;
  height: 13px;
  vertical-align: text-top;
`;

const MainScore = styled.div<{ upDown: string }>`
  display: block;
  margin-top: 4px;
  color: ${(props) =>
    props?.upDown === 'UP'
      ? props.theme.colors.secondary.red
      : props?.upDown === 'DOWN'
      ? props.theme.colors.secondary.blue
      : '#000 '};
`;

const Point = styled.p`
  margin-bottom: 2px;
  width: 100%;
  color: '#000';
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
`;

const PointUpDown = styled.p`
  opacity: 0.8;
  width: 100%;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  font-style: 'normal';

  & .up-down-point {
    font-size: 12px;
    font-weight: 500;
  }
`;

const ThumbNailWrapper = styled.div`
  position: relative;
  float: right;
  margin-top: 0;
  width: 100px;
  height: 100px;
`;

const MainThumbnailImg = styled.div`
  position: relative;
`;

const MainThumbnail = styled.div<{ upDown: string }>`
  position: absolute;
  right: 0;
  width: 10rem;
  height: 10rem;

  & img {
    border-radius: 20%;
  }

  & p {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border-radius: 40px;
    background: ${(props) =>
      props?.upDown === 'UP'
        ? props.theme.colors.chart.point_up_100
        : props?.upDown === 'DOWN'
        ? props.theme.colors.chart.point_down_100
        : '#000 '};
    padding: 1px 6px;
    width: 32px;
    height: 14px;
    text-align: center;
    line-height: 14.4px;
    color: #fff;
    font-family: Pretendard;
    font-size: 10px;
  }
`;

const DetailSub = styled.div`
  position: relative;
  padding-top: 30px;
  height: 280px;

  & a {
    display: block;
    position: relative;
  }

  & a span {
    display: inline-block;
  }

  & h2 {
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const DetailSubWrapper = styled.div`
  display: block;

  & h2 {
    line-height: 144%;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
  }
`;

const Category = styled.div`
  opacity: 0.8;
  margin-top: 12px;
  margin-bottom: 6px;
  line-height: 144%;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const Description = styled.p`
  display: box !important;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 144%;
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ContentBar = styled.p`
  display: inline-block;
  margin-right: 4px;
  background: #c4c4c4;
  width: 0.2rem;
  height: 1rem;
`;

const ChartWrapper = styled.div`
  display: flex;
  z-index: 2;
  padding: 0;
  width: 102%;
  height: 100%;
  overflow-y: visible;
`;

export {
  DetailWrapper,
  Container,
  DetailContents,
  DetailMain,
  PlatformImg,
  Platform,
  MainWrapper,
  MainTitle,
  MainScore,
  Point,
  PointUpDown,
  ThumbNailWrapper,
  MainThumbnailImg,
  MainThumbnail,
  DetailSub,
  DetailSubWrapper,
  Category,
  Description,
  ContentBar,
  ChartWrapper,
};
