import styled from '@emotion/styled';
import Image from 'next/image';

const TagBtnsContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  gap: 0.8rem;
  margin-top: 0.8rem;
`;

const WebtoonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1.8rem;
  padding-bottom: 1rem;
`;

const WebtoonCardWrapper = styled.div`
  margin-bottom: 2rem;
  border-radius: 1.2rem;
  padding: 0.6rem;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.primary.gray_200};
    }
  }
`;

const WebtoonThumbnailWrapper = styled.div`
  display: inline-block;
  border-radius: 1.2rem;
  overflow: hidden;
`;

const WebtoonPlatformLogo = styled.div`
  position: relative;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  height: 0;
`;

const WebtoonThumbnail = styled(Image)``;

const WebtoonContentWrapper = styled.div``;

const WebtoonTitle = styled.div`
  width: 15rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
`;

const WebtoonScoreWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const WebtoonScore = styled.div`
  font-size: 1.4rem;
`;

const WebtoonScoreChangedPercent = styled.div<{ scoreChangedStatus: string }>`
  border-radius: 5px;
  padding: 0.35rem;
  text-align: end;
  font-size: 1.2rem;

  ${(props) => {
    switch (props.scoreChangedStatus) {
      case 'up':
        return { color: '#ff4820', backgroundColor: '#ff482010' };
      case 'down':
        return { color: '#1934B5', backgroundColor: '#1934B510' };
      case 'stable':
      default:
        return {
          color: props.theme.colors.grayscale.gray_800,
          backgroundColor: '#00000010',
        };
    }
  }};
`;
const WebtoonAuthor = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #939393;
  font-size: 1.2rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1.8rem;
`;

export {
  TagBtnsContainer,
  WebtoonContainer,
  WebtoonCardWrapper,
  WebtoonThumbnailWrapper,
  WebtoonPlatformLogo,
  WebtoonThumbnail,
  WebtoonContentWrapper,
  WebtoonTitle,
  WebtoonScoreWrapper,
  WebtoonScore,
  WebtoonScoreChangedPercent,
  WebtoonAuthor,
  Footer,
};
