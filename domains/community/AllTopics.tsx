import TagBtn from '@components/button/TagBtn';
import Title from '@components/Title';
import { useState } from 'react';
import { AllTopicSection } from './Community.style';
import AllTopicCards from './topic/AllTopicCards';
import { TopicCategoryButtonsContainer } from './topic/TopicCategroyButtons.style';

export const categoryType = {
  인기순: 'RANKS',
  최신순: 'LATEST',
  종료: 'CLOSES',
};

export type categoryTypeKey = keyof typeof categoryType;

function AllTopics() {
  const [category, setCategory] = useState<categoryTypeKey>('인기순');

  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.textContent as categoryTypeKey);
  };

  return (
    <AllTopicSection>
      <Title type="normal">모든 토픽</Title>
      <TopicCategoryButtonsContainer>
        <TagBtn onClick={onSelectCategory} selected={category === '인기순'}>
          인기순
        </TagBtn>
        <TagBtn onClick={onSelectCategory} selected={category === '최신순'}>
          최신순
        </TagBtn>
        <TagBtn onClick={onSelectCategory} selected={category === '종료'}>
          종료
        </TagBtn>
      </TopicCategoryButtonsContainer>
      <AllTopicCards category={category} />
    </AllTopicSection>
  );
}

export default AllTopics;
