import Carousel from '@components/carousel/Carousel';
import VoteChip from '@components/chip/VoteChip';
import { VoteTag } from '@components/vote/VoteHeader.style';
import {
  AllTopicCardTitle,
  AllTopicJoinCount,
} from '@domains/community/topic/AllTopicCards.style';
import useCarousel from '@hooks/useCarousel';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  TopicBanner,
  TopicContentTopWrapper,
  TopicContentWrapper,
} from './TopicBanners.style';

const TopicBanners = function TopicBanners() {
  const TopicBannerRef = useRef<HTMLDivElement>(null);

  useCarousel(TopicBannerRef);

  return (
    <>
      <Carousel>
        <div style={{ gap: '1rem', display: 'flex' }}>
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
          <TopicBanner>
            <Image
              src="https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/banners/no_spoiler.png"
              alt="title"
              width={296}
              height={164}
              layout="fixed"
              objectFit="cover"
              style={{ borderRadius: '1.6rem 1.6rem 0 0' }}
            />
            <TopicContentWrapper>
              <TopicContentTopWrapper>
                <VoteChip category="CHOICE" />
                <AllTopicJoinCount>12,345 개미 참여 중</AllTopicJoinCount>
              </TopicContentTopWrapper>
              <VoteTag category="CHOICE" style={{ padding: 0 }}>
                연애혁명
              </VoteTag>
              <AllTopicCardTitle>🔒 스포일러 방지</AllTopicCardTitle>
            </TopicContentWrapper>
          </TopicBanner>
          <TopicBanner>
            <Image
              src="https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/banners/no_spoiler.png"
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
                소녀의 세계
              </VoteTag>
              <AllTopicCardTitle>🔒 스포일러 방지</AllTopicCardTitle>
            </TopicContentWrapper>
          </TopicBanner>
          <TopicBanner>
            <Image
              src="https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/banners/teacher_or_doctor.png"
              alt="title"
              width={296}
              height={164}
              layout="fixed"
              objectFit="cover"
              style={{ borderRadius: '1.6rem 1.6rem 0 0' }}
            />
            <TopicContentWrapper>
              <TopicContentTopWrapper>
                <VoteChip category="CHOICE" />
                <AllTopicJoinCount>12,345 개미 참여 중</AllTopicJoinCount>
              </TopicContentTopWrapper>
              <VoteTag category="CHOICE" style={{ padding: 0 }}>
                소녀의 세계
              </VoteTag>
              <AllTopicCardTitle>
                오리가 직장인이 된다면 어울리는 직업은?
              </AllTopicCardTitle>
            </TopicContentWrapper>
          </TopicBanner>
        </div>
      </Carousel>
    </>
  );
};

export default TopicBanners;
