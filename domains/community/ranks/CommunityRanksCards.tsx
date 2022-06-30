import { useState, useEffect } from 'react';
import {
  useGetCharacterRanksByCategory,
  useGetWebtoonsRanks,
} from '@apis/webtoons';
import CharacterJoinButton from '@domains/webtoon/home/realTimeChart/CharacterJoinButton';
import {
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartTitle,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartScoreUnit,
  RealTimeChartContentContainer,
  RealTimeChartScoreChangePercent,
} from '@domains/webtoon/home/realTimeChart/RealTimeChartWebtoon.style';
import { CharacterType } from '@_types/webtoon-type';
import { default as RealTimeChartScoreChangeIcon } from '@assets/icons/ScoreChangeIcon';
import {
  AllTopicCardImageContainer,
  AllTopicCardSecondImage,
} from '@domains/community/topic/AllTopicCards.style';
import {
  categoryType,
  categoryTypeKey,
} from '@domains/webtoon/home/realTimeChart/RealTimeChart';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import OnError from '@components/OnError';

type Props = {
  category: categoryTypeKey;
};

function CommunityRanksCards(props: Props) {
  const { category } = props;

  const {
    data: webtoons,
    isLoading: webtoonIsLoading,
    isError: webtoonIsError,
  } = useGetWebtoonsRanks();

  const { data, isLoading, isError, error } = useGetCharacterRanksByCategory(
    categoryType[category] as CharacterType,
  );

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isLoading || webtoonIsLoading) return <LoadingSpinner />;

  if (
    (data?.request?.status as unknown as number) >= 400 ||
    data?.couples?.length === 0 ||
    webtoons?.webtoons?.length === 0 ||
    isError ||
    webtoonIsError
  )
    return <OnError>{category}을 불러오지 못하고 있어요 😭😭😭</OnError>;

  if (category === '웹툰')
    return (
      <>
        {webtoons?.webtoons?.map((webtoon, idx) => {
          const rankChanged = 0;

          return (
            <RealTimeChartCardWrapper
              key={webtoon.id}
              href={`/webtoon/${webtoon.id}`}
            >
              <RealTimeChartContentContainer>
                <RealTimeChartCard
                  alt={webtoon.title}
                  src={webtoon.thumbnail}
                  width={52}
                  height={52}
                  layout="fixed"
                  objectFit="cover"
                />
                <RealTimeChartRankingWrapper>
                  <RealTimeChartRanking>{idx + 1}</RealTimeChartRanking>
                  <RealTimeChartScoreChangeWrapper>
                    <RealTimeChartScoreChangeIcon
                      /* TODO: set data form api | temporary handle from const data that not be offered from api  */
                      rankingStatus={
                        rankChanged > 0
                          ? 'up'
                          : rankChanged < 0
                          ? 'down'
                          : 'stable'
                      }
                    />

                    <RealTimeChartScoreChange
                      /* TODO: set data form api | temporary handle from const data that not be offered from api */
                      // rankingStatus={'stable'}
                      rankingStatus={
                        rankChanged > 0
                          ? 'up'
                          : rankChanged < 0
                          ? 'down'
                          : 'stable'
                      }
                    >
                      {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                      {/* {webtoon.rankingChanged === 0 ? '-' : webtoon.rankingChanged} */}
                      {!isSSR && (rankChanged === 0 ? '-' : rankChanged)}
                    </RealTimeChartScoreChange>
                  </RealTimeChartScoreChangeWrapper>
                </RealTimeChartRankingWrapper>
                <RealTimeChartInformationWrapper isRankPage={true}>
                  <RealTimeChartTitle>{webtoon.title}</RealTimeChartTitle>
                  <RealTimeChartAuthor>
                    {webtoon.writers.map((writer) => writer.name).join(', ')}
                  </RealTimeChartAuthor>
                </RealTimeChartInformationWrapper>
              </RealTimeChartContentContainer>
              <RealTimeChartScoreWrapper>
                <RealTimeChartScore>
                  {webtoon.score}
                  <RealTimeChartScoreUnit>ANT</RealTimeChartScoreUnit>
                </RealTimeChartScore>
                <RealTimeChartScoreChangePercent
                  /* TODO: set data form api | temporary handle from const data that not be offered from api */
                  scoreChangedStatus={
                    webtoon.gapPercent > 0
                      ? 'up'
                      : webtoon.gapPercent < 0
                      ? 'down'
                      : 'stable'
                  }
                >
                  {!isSSR && webtoon.gapPercent > 0 ? '+' : ''}
                  {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                  {/* {webtoon.scoreChangedPercent.toFixed(2)}% */}
                  {!isSSR && webtoon.gapPercent}%
                </RealTimeChartScoreChangePercent>
              </RealTimeChartScoreWrapper>
            </RealTimeChartCardWrapper>
          );
        })}
      </>
    );

  return (
    <>
      {data?.couples?.map((character, idx) => {
        const rankChanged = 0;

        return (
          <RealTimeChartCardWrapper
            key={character.id}
            href={`/community/character/${character.id}`}
          >
            <RealTimeChartContentContainer>
              {character.thumbnails.length === 1 && (
                <RealTimeChartCard
                  alt={character.title}
                  src={character.thumbnails[0]}
                  width={52}
                  height={52}
                  layout="fixed"
                  objectFit="cover"
                  style={{ borderRadius: 100 }}
                />
              )}

              {character.thumbnails.length === 2 && (
                <AllTopicCardImageContainer style={{ minWidth: '5.2rem' }}>
                  <RealTimeChartCard
                    alt={character.title}
                    src={character.thumbnails[0]}
                    width={32}
                    height={32}
                    layout="fixed"
                    objectFit="cover"
                    style={{ borderRadius: 100 }}
                  />
                  <AllTopicCardSecondImage>
                    <RealTimeChartCard
                      alt={character.title}
                      src={character.thumbnails[1]}
                      width={32}
                      height={32}
                      layout="fixed"
                      objectFit="cover"
                      style={{ borderRadius: 100 }}
                    />
                  </AllTopicCardSecondImage>
                </AllTopicCardImageContainer>
              )}
              <RealTimeChartRankingWrapper>
                <RealTimeChartRanking>{idx + 1}</RealTimeChartRanking>
                <RealTimeChartScoreChangeWrapper>
                  <RealTimeChartScoreChangeIcon
                    /* TODO: set data form api | temporary handle from const data that not be offered from api  */
                    rankingStatus={
                      rankChanged > 0
                        ? 'up'
                        : rankChanged < 0
                        ? 'down'
                        : 'stable'
                    }
                  />

                  <RealTimeChartScoreChange
                    /* TODO: set data form api | temporary handle from const data that not be offered from api */
                    // rankingStatus={'stable'}
                    rankingStatus={
                      rankChanged > 0
                        ? 'up'
                        : rankChanged < 0
                        ? 'down'
                        : 'stable'
                    }
                  >
                    {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                    {/* {webtoon.rankingChanged === 0 ? '-' : webtoon.rankingChanged} */}
                    {!isSSR && (rankChanged === 0 ? '-' : rankChanged)}
                  </RealTimeChartScoreChange>
                </RealTimeChartScoreChangeWrapper>
              </RealTimeChartRankingWrapper>
              <RealTimeChartInformationWrapper>
                <RealTimeChartTitle>
                  {character.names.replace('♥', '❤')}
                </RealTimeChartTitle>
                <RealTimeChartAuthor>{character.title}</RealTimeChartAuthor>
              </RealTimeChartInformationWrapper>
            </RealTimeChartContentContainer>

            <RealTimeChartScoreWrapper>
              <RealTimeChartScore>
                {character.coinAmount}
                <RealTimeChartScoreUnit>ANT</RealTimeChartScoreUnit>
              </RealTimeChartScore>
              <CharacterJoinButton />
            </RealTimeChartScoreWrapper>
          </RealTimeChartCardWrapper>
        );
      })}
    </>
  );
}

export default CommunityRanksCards;
