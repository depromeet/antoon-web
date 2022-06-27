import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ArrowRight } from '@assets/icons';
import { StockUpIcon } from '@assets/icons/StockIcon';

import { getToLocaleString } from '@utils/num-util';

import CharacterPageCountDown from './CharacterPageCountDown';

import {
  CharacterDetailPageWrap,
  BackgroundColor,
  CharacterProfileImg,
  CharacterName,
  CharacterDataWrap,
  CharacterRank,
  Divider,
  TotalCoinAmount,
  WebtoonInfoWrap,
  WebtoonThumbnailWrap,
  WebtoonThumbnail,
  WebtoonDetailInfoWrap,
  WebtoonTitle,
  WebtoonScore,
  IconWrap,
  WebtoonContent,
  JoinBtn,
  TotalJoinCount,
} from './CharacterDetailPage.style';

function CharacterDetailPage() {
  const router = useRouter();

  const mockData = {
    backGroundColor: '#4E7F86',
    coinAmount: 12345,
    content:
      '평범하면서 금사빠인 고등학생 순정남 공주영은 까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다. 너무 다른 둘, 괜찮을까? 눈감으세요.',
    id: 1,
    isJoined: false,
    joinedCount: 12345,
    name: '최푸름',
    rank: 1,
    score: 998,
    title: '소녀재판',
    webtoonId: 1,
  };

  const onClickWebtoonInfo = () => {
    router.push(`/webtoon/${mockData.webtoonId}`);
  };

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <CharacterDetailPageWrap>
      {!isSSR && (
        <>
          <BackgroundColor backgroundColor={mockData.backGroundColor} />
          <CharacterProfileImg />
          <CharacterName>{mockData.name}</CharacterName>
          <CharacterDataWrap>
            <CharacterRank>현재 {mockData.rank}위</CharacterRank>
            <Divider />
            <TotalCoinAmount>
              누적 안트코인 {getToLocaleString(mockData.coinAmount)}
            </TotalCoinAmount>
          </CharacterDataWrap>
          <WebtoonInfoWrap onClick={onClickWebtoonInfo}>
            <WebtoonThumbnailWrap>
              <WebtoonThumbnail />
              <WebtoonDetailInfoWrap>
                <WebtoonTitle>{mockData.title}</WebtoonTitle>
                <WebtoonScore>{mockData.score}</WebtoonScore>
              </WebtoonDetailInfoWrap>
            </WebtoonThumbnailWrap>
            <IconWrap>
              <ArrowRight />
            </IconWrap>
          </WebtoonInfoWrap>
          <WebtoonContent>{mockData.content}</WebtoonContent>
          <CharacterPageCountDown endTime="" />
          <JoinBtn>
            <StockUpIcon />
            <span>탑승하기</span>
          </JoinBtn>
          <TotalJoinCount>
            {getToLocaleString(mockData.joinedCount)} 개미 참여 중
          </TotalJoinCount>
        </>
      )}
    </CharacterDetailPageWrap>
  );
}

export default CharacterDetailPage;
