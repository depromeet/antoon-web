import {
  WebtoonWriter,
  ChartStatus,
  WebtoonJoinLeaveRespoonse,
} from '@_types/webtoon-type';
import Image from 'next/image';
import Charts from '@components/charts/Charts';
import {
  Category,
  CategoryTitle,
  ChartWrapper,
  Container,
  Description,
  DescriptionContent,
  DescriptionMoreBtn,
  DetailContents,
  DetailMain,
  DetailSub,
  DetailSubWrapper,
  DetailWrapper,
  InfoBtn,
  InfoContent,
  MainHeader,
  MainScore,
  MainThumbnail,
  MainThumbnailImg,
  MainThumbnailRanking,
  MainTitle,
  MainWrapper,
  Platform,
  PlatformHeader,
  PlatformImg,
  Point,
  PointPercentage,
  PointTooltip,
  PointUpDown,
  ThumbNailWrapper,
} from './Detail.style';
import CategorySlider from '@components/detail/category/CategorySlider';
import Tabs from '@components/detail/tabs/Tabs';
import Bar from '@components/bar/Bar';
import BtnFooter from '@components/detail/button/BtnFooter';
import { useGetGraphScore, useGetWebtoonById } from '@apis/webtoons';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import { DEFAULT_IMG } from '@constants/icon-constants';
import { useEffect, useRef, useState } from 'react';
import { isEllipsisActive } from 'utils/css-util';
import Modal, { joinLeaveType } from '@components/modal/detail/Modal';
import { Graph } from '@_types/chart-type';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { TooltipIcon } from '@assets/icons';

type upDownStatusType = {
  status: ChartStatus;
  sign: string;
};

