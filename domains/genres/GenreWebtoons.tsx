import { useGetWebtoonsGenres } from '@apis/webtoons';
import { KakaoLogo, NaverLogo } from '@assets/icons';
import TagBtn from '@components/button/TagBtn';
import Carousel from '@components/carousel/Carousel';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import useCarousel from '@hooks/useCarousel';
import { Genre, genres } from '@_types/webtoon-type';
import Link from 'next/link';
import { useState, useRef } from 'react';
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
} from './GenreWebtoons.style';

function GenreWebtoons() {
  const [genre, setGenre] = useState<Genre>(genres[0]);

  const tagBtnRef = useRef<HTMLDivElement>(null);

  useCarousel(tagBtnRef);

  const { data: genreWebtoons, status } = useGetWebtoonsGenres(genre);

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
        {status === 'loading' && <LoadingSpinner />}
        {genreWebtoons?.data.map((webtoon) => {
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
        })}
      </WebtoonContainer>
    </>
  );
}

export default GenreWebtoons;
