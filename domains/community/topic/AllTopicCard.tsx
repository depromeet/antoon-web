import VoteChip from '@components/chip/VoteChip';
import { VoteTag } from '@components/vote/VoteHeader.style';
import { Topic } from '@_types/topics-type';
import Image from 'next/image';

type Props = {
  topic: Topic;
};

function AllTopicCard(props: Props) {
  const { topicCategory, tags, title, joinCount, thumbnails } = props.topic;

  console.log(topicCategory, tags, title, joinCount, thumbnails);

  return (
    <div
      style={{
        display: 'flex',
        gap: '1.2rem',
      }}
    >
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
        <div style={{ width: '7.2rem', height: '7.2rem' }}>
          <Image
            src={
              'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/blue.png'
            }
            alt={title}
            width={44}
            height={44}
          />
          <div
            style={{
              position: 'relative',
              bottom: '2.8rem',
              left: '2.6rem',
              border: 'solid white',
              borderRadius: '10rem',
              width: 'fit-content',
            }}
          >
            <Image
              src={
                'https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/ANT_DEFAULT/yellow.png'
              }
              alt={title}
              width={44}
              height={44}
            />
          </div>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          gap: '0.2rem',
          flexDirection: 'column',
        }}
      >
        <div>
          <VoteTag category={topicCategory} style={{ padding: 0 }}>
            <VoteChip category={topicCategory} />
            {tags}
          </VoteTag>
        </div>
        <div
          style={{
            fontWeight: 600,
            width: '22.8rem',
            fontSize: '1.4rem',
            height: '4rem',
          }}
        >
          {title}
        </div>
        <div style={{ fontWeight: 500, color: 'lightgray' }}>
          {joinCount} 개미 참여 중
        </div>
      </div>
    </div>
  );
}

export default AllTopicCard;
