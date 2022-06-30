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
  JoinBtn,
  TotalJoinCount,
} from './CharacterDetailPage.style';

import { CharacterInfo } from '@_types/webtoon-type';

function CharacterDetailPage({ characters }: { characters: CharacterInfo }) {
  const router = useRouter();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const onClickWebtoonInfo = () => {
    router.push(`/webtoon/${characters.webtoonId}`);
  };

  return (
    <CharacterDetailPageWrap>
      {!isSSR && (
        <>
          <BackgroundColor backgroundColor={characters.backGroundColor} />
          <CharacterProfileImg src={characters.characterThumbnail} />
          <CharacterName>{characters.name}</CharacterName>
          <CharacterDataWrap>
            <CharacterRank>현재 {characters.rank}위</CharacterRank>
            <Divider />
            <TotalCoinAmount>
              누적 안트코인 {getToLocaleString(characters.coinAmount)}
            </TotalCoinAmount>
          </CharacterDataWrap>
          <WebtoonInfoWrap onClick={onClickWebtoonInfo}>
            <WebtoonThumbnailWrap>
              <WebtoonThumbnail src={characters.webtoonThumbnail} />
              <WebtoonDetailInfoWrap>
                <WebtoonTitle>{characters.title}</WebtoonTitle>
                <WebtoonScore>{characters.score}</WebtoonScore>
              </WebtoonDetailInfoWrap>
            </WebtoonThumbnailWrap>
            <IconWrap>
              <ArrowRight />
            </IconWrap>
          </WebtoonInfoWrap>
          <CharacterPageCountDown endTime="" />
          <JoinBtn>
            <StockUpIcon />
            <span>탑승하기</span>
          </JoinBtn>
          <TotalJoinCount>
            {getToLocaleString(characters.joinedCount)} 개미 참여 중
          </TotalJoinCount>
        </>
      )}
    </CharacterDetailPageWrap>
  );
}

export default CharacterDetailPage;
