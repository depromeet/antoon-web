import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { useInView } from 'react-intersection-observer';

import { useGetWebtoonsGenres } from '@apis/webtoons';

import { KakaoLogo, NaverLogo } from '@assets/icons';
import TagBtn from '@components/button/TagBtn';
import Carousel from '@components/carousel/Carousel';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import useCarousel from '@hooks/useCarousel';
import { Genre, genres, WebtoonGenres } from '@_types/webtoon-type';
import {
  TagBtnsContainer,
  WebtoonAuthor,
  WebtoonContainer,
  WebtoonCardWrapper,
  WebtoonPlatformLogo,
  WebtoonScore,
  WebtoonScoreChangedPercent,
  WebtoonScoreWrapper,
  WebtoonThumbnail,
  WebtoonThumbnailWrapper,
  WebtoonTitle,
  WebtoonContentWrapper,
  Footer,
} from './GenreWebtoons.style';

function GenreWebtoons() {
  const [genre, setGenre] = useState<Genre>(genres[0]);

  const tagBtnRef = useRef<HTMLDivElement>(null);

  useCarousel(tagBtnRef);

  const {
    data: genreWebtoons,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetWebtoonsGenres(genre, 0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && genreWebtoons?.pages) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, genreWebtoons?.pages]);

  function onSelectGenre(e: React.MouseEvent<HTMLButtonElement>) {
    setGenre(e.currentTarget.textContent as Genre);
  }

  return (
    <>
      <Carousel ref={tagBtnRef}>
        <TagBtnsContainer>
          {genres.map((_genre) => (
            <TagBtn
              key={_genre}
              onClick={onSelectGenre}
              selected={_genre === genre}
            >
              {_genre}
            </TagBtn>
          ))}
        </TagBtnsContainer>
      </Carousel>
      <WebtoonContainer>
        {status === 'loading' && !isFetchingNextPage && <LoadingSpinner />}
        {genreWebtoons?.pages.map((page) => {
          console.log(page);

          return page.data?.map((webtoon: WebtoonGenres) => {
            return (
              <Link
                href={`/webtoon/${webtoon.webtoonId}`}
                key={webtoon.webtoonId}
                passHref
              >
                <a>
                  <WebtoonCardWrapper>
                    <WebtoonThumbnailWrapper>
                      <WebtoonPlatformLogo>
                        {webtoon.platform === 'NAVER' ? (
                          <NaverLogo />
                        ) : webtoon.platform === 'KAKAO' ? (
                          <KakaoLogo />
                        ) : (
                          <></>
                        )}
                      </WebtoonPlatformLogo>
                      <WebtoonThumbnail
                        alt={webtoon.title}
                        src={webtoon.thumbnail}
                        width={204}
                        height={89}
                        layout="fixed"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={webtoon.thumbnail}
                      />
                    </WebtoonThumbnailWrapper>
                    <WebtoonContentWrapper>
                      <WebtoonTitle>{webtoon.title}</WebtoonTitle>
                      <WebtoonScoreWrapper>
                        <WebtoonScore>989점</WebtoonScore>
                        <WebtoonScoreChangedPercent
                          scoreChangedStatus={
                            webtoon.scoreGap > 0
                              ? 'up'
                              : webtoon.scoreGap < 0
                              ? 'down'
                              : 'stable'
                          }
                        >
                          {webtoon.scoreGap > 0 ? '+' : ''}
                          {webtoon.scoreGap.toFixed(2)}%
                        </WebtoonScoreChangedPercent>
                      </WebtoonScoreWrapper>
                      <WebtoonAuthor>
                        {webtoon.writers.length === 0
                          ? /* blank character */
                            '‎'
                          : webtoon.writers.join(', ')}
                      </WebtoonAuthor>
                    </WebtoonContentWrapper>
                  </WebtoonCardWrapper>
                </a>
              </Link>
            );
          });
        })}
      </WebtoonContainer>
      <Footer>
        {isFetchingNextPage ? <LoadingSpinner /> : <div ref={ref}></div>}
        {hasNextPage === false && <div>모든 웹툰을 불러왔어요 🎉🎉🎉</div>}
      </Footer>
    </>
  );
}

export default GenreWebtoons;
