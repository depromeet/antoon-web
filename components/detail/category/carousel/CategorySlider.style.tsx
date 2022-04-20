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

const CategoryCard = styled.div`
  display: flex';
  width: 20%;
  height: 30%;
  background: #f1f1f1;
  border-radius: 10px;
  margin: 20px 0px;
  position: relative;
  & div {
    width:20%;
  }
`;

const CategoryTitle = styled.p`
  font-family: 'Pretendard';
  font-size: 13px;
  opacity: 0.8;
  margin-top: 12px;
  margin-left: 14px;
`;

const CategoryContents = styled.p`
  font-family: 'Pretendard';
  font-size: 16px;
  opacity: 0.8;
  margin-top: 12px;
  margin-left: 14px;
  margin-bottom: 12px;
`;
const ImageContainer = styled.div`
  position: absolute;
  float: left;
  bottom: 12px;
  right: 14px;
`;

export {
  SliderWrapper,
  CategoryCard,
  CategoryTitle,
  CategoryContents,
  ImageContainer,
};
