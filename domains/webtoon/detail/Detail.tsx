import { Webtoon } from '@_types/webtoon-type';
import Image from 'next/image';
import Charts from '@components/charts/Charts';
import { ChartData } from '@_types/chart-type';
import {
  Category,
  ChartWrapper,
  Container,
  ContentBar,
  Description,
  DetailContents,
  DetailMain,
  DetailSub,
  DetailSubWrapper,
  DetailWrapper,
  MainScore,
  MainThumbnail,
  MainThumbnailImg,
  MainTitle,
  MainWrapper,
  Platform,
  PlatformImg,
  Point,
  PointUpDown,
  ThumbNailWrapper,
} from './Detail.style';
import CategorySlider from '@components/detail/category/CategorySlider';
import { useEffect, useState } from 'react';
import Tabs from '@components/detail/tabs/Tabs';
import Bar from '@components/bar/Bar';
import BtnFooter from '@components/detail/button/BtnFooter';

interface Props {
  item: Webtoon;
  chartData: ChartData;
}

function Detail(props: Props) {
  const { item, chartData } = props;
  const DEFAULT_MSG = '미정';
  const [params, setParams] = useState(item.id);
  useEffect(() => setParams(item.id), [item.id]);

  return (
    <>
      <DetailWrapper>
        <Container>
          <DetailContents>
            <DetailMain>
              <MainWrapper>
                <MainTitle>
                  <Platform platform={item.platform}>
                    <a href="#">
                      {' '}
                      <PlatformImg platform={item.platform}></PlatformImg>
                      {item.platform} 바로가기&gt;
                    </a>
                  </Platform>
                  <h2 className="ellipsis2">{item.title}</h2>
                  <MainScore upDown={item.status || ''}>
                    <Point>998점</Point>
                    <PointUpDown>
                      {item.status == 'UP'
                        ? '+'
                        : item.status == 'DOWN'
                        ? '-'
                        : ''}
                      5점<span className="up-down-point">(14%)</span>
                    </PointUpDown>
                  </MainScore>
                </MainTitle>
                <ThumbNailWrapper>
                  <MainThumbnail upDown={item.status || ''}>
                    <MainThumbnailImg>
                      <Image
                        src={item.thumnail || ''}
                        alt="대학일기"
                        width={1000}
                        height={1000}
                      />
                    </MainThumbnailImg>
                    <p>12위</p>
                  </MainThumbnail>
                </ThumbNailWrapper>
                <ChartWrapper>
                  <Charts
                    chartData={chartData}
                    forceUpdate={false}
                    status={item.status || 'NONE'}
                  />
                </ChartWrapper>
                <Tabs />
              </MainWrapper>
            </DetailMain>
            <Bar />
            <DetailSub>
              <DetailSubWrapper>
                <h2>작품소개</h2>
                <Category>
                  작가 <ContentBar />
                  {item.author}
                </Category>
                <Description>{item.content}</Description>
                <CategorySlider
                  jenre={item.jenre || DEFAULT_MSG}
                  categoryStatus={{
                    date: item.date || DEFAULT_MSG,
                    ingStatus: '연재중',
                  }}
                  platform={item.platform}
                />
              </DetailSubWrapper>
            </DetailSub>
            <Bar />
          </DetailContents>
          <BtnFooter />
        </Container>
      </DetailWrapper>
    </>
  );
}

export default Detail;
