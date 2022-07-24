import styled from '@emotion/styled';
import { ChartStatus } from '@_types/webtoon-type';

const DetailWrapper = styled.div`
  background-color: #fff;
  background-position: center top;
  background-size: 100%;
  width: 100%;
  min-width: 320px;
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
  height: 515px;

  & a {
    display: block;
    position: relative;
  }

  & a span {
    display: inline-block;
  }

  & h2 {
    line-height: 25px;
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

const MainHeader = styled.div`
  float: left;
  width: 55%;
  max-width: 300px;
`;

const MainTitle = styled.h2`
  display: box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PlatformHeader = styled.div<{ platform: string }>`
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

const Platform = styled.a``;

const PlatformImg = styled.span<{ platform: string }>`
  margin-right: 4px;
  border-radius: 20%;
  background-image: url(${(props) =>
    `/images/platform_${props?.platform}.png`});
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
      : props.theme.colors.chart.point_none_100};
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

const PointTooltip = styled.span`
  position: relative;
  z-index: 99;
  outline: none;
`;

const InfoBtn = styled.button`
  position: absolute;
  left: 8px;
  background-image: url('/images/info_line.png');
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  -webkit-tap-highlight-color: transparent;
`;
const InfoContent = styled.span<{ isShow: boolean }>`
  position: absolute;
  top: 20px;
  left: 0;
  transition: all 0.3s;
  opacity: ${(props) => (props.isShow ? '1' : '0')};
  z-index: 99;
  background-image: url('/images/tooltip.png');
  background-repeat: no-repeat;
  width: 170px;
  height: 82px;
  object-fit: cover;
`;

const PointUpDown = styled.p`
  opacity: 0.8;
  width: 100%;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  font-style: 'normal';
`;

const PointPercentage = styled.span`
  font-size: 12px;
  font-weight: 500;
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

const MainThumbnailRanking = styled.p``;

const MainThumbnail = styled.div<{ upDown: ChartStatus }>`
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
        ? props.theme.colors.secondary.red
        : props?.upDown === 'DOWN'
        ? props.theme.colors.secondary.blue
        : props.theme.colors.chart.point_none_100};
    padding: 1px 6px;
    width: 32px;
    height: 14px;
    text-align: center;
    line-height: 14.4px;
    color: ${(props) => props.theme.colors.basic.white};
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
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 144%;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;

  & span:not(:last-child)::after {
    margin-right: 4px;
    margin-left: 4px;
    border-right: 2px solid ${(props) => props.theme.colors.grayscale.gray_300};
    padding: 0;
    content: '';
  }
`;

const CategoryTitle = styled.h2``;

const Description = styled.div`
  position: relative;
`;

const DescriptionContent = styled.p`
  /* stylelint-disable-next-line */
  display: -webkit-box;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 144%;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;

const DescriptionMoreBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.grayscale.gray_300};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.grayscale.gray_600} 0%,
    rgb(255 255 255 / 0%) 0%,
    ${(props) => props.theme.colors.basic.white} 18%
  );
  padding-left: 20px;
  max-height: 2rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 12px;

  &.hide {
    display: none;
  }
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
  PlatformHeader,
  PlatformImg,
  Platform,
  MainWrapper,
  MainHeader,
  MainTitle,
  MainScore,
  Point,
  PointTooltip,
  InfoBtn,
  InfoContent,
  PointUpDown,
  PointPercentage,
  ThumbNailWrapper,
  MainThumbnailImg,
  MainThumbnailRanking,
  MainThumbnail,
  DetailSub,
  DetailSubWrapper,
  Category,
  CategoryTitle,
  Description,
  DescriptionContent,
  DescriptionMoreBtn,
  ChartWrapper,
};
