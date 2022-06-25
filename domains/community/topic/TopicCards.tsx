import Carousel from '@components/carousel/Carousel';
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

  return (
    <Carousel ref={topicCardRef}>
      <TopicCardContainer>
        {data.map((item, idx) => (
          <TopicCardsWrapper key={idx} bgColor={colors[idx]}>
            <TopicCardHashtag>{item.hashTag}</TopicCardHashtag>
            <TopicCardTitle>{item.title}</TopicCardTitle>
            <TopicCardJoinedCounts>32,623 개미 참여중</TopicCardJoinedCounts>
          </TopicCardsWrapper>
        ))}
      </TopicCardContainer>
    </Carousel>
  );
}

export default TopicCards;
