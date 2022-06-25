import { useEffect, useRef, useState } from 'react';
import { Mixpanel } from 'mixpanel';
import Header from '@components/layout/Header/Header';
import TopicCards from '@domains/community/topic/TopicCards';
import {
  HomeRealtimeChartWrapper,
  HomeRecommendationBackground,
  HomeRecommendationWrapper,
  HomeSectionWrapper,
} from '@domains/webtoon/home/Home.style';
import RealTimeChartTitle from '@domains/webtoon/home/realTimeChart/RealTimeChartTitle';
import Carousel from '@components/carousel/Carousel';
import RealTimeChart from '@domains/webtoon/home/realTimeChart/RealTimeChart';
import Title from '@components/Title';
import SubTitle from '@components/SubTitle';
import AllTopicCard from '@domains/community/topic/AllTopicCard';
import { useGetAllTopicsByCategory } from '@apis/topics';
import TagBtn from '@components/button/TagBtn';
import { TopicCategory } from '@_types/topics-type';

const categoryType = {
  인기순: 'RANKS',
  최신순: 'LATEST',
  종료: 'CLOSES',
};

type categoryTypeKey = keyof typeof categoryType;

function Community() {
  const [category, setCategory] = useState<categoryTypeKey>('인기순');

  const { data, isLoading, isError } = useGetAllTopicsByCategory(
    categoryType[category] as TopicCategory,
  );

  console.log(data?.topics, isLoading, isError);

  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setCategory(e.currentTarget.textContent as categoryTypeKey);
  };

  console.log(category);

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '커뮤니티 페이지',
    });
  }, []);

  return (
    <div>
      <Header title="커뮤니티" rightBtn="profile" />
      <HomeRealtimeChartWrapper>
        <RealTimeChartTitle />
        <Carousel>
          <RealTimeChart />
        </Carousel>
      </HomeRealtimeChartWrapper>
      <HomeRecommendationWrapper>
        <HomeRecommendationBackground>
          <SubTitle type="normal">어디에 투표할까?</SubTitle>
          <div style={{ paddingTop: '0.6rem', paddingBottom: '1.4rem' }}>
            <Title type="normal">개미들의 선택</Title>
          </div>
          <TopicCards />
        </HomeRecommendationBackground>
      </HomeRecommendationWrapper>
      <section>
        <div
          style={{
            paddingTop: '0.6rem',
            paddingBottom: '1.4rem',
            marginRight: '2.4rem',
          }}
        >
          <Title type="normal">모든 토픽</Title>
          <div style={{ display: 'flex', gap: '0.8rem', paddingTop: '0.8rem' }}>
            <TagBtn onClick={onSelectCategory} selected={category === '인기순'}>
              인기순
            </TagBtn>
            <TagBtn onClick={onSelectCategory} selected={category === '최신순'}>
              최신순
            </TagBtn>
            <TagBtn onClick={onSelectCategory} selected={category === '종료'}>
              종료
            </TagBtn>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '1.6rem',
              gap: '1.6rem',
            }}
          >
            {data?.topics.map((topic) => (
              <AllTopicCard topic={topic} key={topic.topicId} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
