import Header from '@components/layout/Header/Header';
import { GetServerSideProps } from 'next';
import CharacterDetailPageWrap from '@domains/community/character/CharacterDetailPage';
import { Mixpanel } from 'mixpanel';
import { useEffect } from 'react';
import Comment from '@domains/webtoon/detail/Comment';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};

interface Prop {
  id: number;
}

function CharacterDetailPage({ id }: Prop) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '인물/커플 투표 상세 페이지',
      characterId: id,
    });
  }, [id]);

  const mockData = {
    backGroundColor: '#4E7F86',
  };

  return (
    <>
      <Header
        headerLeft="뒤로가기"
        headerRight="공유하기"
        headerColor={mockData.backGroundColor}
      />
      <CharacterDetailPageWrap />
      <Comment commentType={'characters'} id={Number(id)} />
    </>
  );
}

export default CharacterDetailPage;
