import styled from '@emotion/styled';

const UpDownBtnWrapper = styled.div<{ status: string }>`
  position: relative;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) =>
    props.status == 'up'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  width: 43vw;
  height: 6vh;
  text-align: center;
  line-height: 0vh;
`;

const UpDownBtnTitle = styled.div`
  position: flex;
  margin-top: 7px;
  margin-bottom: 10px;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
`;

const UpDownBtnSub = styled.div`
  position: flex;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  font-style: normal;
`;

export { UpDownBtnWrapper, UpDownBtnTitle, UpDownBtnSub };
