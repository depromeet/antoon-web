import { useGetTopicsChoices } from '@apis/topics';
import Carousel from '@components/carousel/Carousel';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import React, { useRef } from 'react';
import {
  TopicCardContainer,
  TopicCardHashtag,
  TopicCardJoinedCounts,
  TopicCardsWrapper,
  TopicCardTitle,
} from './TopicCards.style';

const data = [
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
  {
    hashTag: '#연애혁명',
    title: '연애혁명의 결말은 해피엔딩일까? 아니면 새드엔딩일까?',
  },
];

const colors = [
  '#889795',
  '#636C84',
  '#7F7693',
  '#6D9399',
  '#7F92AA',
  '#B18E8D',
  '#B1A38F',
  '#BA919F',
];

function TopicCards() {
  const topicCardRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useGetTopicsChoices();

  console.log(data);

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.choiceTopics) ||
    data?.choiceTopics?.length === 0 ||
    isError
  )
    return <OnError>개미들의 선택을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <Carousel ref={topicCardRef}>
      <TopicCardContainer>
        {data.choiceTopics.map((topic, idx) => (
          <TopicCardsWrapper key={topic.topicId} bgColor={colors[idx]}>
            <TopicCardHashtag>
              {topic.tags.map((topic) => `#${topic} `)}
            </TopicCardHashtag>
            <TopicCardTitle>{topic.title}</TopicCardTitle>
            <TopicCardJoinedCounts>
              {topic.joinCount} 개미 참여중
            </TopicCardJoinedCounts>
          </TopicCardsWrapper>
        ))}
      </TopicCardContainer>
    </Carousel>
  );
}

export default TopicCards;
