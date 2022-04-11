import styled from '@emotion/styled';
import Image from 'next/image';

const DetailWrap = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  line-height: 1;
  letter-spacing: -1px;
  font-size: 2rem;
  vertical-align: top;
  height: 10px;
  margin: 0 auto;
`;

const TopInfo = styled.section`
  padding-top: 10rem;
  position: absolute;
  left: 50%;
  top: 25%;
  margin-top: 200px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

const WebtoonInfo = styled.div`
  background: ${(props) => props.theme.colors.grey_200};
  border-radius: 30px;
  padding: 30px;
  position: inline-block;
  text-align: right;
  overflow: visible;
  width: 130rem;
  height: 100%;
  margin-top: 10rem;
  float: left;
  box-sizing: border-box;
  &:hover h2 {
    text-shadow: 0 0 10px ${(props) => props.theme.colors.black_800};
  }
`;
const Jenre = styled.p`
  font: 1.6rem/1 'arial';
  position: absolute;
  top: 31rem;
  right: 10rem;
`;

const Title = styled.h2`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.black_800};
  font-weight: bold;
  opacity: 1;
  position: absolute;
  top: 35rem;
  right: 10rem;
  font-family: fantasy;
  transition: all 0.5s;
`;

const Bar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.black_700};
  width: 100%;
  padding-top: 3rem;
`;

const ProInfoWrap = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 43rem;
  right: 10rem;
`;

const ContentBasicInfo = styled.span`
  display: inline-block;
  margin: 1.1rem;
  font-family: 'notokr-medium';
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.black};
`;

const ContentBar = styled.p`
  display: inline-block;
  width: 0.2rem;
  height: 1.4rem;
  background: #cfcfcf;
`;

const ThumbnailWrap = styled.div`
  width: 50rem;
  height: 33rem;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  &:hover img {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  }
`;

const ThumbnailImg = styled(Image)`
  width: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 10;
  display: block;
  opacity: 0.8;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  object-fit: cover;
  transition: all 0.5s;
`;

const SubInfoWrap = styled.div`
  display: block;
  height: 10rem;
  margin-top: 40px;
  text-align: left;
  & p {
    text-overflow: ellipsis;
    font: 1.5rem/1.4 'arial';
    margin: 0;
  }
`;

export {
  DetailWrap,
  TopInfo,
  WebtoonInfo,
  ContentBar,
  Title,
  Jenre,
  ProInfoWrap,
  ThumbnailWrap,
  ContentBasicInfo,
  Bar,
  SubInfoWrap,
  ThumbnailImg,
};
