import YeonJaeIcon from '@assets/icons/YeonJaeIcon';

import {
  CategoryCardWrapper,
  CategoryContents,
  CategoryImg,
  CategoryTitle,
  ImageContainer,
} from './Category.style';

interface Props {
  categoryType: number;
  categoryTitle: string;
  categoryContents: string;
}
export type JenreType = {
  [key: string]: number;
};

/**
 * @description 장르 카드
 * 영어로 바꾸자...
 */
export const JenreEnum: JenreType = {
  일상: 1,
  개그: 2,
  판타지: 3,
  액션: 4,
  드라마: 5,
  순정: 6,
  감성: 7,
  스릴러: 8,
  무협사극: 9,
  스포츠: 10,
};

function CategoryCard(props: Props) {
  const { categoryType, categoryTitle, categoryContents } = props;

  return (
    <CategoryCardWrapper>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      <CategoryContents>{categoryContents}</CategoryContents>
      <ImageContainer>
        {categoryType == 0 && (
          <CategoryImg
            type={categoryType}
            status={JenreEnum[categoryContents]}
          />
        )}
      </ImageContainer>
      <ImageContainer>{categoryType == 1 && <YeonJaeIcon />}</ImageContainer>
      <ImageContainer>
        {categoryType == 2 && (
          <CategoryImg type={categoryType} status={categoryContents} />
        )}
      </ImageContainer>
    </CategoryCardWrapper>
  );
}

export default CategoryCard;
