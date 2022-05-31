import themes from '@styles/themes/themes';
import { MouseEventHandler, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalFunc,
  ModalInfo,
  ModalOverlay,
  ModalTitle,
} from './Modal.style';

createPortal;

type joinLeaveType = 'JOIN' | 'LEAVE';

// eslint-disable-next-line @typescript-eslint/ban-types
function Modal({
  title,
  joinLeave,
  isOpen,
  onClose,
}: {
  title: string;
  isOpen: boolean;
  joinLeave: string;
  onClose: MouseEventHandler<HTMLElement>;
}) {
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    setPortal(document.getElementById('onboard-modal'));
  }, []);

  const calcuteJoinLeaveStatus = () => {
    return joinLeave === 'JOIN' ? '탑승' : '하차';
  };

  return mount
    ? createPortal(
        <>
          {isOpen && (
            <ModalContainer>
              <ModalOverlay onClick={onClose}></ModalOverlay>
              <ModalContent>
                <ModalTitle>
                  {title}에 <br />
                  {calcuteJoinLeaveStatus()}하시겠어요?
                </ModalTitle>
                <ModalInfo>
                  한번 탑승하시면
                  <br /> 다음 투표까지 취소할 수 없어요.
                </ModalInfo>
                <ModalClose onClick={onClose}>안할래요</ModalClose>
                <ModalFunc joinLeave={joinLeave}>
                  {calcuteJoinLeaveStatus()}하기
                </ModalFunc>
              </ModalContent>
            </ModalContainer>
          )}
        </>,
        portal!,
      )
    : null;
}

export default Modal;
