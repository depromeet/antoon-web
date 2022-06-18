import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import VoteDetail from '@domains/community/topic/VoteDetail';
import Comment from '@domains/webtoon/detail/Comment';
import { GetServerSideProps } from 'next';
import { useGetUserInformation } from '@apis/user';

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

function TopicABVote({ id }: Prop) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: 'A/B 투표 상세 페이지',
      voteId: id,
    });
  }, [id]);

  const { data: user } = useGetUserInformation();

  return (
    <>
      {user ? (
        <Header rightBtn="menu" imageUrl={user.imageUrl} />
      ) : (
        <Header rightBtn="menu" />
      )}
      <VoteDetail id={Number(id)} />
      <Comment id={Number(id)} />
    </>
  );
}

export default TopicABVote;
