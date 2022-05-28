import { Webtoon, WebtoonWriter } from '@_types/webtoon-type';
import Image from 'next/image';
import Charts from '@components/charts/Charts';
import { ChartData } from '@_types/chart-type';
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
  PointUpDown,
  ThumbNailWrapper,
} from './Detail.style';
import CategorySlider from '@components/detail/category/CategorySlider';
import Tabs from '@components/detail/tabs/Tabs';
import Bar from '@components/bar/Bar';
import BtnFooter from '@components/detail/button/BtnFooter';
import { useGetWebtoonById } from '@apis/webtoons';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import { DEFAULT_IMG } from '@constants/icon-constants';
import { useLayoutEffect, useRef, useState } from 'react';
import { isEllipsisActive } from 'utils/css-util';

function Detail({ id }: { id: number }) {
  const { data, isError } = useGetWebtoonById(id);
  const detailSubRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isHide, setIsHide] = useState(false);
  const DESCRIPTION_MORE_DEFAULT_MARGIN = 40;

  /**
   * @name 차트
   * @mock {테스트데이터-아직MOCK입니다}
   */
  const chartData: ChartData = {
    label: 'daily',
    timeseries: {
      '00:00': 3.12,
      '04:00': 2.72,
      '08:00': 5.73,
      '12:00': 8.92,
      '16:00': 6.71,
      '20:00': 9.99,
      '24:00': 7.73,
    },
  };

  useLayoutEffect(() => {
    if (descriptionRef.current && descriptionRef.current.offsetHeight) {
      !isEllipsisActive(descriptionRef.current) && setIsHide(true);
    }
  });

  if (isError || !data)
    return <OnError> 웹툰정보를 불러오지 못하고 있어요😭😭😭</OnError>;

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

  const calculatedPublishedDay = () => {
    const normalPublishedday = {
      day: data.publishDays
        .reduce((acc, cur) => `${acc},${cur.day}`, '')
        .substring(1),
    };

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

  return (
    <ErrorBoundary message="웹툰정보를 불러오지 못하고 있어요 😭😭😭">
      <DetailWrapper>
        <Container>
          <DetailContents>
            <DetailMain>
              <MainWrapper>
                <MainHeader>
                  <PlatformHeader platform={data.platform}>
                    <Platform>
                      <PlatformImg platform={data.platform}></PlatformImg>
                      {data.platformDescription} 바로가기&gt;
                    </Platform>
                  </PlatformHeader>
                  <MainTitle>{data.title}</MainTitle>
                  <MainScore upDown={'UP' || ''}>
                    <Point>998점</Point>
                    <PointUpDown>
                      {'+' || ''}
                      5점<PointPercentage>(14%)</PointPercentage>
                    </PointUpDown>
                  </MainScore>
                </MainHeader>
                <ThumbNailWrapper>
                  <MainThumbnail upDown={'UP' || ''}>
                    <MainThumbnailImg>
                      <Image
                        src={data.thumbnail || DEFAULT_IMG.THUMBNAIL}
                        alt={data.title}
                        width={1000}
                        height={1000}
                      />
                    </MainThumbnailImg>
                    <MainThumbnailRanking>12위</MainThumbnailRanking>
                  </MainThumbnail>
                </ThumbNailWrapper>
                <ChartWrapper>
                  <Charts
                    chartData={chartData}
                    forceUpdate={false}
                    status={'UP' || 'NONE'}
                  />
                </ChartWrapper>
                <Tabs />
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
                    {data.content}
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
          <BtnFooter />
        </Container>
      </DetailWrapper>
    </ErrorBoundary>
  );
}

export default Detail;
