/* eslint-disable react-hooks/rules-of-hooks */
import WebtoonDetail from '@domains/webtoon/detail/WebtoonDetail';
import { Webtoon } from '@_types/webtoon-type';
import { useRouter } from 'next/router';
import React from 'react';

const webtoonMock: Webtoon = {
  id: 1,
  platform: 'KAKAO',
  title: '나 혼자만 레벨업',
  author: '추공',
  content: `재능 없는 만년 E급 헌터, 성진우.
            기이한 던전에서 죽음을 목전에 두지만
            위기는 언제나 기회와 함께 찾아오는 법!


            [플레이어가 되실 자격을 획득하셨습니다.]
            "플레이어? 내가 레벨업을 할 수 있다고?"

            
            전 세계 헌터 중 유일무이, 전무후무
            시스템과 레벨업 능력을 각성한 진우.
            세상을 향해 자유를 선포한다!`,
  date: '토요일',
  jenre: '판타지',
  thumnail:
    'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
};

function webtoonDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(`[router-checking]: ...${id}...`);

  // Mock
  const mock = webtoonMock;
  return <WebtoonDetail key={mock.id} item={mock} />;
}

export default webtoonDetail;
