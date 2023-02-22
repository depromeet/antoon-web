import styled from '@emotion/styled';

const UpDownBtnWrapper = styled.div<{ status: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 50px;
  margin-right: ${(props) => (props.status === 'JOIN' ? '20px' : '0')};
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) =>
    props.status == 'JOIN'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  cursor: pointer;
  padding-top: 0.8rem;
  width: 43vw;
  min-width: 110px;
  max-width: 200px;
  height: 56px;
  vertical-align: middle;
  text-align: center;
  line-height: 2vh;
  row-gap: 0.4rem;
`;

const UpDownBtnTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const UpDownBtnTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.4rem;
`;

const UpDownBtnSub = styled.div`
  color: #fff;
  font-size: 10px;
`;

export {
  UpDownBtnWrapper,
  UpDownBtnTitle,
  UpDownBtnTitleIconWrapper,
  UpDownBtnSub,
};
