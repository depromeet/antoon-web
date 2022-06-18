import { usePatchJoinLeaveRecommendationById } from '@apis/webtoons';
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
  webtoonId,
  title,
  joinLeave,
  isOpen,
  onClose,
  onRecommendSet,
}: {
  webtoonId: number;
  title: string;
  isOpen: boolean;
  joinLeave: string;
  onClose: MouseEventHandler<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onRecommendSet: Function;
}) {
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);
  const {
    isLoading,
    isSuccess,
    error,
    mutate: postData,
  } = usePatchJoinLeaveRecommendationById(webtoonId, joinLeave);

  useEffect(() => {
    setMount(true);
    setPortal(document.getElementById('onboard-modal'));
  }, []);

  const calcuteJoinLeaveStatus = () => {
    return joinLeave === 'JOIN' ? '탑승' : '하차';
  };

  const handleJoinLeaveClick = () => {
    try {
      const t = postData();
      onRecommendSet(t);
    } catch (e) {
      console.log(e);
    }
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
                <ModalFunc joinLeave={joinLeave} onClick={handleJoinLeaveClick}>
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
