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
  background: ${(props) => props.theme.colors.basic.black};
  border-radius: 10px;
  position: absolute;
  transition: all 0.5s;
  opacity: 0.8;
  width: 85%;
  height: 40px;
  text-align: left;
  vertical-align: middle;
  margin: 0 20px;
  padding: 12px;
  padding-left: 20px;
  max-width: 470px;
  animation: ${appearSlowly} 1.5s;
`;

const ToastMessage = styled.p<{ status: string }>`
  font-size: 12.5px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.white};
  & span {
    color: ${(props) => props.theme.colors.basic.black};
    margin-right: 15px;
    overflow: hidden;
    padding: 1.5px;
    padding-left: 3px;
    font-size: 10px;
    font-weight: 1000;
    border-radius: 45%;
    background: ${(props) =>
      props.status == 'JOINED'
        ? props.theme.colors.chart.point_up_100
        : props.theme.colors.chart.point_down_100};
  }
`;

export { ToastMessageWrapper, ToastMessage };
