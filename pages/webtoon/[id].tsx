import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import Detail from '@domains/webtoon/detail/Detail';
import Comment from '@domains/webtoon/detail/Comment';
import { GetServerSideProps } from 'next';

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

function WebtoonDetail({ id }: Prop) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '웹툰 상세 페이지',
      webtoonId: id,
    });
  }, [id]);

  return (
    <>
      <Header headerLeft="뒤로가기" headerRight="공유하기" />
      <Detail id={Number(id)} />
      <Comment commentType="webtoons" id={Number(id)} />
    </>
  );
}

export default WebtoonDetail;
