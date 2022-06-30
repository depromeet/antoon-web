import styled from '@emotion/styled';
import { toastState } from '@stores/toast';
import { useRecoilValue } from 'recoil';
import ToastItem from './Toast';

function ToastList() {
  const toasts = useRecoilValue(toastState);
  return (
    <StToastList>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </StToastList>
  );
}

const StToastList = styled.div`
  position: fixed;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  padding: 24px;
  width: 100vw;
  max-width: 470px;
  text-align: center;
`;

export default ToastList;
