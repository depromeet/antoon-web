import styled from '@emotion/styled';

const UpDownBtnWrapper = styled.div<{ status: string }>`
  position: relative;
  margin-top: 50px;
  margin-right: ${(props) => (props.status === 'up' ? '20px' : '0')};
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) =>
    props.status == 'up'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  padding-top: 7px;
  width: 43vw;
  max-width: 320px;
  height: 56px;
  vertical-align: middle;
  text-align: center;
  line-height: 2vh;
`;

const UpDownBtnTitle = styled.div`
  position: flex;
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
