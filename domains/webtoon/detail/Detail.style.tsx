import { getChartStatusFactory } from '@components/charts/chart-utils';
import styled from '@emotion/styled';

const DetailWrapper = styled.div`
  margin: 30px auto;
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
  max-width: 1024px;
  height: 100%;
`;

const Contents = styled.div`
  & .back-area {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const DetailContents = styled.section`
  display: block;
  border-bottom: 8px solid #f1f1f1;
  background: #fff;
  max-width: 1024px;
`;

const DetailMain = styled.div`
  position: relative;
  height: 600px;

  & a {
    display: block;
    position: relative;
  }

  & a span {
    display: inline-block;
  }

  & h2 {
    margin-left: 20px;
    line-height: 60px;
    font-family: notokr-regular;
    font-size: 18px;
    font-weight: bold;
  }
`;

const MainWrapper = styled.div`
  padding-top: 62px;

  & h2 {
    line-height: 144%;
    font-family: Pretendard;
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

const Platform = styled.div`
  display: inline-block;
  margin-bottom: 4px;
  margin-left: 20px;
  width: 100%;
  height: 100%;
  line-height: 20.16px;
  color: #838383;
  font-family: Preahvihear;
  font-size: 14px;
  font-weight: 400;

  & ::after {
    display: block;
    width: 100%;
    content: '';
  }
`;
const MainScore = styled.div<any>`
  display: block;
  margin-top: 4px;
  margin-left: 20px;
  color: ${(props) => getchartstatusfactory(props?.updown, 100)};
`;

const Point = styled.p`
  margin-bottom: 2px;
  width: 100%;
  color: '#000';
  font-family: Pretendard;
  font-size: 3.6rem;
  font-weight: 800;
  font-style: normal;
`;
const PointUpDown = styled.p`
  opacity: 0.6;
  width: 100%;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: 'normal';
`;

const ThumbNailWrapper = styled.div`
  position: relative;
  float: right;
  margin-top: 0;
  margin-right: 20px;
  width: 100px;
  height: 100px;
`;

const MainThumbnailImg = styled.div`
  position: relative;
`;

const MainThumbnail = styled.div`
  position: absolute;
  right: 0;
  width: 10rem;
  height: 10rem;

  & img {
    border-radius: 20%;
  }

  & p {
    position: absolute;
    right: 80px;
    bottom: -20px;
    border-radius: 50%;
    background: #626262;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-family: Inter;
    font-size: 14px;
  }
`;

const DetailSub = styled.div`
  position: relative;
  padding-top: 20px;
  height: 260px;

  & a {
    display: block;
    position: relative;
  }

  & a span {
    display: inline-block;
  }

  & h2 {
    line-height: 60px;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: bold;
  }
`;
const DetailSubWrapper = styled.div`
  display: block;
  margin-right: 20px;
  margin-left: 20px;

  & h2 {
    line-height: 144%;
    font-family: Pretendard;
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
  font-family: Pretendard;
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
  font-family: Pretendard;
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
  Contents,
  DetailContents,
  DetailMain,
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
