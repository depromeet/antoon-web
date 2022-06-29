import { useGetCharacterRanksByCategory } from '@apis/webtoons';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { CharacterType } from '@_types/webtoon-type';
import { useEffect, useState } from 'react';
import { categoryType, categoryTypeKey } from './RealTimeChart';
import { default as RealTimeChartScoreChangeIcon } from '@assets/icons/ScoreChangeIcon';
import {
  RealTimeChartContainer,
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartTitle,
  RealTimeChartScoreUnit,
} from './RealTimeChartWebtoon.style';
import CharacterJoinButton from './CharacterJoinButton';
import {
  AllTopicCardImageContainer,
  AllTopicCardSecondImage,
} from '@domains/community/topic/AllTopicCards.style';

type Props = {
  category: categoryTypeKey;
};

function RealTimeChartCharacters(props: Props) {
  const { category } = props;

  const { data, isLoading, isError } = useGetCharacterRanksByCategory(
    categoryType[category] as CharacterType,
  );

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.couples) ||
    data?.couples?.length === 0 ||
    isError
  )
    return <OnError>랭킹을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="랭킹을 불러오지 못하고 있어요 😭😭😭">
      <RealTimeChartContainer>
        {data?.couples.map((character, idx) => {
          const rankChanged = 0;

          return (
            <RealTimeChartCardWrapper
              key={character.id}
              href={`community/character/${character.id}`}
            >
              {character.thumbnails.length === 1 && (
                <RealTimeChartCard
                  alt={character.title}
                  src={character.thumbnails[0]}
                  width={52}
                  height={52}
                  layout="fixed"
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
                    style={{ borderRadius: 100 }}
                  />
                  <AllTopicCardSecondImage>
                    <RealTimeChartCard
                      alt={character.title}
                      src={character.thumbnails[1]}
                      width={32}
                      height={32}
                      layout="fixed"
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
      </RealTimeChartContainer>
    </ErrorBoundary>
  );
}

export default RealTimeChartCharacters;
