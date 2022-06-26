import VoteChip from '@components/chip/VoteChip';
import { VoteTag } from '@components/vote/VoteHeader.style';
import {
  AllTopicCardTitle,
  AllTopicJoinCount,
} from '@domains/community/topic/AllTopicCards.style';
import Image from 'next/image';
import React from 'react';
import {
  TopicBanner,
  TopicContentTopWrapper,
  TopicContentWrapper,
} from './TopicBanners.style';

const TopicBanners = function TopicBanners() {
  return (
    <TopicBanner>
      <Image
        src="https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/banners/love_revolution.png"
        alt="title"
        width={296}
        height={164}
        layout="fixed"
        objectFit="cover"
        style={{ borderRadius: '1.6rem 1.6rem 0 0' }}
      />
      <TopicContentWrapper>
        <TopicContentTopWrapper>
          <VoteChip category="AB" />
          <AllTopicJoinCount>12,345 개미 참여 중</AllTopicJoinCount>
        </TopicContentTopWrapper>
        <VoteTag category="AB" style={{ padding: 0 }}>
          연애혁명
        </VoteTag>
        <AllTopicCardTitle>
          이경우, 강효민 둘이 싸우면 누가 이길까
        </AllTopicCardTitle>
      </TopicContentWrapper>
    </TopicBanner>
  );
};

export default TopicBanners;
