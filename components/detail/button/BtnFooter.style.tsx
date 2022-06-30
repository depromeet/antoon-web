import styled from '@emotion/styled';

const BtnWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 160px;
`;

const FilterBlur = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(255 255 255 / 70%);
  width: 120%;
  height: 180px;
  filter: blur(30px);
`;

const UpDownBlockWrapper = styled.div<{ status: string }>`
  position: relative;
  margin: 0 24px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) =>
    props.status == 'JOINED'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  padding-top: 7px;
  width: 80vw;
  max-width: 440px;
  height: 56px;
  vertical-align: middle;
  text-align: center;
  line-height: 2vh;
`;

const UpDownBlockTitle = styled.div`
  position: flex;
  color: ${(props) => props.theme.colors.basic.white};
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
`;

const UpDownBlockInfo = styled.div`
  position: flex;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  font-style: normal;
`;

export {
  BtnWrapper,
  FilterBlur,
  UpDownBlockWrapper,
  UpDownBlockTitle,
  UpDownBlockInfo,
};
