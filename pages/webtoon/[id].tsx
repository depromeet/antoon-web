/* eslint-disable react-hooks/rules-of-hooks */
import Detail from '@domains/webtoon/detail/Detail';
import { Webtoon } from '@_types/webtoon-type';
import { useRouter } from 'next/router';
import { ChartData } from '@_types/chart-type';
import React from 'react';
import Header from '@components/layout/Header';
import Comment from '@domains/webtoon/detail/Comment';

const webtoonMock: Webtoon = {
  id: 1,
  platform: '네이버웹툰',
  title: '흑막 여주가 날 새 엄마로 만들려고 해',
  author: '순끼',
  content: `세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명세기말 풋사과 보습학원설명설명`,
  date: '월,화',
  jenre: '학원물',
  status: 'DOWN',
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
  console.log(`[router-checking]: ...${id}...`);

  // Mock
  const mock = webtoonMock;
  return (
    <>
      <Header />
      <Detail key={mock.id} item={mock} chartData={ChartMock} />
      <Comment />
    </>
  );
}

export default webtoonDetail;
