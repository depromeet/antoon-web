import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const appearSlowly = keyframes`
    from {
      opacity:0.2;
    }
      
    to {
      opacity:1;
    }
`;

const ToastMessageWrapper = styled.div<{ toastAnimation: boolean }>`
  position: absolute;
  transition: all 0.5s;
  opacity: 0.8;
  margin: 0 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.basic.black};
  padding: 12px;
  padding-left: 20px;
  width: 85%;
  max-width: 470px;
  height: 40px;
  animation: ${appearSlowly} 1.5s;
  vertical-align: middle;
  text-align: left;
`;

const ToastMessage = styled.p<{ status: string }>`
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 12.5px;
  font-weight: 700;

  & span {
    margin-right: 15px;
    border-radius: 45%;
    background: ${(props) =>
      props.status == 'JOINED'
        ? props.theme.colors.chart.point_up_100
        : props.theme.colors.chart.point_down_100};
    padding: 1.5px;
    padding-left: 3px;
    overflow: hidden;
    color: ${(props) => props.theme.colors.basic.black};
    font-size: 10px;
    font-weight: 1000;
  }
`;

export { ToastMessageWrapper, ToastMessage };
