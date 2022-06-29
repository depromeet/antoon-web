import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VoteChip from '@components/chip/VoteChip';
import { VoteTag } from '@components/vote/VoteHeader.style';
import {
  AllTopicCardTitle,
  AllTopicJoinCount,
} from '@domains/community/topic/AllTopicCards.style';
import {
  TopicBannerContainer,
  TopicBanner,
  TopicContentTopWrapper,
  TopicContentWrapper,
} from './TopicBanners.style';
import StepIndicator from '@assets/icons/StepIndicator';
import {
  IndicatorContainer,
  IndicatorWrapper,
} from '@components/modal/onboard/Modal.style';
import Link from 'next/link';

const TopicBanners = function TopicBanners() {
  const [step, setStep] = useState<number>(0);

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '1rem',
    slidesToShow: 3,
    speed: 300,
    arrows: false,
    customPaging: (idx: number) => {
      return (
        <div style={{ paddingTop: '2rem' }}>
          <IndicatorContainer>
            <IndicatorWrapper>
              <StepIndicator active={step === idx} />
            </IndicatorWrapper>
          </IndicatorContainer>
        </div>
      );
    },
    afterChange: (idx: number) => {
      setStep(idx % 4);
    },
  };

  return (
    <TopicBannerContainer>
      <Slider {...settings}>
        <Link href="/community/topic/1" passHref>
          <a>
            <TopicBanner>
              <Image
                src="https://antoon-api-bucket.s3.ap-northeast-2.amazonaws.com/banners/%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE_%E1%84%8E%E1%85%A1%E1%84%90%E1%85%A2%E1%84%89%E1%85%A5%E1%86%A8.png"
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
                  <AllTopicJoinCount>12,476 개미 참여 중</AllTopicJoinCount>
                </TopicContentTopWrapper>
                <VoteTag category="AB" style={{ padding: 0 }}>
                  #연애혁명 #소녀재판
                </VoteTag>
                <AllTopicCardTitle>
                  이경우, 차태석 둘이 싸우면 누가 이길까
                </AllTopicCardTitle>
              </TopicContentWrapper>
            </TopicBanner>
          </a>
        </Link>

        <Link href="/community/topic/2" passHref>
          <a>
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
                  #연애혁명
                </VoteTag>
                <AllTopicCardTitle>🔒 스포일러 방지</AllTopicCardTitle>
              </TopicContentWrapper>
            </TopicBanner>
          </a>
        </Link>

        <Link href="/community/topic/3" passHref>
          <a>
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
                  #소녀의 세계
                </VoteTag>
                <AllTopicCardTitle>🔒 스포일러 방지</AllTopicCardTitle>
              </TopicContentWrapper>
            </TopicBanner>
          </a>
        </Link>

        <Link href="/community/topic/4" passHref>
          <a>
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
                  #소녀의 세계
                </VoteTag>
                <AllTopicCardTitle>
                  오리가 직장인이 된다면 어울리는 직업은?
                </AllTopicCardTitle>
              </TopicContentWrapper>
            </TopicBanner>
          </a>
        </Link>
      </Slider>
    </TopicBannerContainer>
  );
};

export default TopicBanners;
