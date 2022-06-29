import TagBtn from '@components/button/TagBtn';
import Carousel from '@components/carousel/Carousel';
import useCarousel from '@hooks/useCarousel';
import React, { useRef, useState } from 'react';
import { HomeRanksTagButtonsContainer } from '../Home.style';
import RealTimeChartCharacters from './RealTimeChartCharacters';
import RealTimeChartTitle from './RealTimeChartTitle';
import RealTimeChartWebtoon from './RealTimeChartWebtoon';

export const categoryType = {
  웹툰: 'RANKS',
  인물: 'PERSONA',
  커플: 'COUPLE',
};

export type categoryTypeKey = keyof typeof categoryType;

type Props = {
  page: 'home' | 'community';
};

function RealTimeChart(props: Props) {
  const { page } = props;

  const [category, setCategory] = useState<categoryTypeKey>(
    page === 'home' ? '웹툰' : '인물',
  );
  const RealTimeChartRef = useRef<HTMLDivElement>(null);

  useCarousel(RealTimeChartRef);

  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.textContent as categoryTypeKey);
  };

  return (
    <>
      <RealTimeChartTitle />
      <HomeRanksTagButtonsContainer>
        {page === 'home' && (
          <TagBtn onClick={onSelectCategory} selected={category === '웹툰'}>
            웹툰
          </TagBtn>
        )}
        <TagBtn onClick={onSelectCategory} selected={category === '인물'}>
          인물
        </TagBtn>
        <TagBtn onClick={onSelectCategory} selected={category === '커플'}>
          커플
        </TagBtn>
      </HomeRanksTagButtonsContainer>
      <Carousel ref={RealTimeChartRef}>
        {category === '웹툰' && <RealTimeChartWebtoon />}
        {(category === '인물' || category === '커플') && (
          <RealTimeChartCharacters category={category} />
        )}
      </Carousel>
    </>
  );
}

export default RealTimeChart;
