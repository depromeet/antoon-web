import VoteChip from '@components/chip/VoteChip';
import { VoteTag } from '@components/vote/VoteHeader.style';
import { Topic } from '@_types/topics-type';
import Image from 'next/image';
import {
  AllTopicCardWrapper,
  AllTopicCardContentContainer,
  AllTopicCardImageContainer,
  AllTopicCardSecondImage,
  AllTopicCardTitle,
  AllTopicJoinCount,
} from './AllTopicCard.style';

type Props = {
  topic: Topic;
};

function AllTopicCard(props: Props) {
  const { topicCategory, tags, title, joinCount, thumbnails } = props.topic;

  return (
    <AllTopicCardWrapper>
      {thumbnails.length === 1 && (
        <Image
          src={
            'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/blue.png'
          }
          alt={title}
          width={72}
          height={72}
        />
      )}
      {thumbnails.length === 2 && (
        <AllTopicCardImageContainer>
          <Image
            src={
              'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/blue.png'
            }
            alt={title}
            width={44}
            height={44}
          />
          <AllTopicCardSecondImage>
            <Image
              src={
                'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/yellow.png'
              }
              alt={title}
              width={44}
              height={44}
            />
          </AllTopicCardSecondImage>
        </AllTopicCardImageContainer>
      )}
      <AllTopicCardContentContainer>
        <VoteTag category={topicCategory} style={{ padding: 0 }}>
          <VoteChip category={topicCategory} />
          {tags}
        </VoteTag>
        <AllTopicCardTitle>{title}</AllTopicCardTitle>
        <AllTopicJoinCount>{joinCount} 개미 참여 중</AllTopicJoinCount>
      </AllTopicCardContentContainer>
    </AllTopicCardWrapper>
  );
}

export default AllTopicCard;
