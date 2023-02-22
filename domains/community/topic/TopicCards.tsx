import { useRef } from 'react';
import Link from 'next/link';

import { useGetTopicsChoices } from '@apis/topics';

import Carousel from '@components/carousel/Carousel';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import {
  TopicCardContainer,
  TopicCardHashtag,
  TopicCardJoinedCounts,
  TopicCardsWrapper,
  TopicCardTitle,
} from './TopicCards.style';

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

  if (isLoading) return <LoadingSpinner height={124} />;

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
          <Link
            key={topic.topicId}
            href={`/community/topic/${topic.topicId}`}
            passHref
          >
            <a>
              <TopicCardsWrapper bgColor={colors[idx]}>
                <TopicCardHashtag>
                  {topic.tags.map((topic) => `#${topic} `)}
                </TopicCardHashtag>
                <TopicCardTitle>{topic.title}</TopicCardTitle>
                <TopicCardJoinedCounts>
                  {topic.joinCount} 개미 참여중
                </TopicCardJoinedCounts>
              </TopicCardsWrapper>
            </a>
          </Link>
        ))}
      </TopicCardContainer>
    </Carousel>
  );
}

export default TopicCards;
