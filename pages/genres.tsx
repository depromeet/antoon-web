import { useEffect, useRef, useState } from 'react';
import { Mixpanel } from 'mixpanel';
import Header from '@components/layout/Header/Header';
import { Genre, genres } from '@_types/webtoon-type';
import TagBtn from '@components/button/TagBtn';
import Carousel from '@components/carousel/Carousel';
import useCarousel from '@hooks/useCarousel';

function Genres() {
  const [category, setCategory] = useState<Genre>(genres[0]);

  const tagBtnRef = useRef<HTMLDivElement>(null);

  useCarousel(tagBtnRef);

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '장르별 페이지',
    });
  }, []);

  function onSelectGenre(e: React.MouseEvent<HTMLButtonElement>) {
    setCategory(e.currentTarget.textContent as Genre);
  }

  return (
    <>
      <Header headerTitle="장르별" headerLeft="뒤로가기" headerRight="검색" />
      <Carousel ref={tagBtnRef}>
        <div
          style={{
            display: 'flex',
            gap: '0.8rem',
            flex: '1 0 auto',
            marginTop: '0.8rem',
          }}
        >
          {genres.map((genre) => (
            <TagBtn
              key={genre}
              onClick={onSelectGenre}
              selected={category === genre}
            >
              {genre}
            </TagBtn>
          ))}
        </div>
        <div>
          <div>
            <div>웹툰마크</div>
            <div>섬네일</div>
          </div>

          <div>
            <div>웹툰명</div>
            <div>
              <div>989점</div>
              <div>+00.00%</div>
            </div>
            <div>작가명</div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Genres;
