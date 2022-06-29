import { useState } from 'react';
import { HomeRanksTagButtonsContainer } from '@domains/webtoon/home/Home.style';
import { categoryTypeKey } from '@domains/webtoon/home/realTimeChart/RealTimeChart';
import TagBtn from '@components/button/TagBtn';
import RealTimeChartTitle from '@domains/webtoon/home/realTimeChart/RealTimeChartTitle';
import CommunityRanksCards from '@domains/community/ranks/CommunityRanksCards';

function CommunityRanks() {
  const [category, setCategory] = useState<categoryTypeKey>('웹툰');

  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.textContent as categoryTypeKey);
  };

  return (
    <>
      <HomeRanksTagButtonsContainer>
        <TagBtn onClick={onSelectCategory} selected={category === '웹툰'}>
          웹툰
        </TagBtn>
        <TagBtn onClick={onSelectCategory} selected={category === '인물'}>
          인물
        </TagBtn>
        <TagBtn onClick={onSelectCategory} selected={category === '커플'}>
          커플
        </TagBtn>
      </HomeRanksTagButtonsContainer>
      <RealTimeChartTitle isRankPage />
      <CommunityRanksCards category={category} />
    </>
  );
}

export default CommunityRanks;
