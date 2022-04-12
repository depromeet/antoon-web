import styled from '@emotion/styled';

const DetailWrap = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 10px;
  vertical-align: top;
  line-height: 1;
  letter-spacing: -1px;
  font-size: 2rem;
`;

const TopInfo = styled.section`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  margin-top: 200px;
  padding-top: 10rem;
`;

const WebtoonInfo = styled.div`
  box-sizing: border-box;
  position: inline-block;
  float: left;
  margin-top: 10rem;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.grey_200};
  padding: 30px;
  width: 130rem;
  height: 100%;
  overflow: visible;
  text-align: right;

  &:hover h2 {
    text-shadow: 0 0 10px ${(props) => props.theme.colors.black_800};
  }
`;
const Jenre = styled.p`
  position: absolute;
  top: 34rem;
  right: 10rem;
  font: 1.6rem/1 arial;
`;

const Title = styled.h2`
  position: absolute;
  top: 39rem;
  right: 10rem;
  transition: all 0.5s;
  opacity: 1;
  color: ${(props) => props.theme.colors.black_800};
  font-family: fantasy;
  font-size: 5rem;
  font-weight: bold;
`;

const SubInfoWrap = styled.div`
  display: block;
  margin-top: 40px;
  height: 10rem;
  text-align: left;

  & p {
    margin: 0;
    text-overflow: ellipsis;
    font: 1.5rem/1.4 arial;
  }
`;

export { DetailWrap, TopInfo, WebtoonInfo, Title, Jenre, SubInfoWrap };
