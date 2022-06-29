import Header from '@components/layout/Header/Header';
import CommunityRanks from '@domains/community/ranks/CommunityRanks';
import { Mixpanel } from 'mixpanel';
import React, { useEffect } from 'react';

function Ranks() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '커뮤니티 페이지 실시간 차트',
    });
  }, []);

  return (
    <>
      <Header
        headerTitle="실시간 차트"
        headerLeft="뒤로가기"
        headerRight="검색"
      />
      <CommunityRanks />
    </>
  );
}

export default Ranks;
