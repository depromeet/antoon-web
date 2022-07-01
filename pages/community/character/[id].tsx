import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Mixpanel } from 'mixpanel';

import { useGetCharacterInfo } from '@apis/webtoons';

import Header from '@components/layout/Header/Header';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { CharacterType } from '@_types/webtoon-type';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import CharacterDetailPageWrap from '@domains/community/character/CharacterDetailPage';
import Comment from '@domains/webtoon/detail/Comment';
import {
  categoryType,
  categoryTypeKey,
} from '@domains/webtoon/home/realTimeChart/RealTimeChart';

function CharacterDetailPage({
  id,
  category,
}: {
  id: number;
  category: categoryTypeKey;
}) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '인물/커플 투표 상세 페이지',
      characterId: id,
    });
  }, [id]);

  const {
    data: characters,
    isLoading,
    isError,
  } = useGetCharacterInfo(id, categoryType[category] as CharacterType);

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return <OnError>{category}을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="인물 정보를 불러오지 못하고 있어요 😭😭😭">
      <>
        <Header
          headerLeft="뒤로가기"
          headerRight="공유하기"
          headerColor={characters?.backGroundColor}
        />
        {characters && <CharacterDetailPageWrap characters={characters} />}
        <Comment commentType={'characters'} id={Number(id)} />
      </>
    </ErrorBoundary>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id, category } = query;

  return {
    props: {
      id,
      category,
    },
  };
};

export default CharacterDetailPage;
