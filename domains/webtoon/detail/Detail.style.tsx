import styled from '@emotion/styled';

const DetailWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 30px auto;
  background-color: #f1f1f1;
  background-position: center top;
  background-size: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  min-width: 320px;
`;

const Contents = styled.div`
  & .back_area {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const DetailContents = styled.section`
  max-width: 1024px;
  background: #fff;
  border-bottom: 8px solid #f1f1f1;
  display: block;
`;

const DetailMain = styled.div`
  height: 60rem;
  position: relative;
  & a {
    display: block;
    position: relative;
  }
  & a span {
    display: inline-block;
  }
  & h2 {
    font-family: 'notokr-regular';
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    margin-left: 20px;
  }
`;

const MainWrapper = styled.div`
  padding-top: 62px;

  & h2 {
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 20px;
    line-height: 144%;
    font-style: normal;
  }
`;

const MainTitle = styled.div`
  width: 55%;
  max-width: 300px;
  float: left;
  & .ellipsis2 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const Platform = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-left: 20px;
  margin-bottom: 10px;
  font-family: 'Preahvihear';
  font-size: 14px;
  font-weight: 400;
  line-height: 20.16px;

  & ::after {
    content: '';
    display: block;
    width: 100%;
  }
`;
const MainScore = styled.div`
  display: block;
  margin-top: 10px;
  margin-left: 20px;
`;
const Point = styled.p`
  color: '#000';
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 3.6rem;
  width: 100%;
  margin-bottom: 10px;
`;
const PointUpDown = styled.p`
  color: '#000';
  opacity: 0.6;
  font-family: 'Pretendard';
  font-style: 'normal';
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
`;

const ThumbNailWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-top: 40px;
  float: right;
  position: relative;
  margin-right: 20px;
`;

const MainThumbnailImg = styled.div`
  position: relative;
`;

const MainThumbnail = styled.div`
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100px;

  & img {
    border-radius: 50%;
  }
  & p {
    font-size: 14px;
    font-family: 'Inter';
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #c4c4c4;
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
    color: #000;
  }
`;

const DetailSub = styled.div`
  height: 260px;
  padding-top: 20px;
  position: relative;
  & a {
    display: block;
    position: relative;
  }
  & a span {
    display: inline-block;
  }
  & h2 {
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
  }
`;
const DetailSubWrapper = styled.div`
  display: block;
  margin-left: 20px;
  margin-right: 20px;
  & h2 {
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 20px;
    line-height: 144%;
    font-style: normal;
  }
`;
const Category = styled.div`
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 144%;
  font-style: normal;
  margin-top: 12px;
  margin-bottom: 6px;
  opacity: 0.8;
`;
const Description = styled.p`
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 144%;
  font-style: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.8;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
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
  padding: 0 0px;
  width: 102%;
  height: 100%;
  overflow-y: visible;
  z-index: 2;
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
