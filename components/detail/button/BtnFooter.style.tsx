import styled from '@emotion/styled';

const BtnWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  z-index: 10;
  width: 100vw;
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

const StockTimer = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.5s;
  opacity: 0.98;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.grayscale.gray_900};
  width: 60vw;
  max-width: 330px;
  height: 35px;
`;

const TimerCount = styled.p`
  position: flex;
  text-align: center;
  line-height: 35px;
  color: ${(props) => props.theme.colors.basic.white};
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
`;

const UpDownBlockWrapper = styled.div<{ status: string }>`
  position: relative;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) =>
    props.status == 'JOINED'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  padding-top: 7px;
  width: 86vw;
  max-width: 475px;
  height: 56px;
  vertical-align: middle;
  text-align: center;
  line-height: 2vh;
`;

const UpDownBlockTitle = styled.div`
  position: flex;
  color: #fff;
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

const ToastMessageWrapper = styled.div`
  background: ${(props) => props.theme.colors.basic.black};
  border-radius: 10px;
  position: absolute;
  top: 0;
  transition: all 0.5s;
  opacity: 0.8;
  width: 86%;
  height: 30px;
  text-align: left;
  vertical-align: middle;
  margin: 0 20px;
  padding: 8px;
  padding-left: 20px;
`;

const ToastMessage = styled.p<{ status: string }>`
  font-size: 11.5px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.white};
  & span {
    border-radius: 50%;
    background: ${(props) =>
      props.status == 'JOINED'
        ? props.theme.colors.chart.point_up_100
        : props.theme.colors.chart.point_down_100};
  }
`;

export {
  BtnWrapper,
  FilterBlur,
  StockTimer,
  TimerCount,
  UpDownBlockWrapper,
  UpDownBlockTitle,
  UpDownBlockInfo,
  ToastMessageWrapper,
  ToastMessage,
};
