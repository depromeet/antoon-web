import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  & .slick-slide {
    margin: 0 3px;
  }

  & .slick-list {
    & .slick-track {
      width: 500% !important;
    }
  }
`;
const CategoryCardWrapper = styled.div``;

const CategorySliderCard = styled.div`
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  background: #f1f1f1;
  width: 20%;
  height: 30%;
`;

const CategoryTitle = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-left: 14px;
  font-size: 13px;
`;

const CategoryContents = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 14px;
  font-size: 16px;
`;
const ImageContainer = styled.div`
  position: absolute;
  right: 14px;
  bottom: 12px;
  float: left;
`;

export {
  SliderWrapper,
  CategoryCardWrapper,
  CategorySliderCard,
  CategoryTitle,
  CategoryContents,
  ImageContainer,
};
