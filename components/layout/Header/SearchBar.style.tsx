import styled from '@emotion/styled';

const SearchBarWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  margin: 0 0 0 1.6rem;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_100};
  padding: 0.6rem 3.8rem 0.6rem 1.6rem;
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
`;

export { SearchBarWrap, SearchInput };
