import styled from '@emotion/styled';

const SearchResultWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.8rem;
`;

const SearchResult = styled.span`
  margin: 0 0 0 1.2rem;
  font-size: 1.6rem;
`;

const Default = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 11.2rem);
`;

export { SearchResultWrap, SearchResult, Default };
