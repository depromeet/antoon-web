import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadein = keyframes`
    from {
      opacity:0.2;
    }
      
    to {
      opacity:1;
    }
`;

const fadeout = keyframes`
    from {
      opacity:1;
    }
      
    to {
      opacity:0;
    }
`;

const ToastMessageWrapper = styled.div<{ bottom?: number; isClosing: boolean }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom ?? 15}vh;
  transition: all 0.5s;
  opacity: 0.8;
  margin-left: 5%;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.basic.black};
  padding: 12px;
  padding-left: 20px;
  width: 78vw;
  max-width: 380px;
  height: 40px;
  animation: 0.8s forwards ${({ isClosing }) => (isClosing ? fadeout : fadein)};
  vertical-align: middle;
  text-align: left;
`;

const ToastMessage = styled.p<{ status: string }>`
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 12.5px;
  font-weight: 700;

  & svg {
    margin-right: 15px;
    padding: 1.5px;
    padding-left: 3px;
    overflow: hidden;
    font-size: 10px;
    font-weight: 1000;
  }
`;

const ToastCheckMark = styled.span<{ status: string }>`
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
`;

const ToastMessageContent = styled.span`
  position: absolute;
  top: 13px;
  margin-bottom: 20px;
`;

export {
  ToastMessageWrapper,
  ToastMessage,
  ToastCheckMark,
  ToastMessageContent,
};
