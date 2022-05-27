/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Mixpanel } from 'mixpanel';

import { Webtoon } from '@_types/webtoon-type';
import { ChartData } from '@_types/chart-type';

import Header from '@components/layout/Header/Header';
import Detail from '@domains/webtoon/detail/Detail';
import Comment from '@domains/webtoon/detail/Comment';

const webtoonMock: Webtoon = {
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

const ChartMock: ChartData = {
  label: 'daily',
  timeseries: {
    '00:00': 3.12,
    '04:00': 2.72,
    '08:00': 5.73,
    '12:00': 8.92,
    '16:00': 6.71,
    '20:00': 9.99,
    '24:00': 7.73,
  },
};

function webtoonDetail() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '웹툰 상세 페이지',
      webtoonId: id,
    });
  }, [id]);

  // Mock
  const mock = webtoonMock;

  return (
    <>
      <Header />
      <Detail key={mock.id} item={mock} chartData={ChartMock} />
      <Comment id={id} />
    </>
  );
}

export default webtoonDetail;
