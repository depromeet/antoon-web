import styled from '@emotion/styled';

const CharacterDetailPageWrap = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: 100%;
`;

const BackgroundColor = styled.div<{ backgroundColor: string }>`
  margin: 0 -2.4rem;
  background-color: ${(props) =>
    props.backgroundColor && `#${props.backgroundColor}`};
  height: 10rem;
`;

const CharacterProfileImg = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  z-index: 10;
  border-radius: 0.8rem;
  background-image: ${(props) => `url(${props.src}) `};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 16rem;
`;

const CharacterName = styled.p`
  padding: 8.4rem 0 0;
  color: ${(props) => props.theme.colors.basic.black};
  font-size: 2.4rem;
  font-weight: 800;
`;

const CharacterDataWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem 0 0;
`;

const CharacterRank = styled.div`
  color: ${(props) => props.theme.colors.secondary.red};
  font-size: 1.6rem;
  font-weight: 500;
`;

const Divider = styled.div`
  margin: 0 0.8rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_400};
  width: 0.1rem;
  height: 1.2rem;
`;

const TotalCoinAmount = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.6rem;
  font-weight: 500;
`;

const WebtoonInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.6rem 0 5.6rem;
  border: 0.1rem solid ${(props) => props.theme.colors.grayscale.gray_300};
  border-radius: 1.2rem;
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  width: 100%;
  height: 7.2rem;
`;

const WebtoonThumbnailWrap = styled.div`
  display: flex;
`;

const WebtoonThumbnail = styled.div<{ src: string }>`
  margin: 0 1.2rem 0 0;
  border-radius: 0.8rem;
  background-image: ${(props) => `url(${props.src}) `};
  background-repeat: no-repeat;
  background-size: cover;
  width: 4.8rem;
  height: 4.8rem;
`;

const WebtoonDetailInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4.8rem;
`;

const WebtoonTitle = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: 600;
`;

const WebtoonScore = styled.div`
  margin: 0.5rem 0 0;
  color: ${(props) => props.theme.colors.secondary.red};
  font-size: 1.4rem;
  font-weight: 500;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem auto 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 16.8rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 600;
`;

const JoinBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem auto 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  cursor: pointer;
  width: 16.8rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 600;

  span {
    margin: 0 0 0 0.6rem;
  }
`;

const TotalJoinCount = styled.div`
  margin: 0.8rem 0 0;
  text-align: center;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.2rem;
  font-weight: 500;
`;

export {
  CharacterDetailPageWrap,
  BackgroundColor,
  CharacterProfileImg,
  CharacterName,
  CharacterDataWrap,
  CharacterRank,
  Divider,
  TotalCoinAmount,
  WebtoonInfoWrap,
  WebtoonThumbnailWrap,
  WebtoonThumbnail,
  WebtoonDetailInfoWrap,
  WebtoonTitle,
  WebtoonScore,
  IconWrap,
  ConfirmBtn,
  JoinBtn,
  TotalJoinCount,
};
