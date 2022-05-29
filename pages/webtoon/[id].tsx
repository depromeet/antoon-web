import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Mixpanel } from 'mixpanel';

import { Webtoon } from '@_types/webtoon-type';
import { ChartData } from '@_types/chart-type';

import Header from '@components/layout/Header/Header';
import Detail from '@domains/webtoon/detail/Detail';
import Comment from '@domains/webtoon/detail/Comment';
import { GetServerSideProps } from 'next';

const webtoonMock = {
  id: 1,
  platform: 'NAVER',
  title: '흑막 여주가 날 새 엄마로 만들려고 해',
  author: '순끼',
  content: `세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명`,
  date: '월,화',
  jenre: '판타지',
  status: 'UP',
  isLike: true,
  thumnail:
    'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
};

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
      <Header />
      <Detail id={Number(id)} />
      <Comment id={Number(id)} />
    </>
  );
}

export default WebtoonDetail;
