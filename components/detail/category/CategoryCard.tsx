import Image from 'next/image';

import {
  CategoryCardWrapper,
  CategoryContents,
  CategoryTitle,
  ImageContainer,
} from './Category.style';

interface Props {
  categoryTitle: string;
  categoryContents: string;
}

function CategoryCard(props: Props) {
  const { categoryTitle, categoryContents } = props;

  return (
    <CategoryCardWrapper>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      <CategoryContents>{categoryContents}</CategoryContents>
      <ImageContainer>
        <Image
          src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
          alt="기본이미지"
          width={32}
          height={32}
        ></Image>
      </ImageContainer>
    </CategoryCardWrapper>
  );
}

export default CategoryCard;
