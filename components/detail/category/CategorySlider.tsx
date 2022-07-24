import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CategorySliderCard, SliderWrapper } from './Category.style';
import CategoryCard from './CategoryCard';

interface CategoryCardColumn {
  jenre: string;
  platform: string;
  categoryStatus: {
    date: string;
    ingStatus: string;
  };
}

enum CategoryEnum {
  jenre = '장르',
  platform = '플랫폼',
}

function CategorySlider(props: CategoryCardColumn) {
  const settings = {
    className: 'center',
    arrows: false,
    infinite: false,
    centerPadding: '50px',
    slidesToShow: 2.5,
    swipeToSlide: true,
    useTransform: false,
    dots: false,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {Object.entries(props).map(([k, val], i) =>
          k && k === 'categoryStatus' ? (
            <CategorySliderCard key={i}>
              <CategoryCard
                categoryType={i}
                categoryTitle={val.ingStatus}
                categoryContents={val.date}
              />
            </CategorySliderCard>
          ) : (
            <CategorySliderCard key={i}>
              <CategoryCard
                categoryType={i}
                categoryTitle={CategoryEnum[k as keyof typeof CategoryEnum]}
                categoryContents={val}
              />
            </CategorySliderCard>
          ),
        )}
      </Slider>
    </SliderWrapper>
  );
}
export default CategorySlider;
