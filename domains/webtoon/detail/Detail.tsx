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
import CategorySlider from '@components/detail/category/carousel/CategorySlider';

interface Props {
  item: Webtoon;
  chartData: ChartData;
}

function Detail(props: Props) {
  const { item, chartData } = props;

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
                      <a href="#">네이버웹툰 &gt;</a>
                    </Platform>
                    <h2 className="ellipsis2">
                      흑막 여주가 날 새 엄마로 만들려고 해
                    </h2>
                    <MainScore>
                      <Point>9.98점</Point>
                      <PointUpDown>어제보다 +0.1점(0.5%)</PointUpDown>
                    </MainScore>
                  </MainTitle>
                  <ThumbNailWrapper>
                    <MainThumbnail>
                      <MainThumbnailImg>
                        <Image
                          src="https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png"
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
                </MainWrapper>
              </DetailMain>
              <DetailSub>
                <DetailSubWrapper>
                  <h2>작품소개</h2>
                  <Category>
                    작가 <ContentBar /> 순끼
                  </Category>
                  <Description>
                    세기말 풋사과 보습학원설명설명세기말 풋사과
                    보습학원설명설명세기말 풋사과 보습학원설명설명세기말 풋사과
                    보습학원설명설명
                  </Description>
                  <CategorySlider />
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