function Detail({ id }: { id: number }) {
  const { data, isLoading } = useGetWebtoonById(id);

  const chartData_days = useGetGraphScore(id, 'days').data;
  const chartData_weekends = useGetGraphScore(id, 'weekends').data;
  const chartData_months = useGetGraphScore(id, 'months').data;
  const chartData_three_months = useGetGraphScore(id, 'three-months').data;

  const detailSubRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [chartData, setChartData] = useState<Graph>();
  const [isHide, setIsHide] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [joinLeave, setJoinLeave] = useState<joinLeaveType>('JOIN');
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [chartType, setChartType] = useState('days');
  const [upDownStatus, setUpDownStatus] = useState<upDownStatusType>({
    status: '',
    sign: '',
  });
  const [recommends, setRecommends] = useState<WebtoonJoinLeaveRespoonse>();

  const DESCRIPTION_MORE_DEFAULT_MARGIN = 40;

  const getChartParameter = () => {
    switch (chartType) {
      case 'days':
        setChartData(chartData_days);
        break;
      case 'weekends':
        setChartData(chartData_weekends);
        break;
      case 'months':
        setChartData(chartData_months);
        break;
      case 'three-months':
        setChartData(chartData_three_months);
        break;
      default:
        setChartData(chartData_days);
    }
  };

  useEffect(() => {
    if (descriptionRef.current && descriptionRef.current.clientHeight > 0) {
      !isEllipsisActive(descriptionRef.current) && setIsHide(true);
    }
    if (data?.scoreGapPercent && data) {
      setUpDownStatus(calculateUpDownStatus);
      setRecommends({
        status: data.recommendationStatus,
        joinCount: data.joinCount,
        leaveCount: data.leaveCount,
        getCoin: false,
      });
    }
    if (chartType && chartData_days) {
      getChartParameter();
    }
  });

  if (isLoading && !data) {
    return <LoadingSpinner />;
  }

  if (!data) return <OnError>웹툰정보를 불러오지 못하고 있어요😭😭😭</OnError>;

  const handleMoreBtnClick = () => {
    if (descriptionRef.current && detailSubRef.current) {
      descriptionRef.current.classList.add('show');
      setIsHide(true);

      detailSubRef.current.style.height = `${
        detailSubRef.current.offsetHeight +
        descriptionRef.current.offsetHeight -
        DESCRIPTION_MORE_DEFAULT_MARGIN
      }px`;
    }
  };

  const handleTooltipClick = () => {
    setIsShowTooltip(!isShowTooltip);
  };

  const calculatedPublishedDay = () => {
    const normalPublishedday = {
      day: data.publishDays
        .reduce((acc, cur) => `${acc},${cur.day}`, '')
        .substring(1),
    };
    if (normalPublishedday.day == 'null') return '없음';

    switch (data.publishDays.length) {
      case 0:
        return '미연재';
      case 5:
        return '평일';
      case 7:
        return '매일';
      default:
        return normalPublishedday.day;
    }
  };

  const calculatedGenre = () => {
    return (
      data.genres.filter((genre) => typeof genre !== undefined).shift()
        ?.genreCategoryDescription || '장르없음'
    );
  };

  const calculetedPublished = () => {
    switch (data.status) {
      case 'PUBLISH':
        return '연재중';
      default:
        return '완결';
    }
  };

  const calculateUpDownStatus: upDownStatusType =
    data?.scoreGapPercent > 0
      ? { status: 'UP', sign: '+' }
      : data?.scoreGapPercent < 0
      ? { status: 'DOWN', sign: '-' }
      : { status: 'MAINTAIN', sign: '' };

  const handleTabChange = (e: string) => {
    setChartType(e);
    getChartParameter();
  };

  return (
    <ErrorBoundary message="웹툰정보를 불러오지 못하고 있어요 😭😭😭">
      <DetailWrapper>
        <Container>
          <DetailContents>
            <DetailMain>
              <MainWrapper>
                <MainHeader>
                  <PlatformHeader platform={data.platform}>
                    <Platform onClick={() => window.open(data.webtoonUrl)}>
                      <PlatformImg platform={data.platform}></PlatformImg>
                      {data.platformDescription} 바로가기&gt;
                    </Platform>
                  </PlatformHeader>
                  <MainTitle>{data.title}</MainTitle>
                  <MainScore upDown={upDownStatus?.status}>
                    <Point>
                      {data.score} ANT
                      <PointTooltip>
                        <InfoBtn onClick={handleTooltipClick}></InfoBtn>
                        <InfoContent isShow={isShowTooltip}>
                          <TooltipIcon />
                        </InfoContent>
                      </PointTooltip>
                    </Point>
                    <PointUpDown>
                      {upDownStatus?.sign}
                      {data.scoreGap} ANT
                      <PointPercentage>
                        ({data.scoreGapPercent}%)
                      </PointPercentage>
                    </PointUpDown>
                  </MainScore>
                </MainHeader>
                <ThumbNailWrapper>
                  <MainThumbnail upDown={upDownStatus?.status}>
                    <MainThumbnailImg>
                      <Image
                        src={data.thumbnail || DEFAULT_IMG.THUMBNAIL}
                        alt={data.title}
                        width={1000}
                        height={1000}
                      />
                    </MainThumbnailImg>
                    <MainThumbnailRanking>
                      {data.ranking || '-'}위
                    </MainThumbnailRanking>
                  </MainThumbnail>
                </ThumbNailWrapper>
                <ChartWrapper>
                  <Charts
                    chartData={chartData}
                    forceUpdate={false}
                    status={upDownStatus?.status}
                    chartType={chartType}
                  />
                </ChartWrapper>
                <Tabs onTabChange={handleTabChange} />
              </MainWrapper>
            </DetailMain>
            <Bar />
            <DetailSub ref={detailSubRef}>
              <DetailSubWrapper>
                <CategoryTitle>작품소개</CategoryTitle>
                <Category>
                  {data.writers.map((writer: WebtoonWriter) => {
                    return (
                      <span key={writer.webtoonWriterId}>{writer.name}</span>
                    );
                  })}
                </Category>
                <Description>
                  <DescriptionContent ref={descriptionRef}>
                    {data?.content}
                  </DescriptionContent>
                  <DescriptionMoreBtn
                    className={isHide ? 'hide' : ''}
                    onClick={handleMoreBtnClick}
                  >
                    ...더보기
                  </DescriptionMoreBtn>
                </Description>
                <CategorySlider
                  jenre={calculatedGenre()}
                  categoryStatus={{
                    date: calculatedPublishedDay(),
                    ingStatus: calculetedPublished(),
                  }}
                  platform={data.platform}
                />
              </DetailSubWrapper>
            </DetailSub>
            <Bar />
          </DetailContents>
          <BtnFooter
            onOpen={() => setIsModalOpen(true)}
            onJoinLeave={setJoinLeave}
            joinLeaveStatus={recommends?.status || 'NONE'}
            joinCount={recommends?.joinCount || 0}
            leaveCount={recommends?.leaveCount || 0}
          />
        </Container>
        <Modal
          webtoonId={data.webtoonId}
          title={data.title}
          joinLeave={joinLeave}
          isOpen={isModalOpen}
          onRecommendSet={setRecommends}
          onClose={setIsModalOpen}
        />
      </DetailWrapper>
    </ErrorBoundary>
  );
}

export default Detail;
