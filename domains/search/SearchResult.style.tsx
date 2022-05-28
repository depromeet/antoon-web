import styled from '@emotion/styled';
import Image from 'next/image';

const SearchResultWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0;
  width: 100%;
`;

const Thumbnail = styled(Image)`
  border-radius: 1.6rem;
`;

const MainInfoWrap = styled.div`
  margin: 0 0 0 1rem;
`;

const Title = styled.p`
  margin: 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Writer = styled.p`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
`;

export { SearchResultWrap, Thumbnail, MainInfoWrap, Title, Writer };
