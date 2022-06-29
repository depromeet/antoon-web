import { useGetAllTopicsByCategory } from '@apis/topics';
import VoteChip from '@components/chip/VoteChip';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { VoteTag } from '@components/vote/VoteHeader.style';
import { TopicCategory } from '@_types/topics-type';
import Image from 'next/image';
import { categoryType, categoryTypeKey } from '@domains/community/AllTopics';
import { useEffect, useState } from 'react';

import {
  AllTopicCardWrapper,
  AllTopicCardContentContainer,
  AllTopicCardImageContainer,
  AllTopicCardSecondImage,
  AllTopicCardTitle,
  AllTopicJoinCount,
  AllTopicCardContainer,
} from '@domains/community/topic/AllTopicCards.style';

type Props = {
  category: categoryTypeKey;
};

function AllTopicCards(props: Props) {
  const { category } = props;
  const [cate, setCate] = useState(category);
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useGetAllTopicsByCategory(
    categoryType[category] as TopicCategory,
    page,
  );

  useEffect(() => {
    if (cate) {
      setPage(0);
    } else if (!data?.lastPage) {
      setPage(page + 1);
    }
  }, [data, category]);

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.data) ||
    data?.data?.length === 0 ||
    isError
  )
    return <OnError>모든 토픽을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <AllTopicCardContainer>
      {data?.data.map((topic) => (
        <AllTopicCardWrapper key={topic.topicId}>
          {topic.thumbnails.length === 1 && (
            <Image
              src={
                'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/blue.png'
              }
              alt={topic.title}
              width={72}
              height={72}
            />
          )}
          {topic.thumbnails.length === 2 && (
            <AllTopicCardImageContainer>
              <Image
                src={
                  'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/blue.png'
                }
                alt={topic.title}
                width={44}
                height={44}
              />
              <AllTopicCardSecondImage>
                <Image
                  src={
                    'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/yellow.png'
                  }
                  alt={topic.title}
                  width={44}
                  height={44}
                />
              </AllTopicCardSecondImage>
            </AllTopicCardImageContainer>
          )}
          <AllTopicCardContentContainer>
            <VoteTag category={topic.topicCategory} style={{ padding: 0 }}>
              <VoteChip category={topic.topicCategory} />
              {topic.tags}
            </VoteTag>
            <AllTopicCardTitle>{topic.title}</AllTopicCardTitle>
            <AllTopicJoinCount>
              {topic.joinCount} 개미 참여 중
            </AllTopicJoinCount>
          </AllTopicCardContentContainer>
        </AllTopicCardWrapper>
      ))}
    </AllTopicCardContainer>
  );
}

export default AllTopicCards;
