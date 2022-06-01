import { ToastMessageWrapper, ToastMessage } from './Toast.style';

interface Props {
  joinLeaveStatus: string;
  toastAnimation: boolean;
}

function Toast(props: Props) {
  return (
    <ToastMessageWrapper toastAnimation={props.toastAnimation}>
      <ToastMessage status={props.joinLeaveStatus}>
        <span>✓</span>{' '}
        {props.joinLeaveStatus == 'JOINED' || props.joinLeaveStatus == 'LEAVED'
          ? '내일 다시 투표할 수 있어요!'
          : props.joinLeaveStatus == 'JOIN'
          ? '툰툰 탑승 완료!'
          : '툰툰 하차 완료!'}
      </ToastMessage>
    </ToastMessageWrapper>
  );
}

export default Toast;
