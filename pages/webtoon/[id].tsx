/* eslint-disable react-hooks/rules-of-hooks */
import Detail from '@domains/webtoon/detail/Detail';
import { Webtoon } from '@_types/webtoon-type';
import { useRouter } from 'next/router';
import { ChartData } from '@_types/chart-type';
import React from 'react';

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
    '00:00': 0.1,
    '04:00': 2.7,
    '08:00': 4.7,
    '12:00': 4.9,
    '16:00': 6.7,
    '20:00': 9.9,
    '24:00': 8.7,
  },
};

function webtoonDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(`[router-checking]: ...${id}...`);

  // Mock
  const mock = webtoonMock;
  return <Detail key={mock.id} item={mock} chartData={ChartMock} />;
}

export default webtoonDetail;
