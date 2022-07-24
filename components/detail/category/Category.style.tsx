import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  margin: 0 -24px;
  max-width: 480px;

  & .slick-slide {
    padding: 0 4px;
    &:first-child {
      padding-left: 24px;
    }
    &:last-child {
      padding-right: 24px;
    }
  }

  & .slick-list {
    width: 100%;

    & .slick-track {
      width: calc(100% + 24 * 2) !important;
    }
  }
`;

const CategoryCardWrapper = styled.div`
  width: 100%;
`;

const CategorySliderCard = styled.div`
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.grayscale.gray_100};
  width: 20%;
  height: 30%;
`;

const CategoryTitle = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-left: 14px;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 12px;
`;

const CategoryContents = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 14px;
  font-size: 16px;
  font-weight: 700;
`;
const ImageContainer = styled.div`
  position: absolute;
  right: 18px;
  bottom: 12px;
  float: left;
`;

const CategoryImg = styled.span<{ type: number; status: number | string }>`
  display: block;
  border-radius: 20%;
  background-image: url(${(props) =>
    props.type == 2
      ? `/images/platform_${props.status}.png`
      : `/images/jenre_${props.status}.png`});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

export {
  SliderWrapper,
  CategoryCardWrapper,
  CategorySliderCard,
  CategoryTitle,
  CategoryContents,
  ImageContainer,
  CategoryImg,
};
