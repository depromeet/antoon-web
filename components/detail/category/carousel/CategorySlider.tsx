import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CategoryCard,
  CategoryContents,
  CategoryTitle,
  ImageContainer,
  SliderWrapper,
} from './CategorySlider.style';

function CategorySlider() {
  const settings = {
    className: 'center',
    arrow: false,
    infinite: false,
    centerPadding: '0px',
    slidesToShow: 2.5,
    swipeToSlide: true,
    dots: false,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <CategoryCard>
          <CategoryTitle>장르</CategoryTitle>
          <CategoryContents>학원물</CategoryContents>
          <ImageContainer>
            <Image
              src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
              alt="기본이미지"
              width={32}
              height={32}
            ></Image>
          </ImageContainer>
        </CategoryCard>
        <CategoryCard>
          <CategoryTitle>연재중</CategoryTitle>
          <CategoryContents>월화</CategoryContents>
          <ImageContainer>
            <Image
              src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
              alt="기본이미지"
              width={32}
              height={32}
            ></Image>
          </ImageContainer>
        </CategoryCard>
        <CategoryCard>
          <CategoryTitle>플랫폼</CategoryTitle>
          <CategoryContents>네이버</CategoryContents>
          <ImageContainer>
            <Image
              src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
              alt="기본이미지"
              width={32}
              height={32}
            ></Image>
          </ImageContainer>
        </CategoryCard>
        <CategoryCard>
          <CategoryTitle>장르</CategoryTitle>
          <CategoryContents>학원물</CategoryContents>
          <ImageContainer>
            <Image
              src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
              alt="기본이미지"
              width={32}
              height={32}
            ></Image>
          </ImageContainer>
        </CategoryCard>
        <CategoryCard>
          <CategoryTitle>장르</CategoryTitle>
          <CategoryContents>학원물</CategoryContents>
          <ImageContainer>
            <Image
              src="https://colorate.azurewebsites.net/SwatchColor/E2E2E2"
              alt="기본이미지"
              width={32}
              height={32}
            ></Image>
          </ImageContainer>
        </CategoryCard>
      </Slider>
    </SliderWrapper>
  );
}
export default CategorySlider;
