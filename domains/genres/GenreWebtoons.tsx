import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useInView } from 'react-intersection-observer';

import { useGetWebtoonsGenres } from '@apis/webtoons';

import { KakaoLogo, NaverLogo } from '@assets/icons';
import TagBtn from '@components/button/TagBtn';
import Carousel from '@components/carousel/Carousel';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import OnError from '@components/OnError';
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
  const router = useRouter();

  const [genre, setGenre] = useState<Genre | undefined>(undefined);

  const tagBtnRef = useRef<HTMLDivElement>(null);

  useCarousel(tagBtnRef);

  const {
    data: genreWebtoons,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetWebtoonsGenres(genre ?? genres[0], 0);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!router.isReady) return;

    if (router.isReady) {
      genres.includes(router.query.genre as Genre)
        ? setGenre(router.query.genre as Genre)
        : setGenre(genres[0]);
    }
  }, [router.isReady, router.query.genre]);

  useEffect(() => {
    if (!tagBtnRef.current) return;

    const selectedTagBtn = Array.from(
      tagBtnRef.current.children[0].children,
    ).filter(
      (child) => child.getAttribute('data-selected') === 'true',
    )[0] as HTMLButtonElement;

    if (!selectedTagBtn) return;

    tagBtnRef.current.scrollLeft =
      selectedTagBtn.offsetLeft - tagBtnRef.current.offsetLeft;
  }, [genre]);

  useEffect(() => {
    if (inView && genreWebtoons?.pages) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, genreWebtoons?.pages]);

  function onSelectGenre(e: React.MouseEvent<HTMLButtonElement>) {
    router.push(`?genre=${e.currentTarget.textContent}`, undefined, {
      shallow: true,
    });

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
        {status === 'error' && !isFetchingNextPage && (
          <OnError>웹툰을 불러오지 못하고 있어요 😭😭😭</OnError>
        )}
        {genreWebtoons?.pages.map((page) => {
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
                        <WebtoonScore>{webtoon.graphScore}점</WebtoonScore>
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
        {hasNextPage === false && status === 'success' && (
          <div>모든 웹툰을 불러왔어요 🎉🎉🎉</div>
        )}
      </Footer>
    </>
  );
}

export default GenreWebtoons;
