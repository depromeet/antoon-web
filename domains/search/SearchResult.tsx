import deafultImage from '@components/image/default';

import {
  SearchResultWrap,
  Thumbnail,
  MainInfoWrap,
  Title,
  Writer,
} from './SearchResult.style';

import { WebtoonSearch } from '@_types/webtoon-type';

function SearchResult({ searchResults }: { searchResults: WebtoonSearch }) {
  return (
    <SearchResultWrap key={searchResults.id}>
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
      <MainInfoWrap>
        <Title>{searchResults.title}</Title>
        {searchResults.writers.map(
          (writer: { webtoonWriterId: number; name: string }) => {
            return <Writer key={writer.webtoonWriterId}>{writer.name}</Writer>;
          },
        )}
      </MainInfoWrap>
    </SearchResultWrap>
  );
}

export default SearchResult;
