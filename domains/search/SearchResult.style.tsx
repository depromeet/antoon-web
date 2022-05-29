import styled from '@emotion/styled';
import Image from 'next/image';

type ImgProps = {
  width: string;
  height: string;
};

const SearchResultWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0;
  cursor: pointer;
  width: 100%;
`;

const ThumbnailWrap = styled.div<ImgProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Thumbnail = styled(Image)`
  border-radius: 1.6rem;
`;

const WebtoonInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainInfoWrap = styled.div`
  margin: 0 0 0 1rem;
`;

const Title = styled.p`
  margin: 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const WriterWrap = styled.div`
  display: flex;
`;

const Writer = styled.p`
  margin: 0 0.5rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
`;

const ScoreInfoWrap = styled.div`
  text-align: right;
`;

const Score = styled.div`
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Percent = styled.div`
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  padding: 0.1rem 0.4rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.2rem;
  font-weight: 500;
`;

export {
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
};
