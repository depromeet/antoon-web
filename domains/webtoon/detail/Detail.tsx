import { Webtoon } from '@_types/webtoon-type';
import BackIcon from '@components/icon/Icon_Back';
import Image from 'next/image';
import Charts from '@components/charts/Charts';
import { ChartData } from '@_types/chart-type';
import {
  Category,
  ChartWrapper,
  Container,
  ContentBar,
  Contents,
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
  Point,
  PointUpDown,
  ThumbNailWrapper,
} from './Detail.style';
import CategorySlider from '@components/detail/category/CategorySlider';
import { useEffect, useState } from 'react';
import Tabs from '@components/detail/tabs/Tabs';

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
          <Contents>
            <DetailContents>
              <DetailMain>
                <div className="back_area">
                  <BackIcon />
                </div>
                <MainWrapper>
                  <MainTitle>
                    <Platform>
                      <a href="#">{item.platform} &gt;</a>
                    </Platform>
                    <h2 className="ellipsis2">{item.title}</h2>
                    <MainScore>
                      <Point>9.98점</Point>
                      <PointUpDown>어제보다 +0.1점(0.5%)</PointUpDown>
                    </MainScore>
                  </MainTitle>
                  <ThumbNailWrapper>
                    <MainThumbnail>
                      <MainThumbnailImg>
                        <Image
                          src={item.thumnail || ''}
                          alt="대학일기"
                          width={1000}
                          height={1000}
                        />
                      </MainThumbnailImg>
                      <p>1위</p>
                    </MainThumbnail>
                  </ThumbNailWrapper>
                  <ChartWrapper>
                    <Charts chartData={chartData} forceUpdate={false} />
                  </ChartWrapper>
                  <Tabs />
                </MainWrapper>
              </DetailMain>
              <DetailSub>
                <DetailSubWrapper>
                  <h2>작품소개</h2>
                  <Category>
                    작가 <ContentBar />
                    {item.author}
                  </Category>
                  <Description>{item.content}</Description>
                  <CategorySlider
                    platform={item.platform}
                    jenre={item.jenre || DEFAULT_MSG}
                    categoryStatus={{
                      date: item.date || DEFAULT_MSG,
                      ingStatus: '연재중',
                    }}
                  />
                </DetailSubWrapper>
              </DetailSub>
            </DetailContents>
          </Contents>
        </Container>
      </DetailWrapper>
    </>
  );
}

export default Detail;
