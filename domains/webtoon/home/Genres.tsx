import { webtoons } from '@apis/queryKeys';
import { getWebtoonsGenresTop3 } from '@apis/webtoons';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { Genre, WebtoonGenresTop3 } from '@_types/webtoon-type';
import { useQuery } from 'react-query';
import {
  GenresWrapper,
  CarouselBox,
  GenreContentWrapper,
  GenreThumbnailContainer,
  GenreThumbnail,
  GenreDescription,
} from './Genres.style';

type GenreData = {
  name: Genre;
  description1: string;
  description2: string;
  [index: string]: string;
};

const genres: GenreData[] = [
  {
    name: '일상',
    description1: '매일매일',
    description2: '일상툰',
  },
  {
    name: '개그',
    description1: '웃고 싶을 땐',
    description2: '개그툰',
  },
  {
    name: '판타지',
    description1: '세상에 이런일이',
    description2: '판타지툰',
  },
  {
    name: '액션',
    description1: '박진감이 넘치는',
    description2: '액션툰',
  },
  {
    name: '드라마',
    description1: '극적인',
    description2: '드라마툰',
  },
  {
    name: '로맨스',
    description1: '두근두근',
    description2: '순정툰',
  },
  {
    name: '감성',
    description1: '잔잔한 힐링',
    description2: '감성툰',
  },
  {
    name: '스릴러',
    description1: '긴장감 넘치는',
    description2: '스릴러툰',
  },
  {
    name: '무협/사극',
    description1: '흥미진진한',
    description2: '무협/사극툰',
  },
  {
    name: '스포츠',
    description1: '열정을 깨워주는',
    description2: '스포츠툰',
  },
];

function Genres() {
  const { data, isLoading, isError } = useQuery<WebtoonGenresTop3>(
    webtoons.genresTop3(),
    getWebtoonsGenresTop3,
  );

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.webtoons) ||
    data?.webtoons?.length === 0 ||
    isError
  )
    return <OnError>장르별 웹툰을 불러오지 못하고 있어요 😭😭😭</OnError>;

  const genreMap = new Map<string, string[]>();

  data?.webtoons.forEach((webtoon) => {
    genreMap.set(webtoon.genre, [
      ...(genreMap.get(webtoon.genre) || []),
      webtoon.thumbnail,
    ]);
  });

  genreMap.forEach((thumbnails, genreKey) => {
    const genreIdx = genres.findIndex((genre) => genre.name === genreKey);
    thumbnails.forEach((thumbnail, idx) => {
      if (genres[genreIdx]) {
        const rankIdx = `rank${idx + 1}`;
        genres[genreIdx][rankIdx] = thumbnail;
      }
    });
  });

  return (
    <ErrorBoundary message="장르별 웹툰을 불러오지 못하고 있어요 😭😭😭">
      <GenresWrapper>
        {genres.map((genre) => (
          <CarouselBox key={genre.name} genreName={genre.name}>
            <GenreContentWrapper>
              <GenreThumbnailContainer>
                <div>
                  <GenreThumbnail src={genre.rank1} width={24} height={24} />
                </div>
                {/* TODO: stroke로 피그마와 똑같게 디자인 해야함 */}
                <div style={{ position: 'relative', left: '-0.5rem' }}>
                  <GenreThumbnail src={genre.rank2} width={24} height={24} />
                </div>
                <div style={{ position: 'relative', left: '-1rem' }}>
                  <GenreThumbnail src={genre.rank3} width={24} height={24} />
                </div>
              </GenreThumbnailContainer>
              <GenreDescription>
                {genre.description1} <br /> {genre.description2}
              </GenreDescription>
            </GenreContentWrapper>
          </CarouselBox>
        ))}
      </GenresWrapper>
    </ErrorBoundary>
  );
}

export default Genres;
