import { useRouter } from 'next/router';

import deafultImage from '@components/image/default';

import {
  SearchResultWrap,
  ThumbnailWrap,
  Thumbnail,
  WebtoonInfoWrap,
  MainInfoWrap,
  Title,
  WriterWrap,
  Writer,
  ScoreInfoWrap,
  Score,
  Percent,
} from './SearchResult.style';

import { WebtoonSearch } from '@_types/webtoon-type';

function SearchResult({ searchResults }: { searchResults: WebtoonSearch }) {
  const router = useRouter();

  return (
    <SearchResultWrap
      key={searchResults.webtoonId}
      onClick={() => {
        router.push(`/webtoon/${searchResults.webtoonId}`);
      }}
    >
      <ThumbnailWrap width="64" height="64">
        <Thumbnail
          alt={searchResults.title}
          src={searchResults.thumbnail || deafultImage}
          placeholder="blur"
          blurDataURL={searchResults.thumbnail || deafultImage}
          width={64}
          height={64}
          layout="fixed"
          objectFit="cover"
        />
      </ThumbnailWrap>

      <WebtoonInfoWrap>
        <MainInfoWrap>
          <Title>{searchResults.title}</Title>
          <WriterWrap>
            {searchResults.writers.map(
              (writer: { webtoonWriterId: number; name: string }) => {
                return (
                  <Writer key={writer.webtoonWriterId}>{writer.name}</Writer>
                );
              },
            )}
          </WriterWrap>
        </MainInfoWrap>

        <ScoreInfoWrap>
          <Score>{searchResults.score}</Score>
          <Percent>{searchResults.scoreGapPercent}.00%</Percent>
        </ScoreInfoWrap>
      </WebtoonInfoWrap>
    </SearchResultWrap>
  );
}

export default SearchResult;
