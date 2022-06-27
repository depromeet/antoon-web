/* eslint-disable @typescript-eslint/ban-types */
import { useGetUserInformation } from '@apis/user';
import { usePatchJoinLeaveRecommendationById } from '@apis/webtoons';
import { AntCoinBigIcon, AntCoinSmallIcon } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { WebtoonJoinLeaveRespoonse } from '@_types/webtoon-type';
import { MouseEventHandler, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalClose,
  ModalCoin,
  ModalCoinText,
  ModalContainer,
  ModalContent,
  ModalFunc,
  ModalHeader,
  ModalHeaderTitle,
  ModalInfo,
  ModalLogo,
  ModalMyCoin,
  ModalOverlay,
  ModalTitle,
  MyCoinReserve,
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
  joinLeave: joinLeaveType;
  onClose: Function;
  onRecommendSet: Function;
}) {
  const { data: user } = useGetUserInformation();
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  const {
    isLoading,
    isSuccess,
    error,
    data,
    mutate: postData,
  } = usePatchJoinLeaveRecommendationById(webtoonId, joinLeave);

  const { fireToast } = useToast();

  useEffect(() => {
    setMount(true);
    setPortal(document.getElementById('onboard-modal'));
    if (data) {
      onRecommendSet(data);
      fireToast({ joinLeaveStatus: joinLeave });
    }
    if (error) {
      fireToast({ joinLeaveStatus: joinLeave == 'JOIN' ? 'JOINED' : 'LEAVED' });
    }
  }, [data, error]);

  const calcuteJoinLeaveStatus = () => {
    return joinLeave === 'JOIN' ? '탑승' : '하차';
  };

  const handleJoinLeaveClick = () => {
    try {
      postData();
      onRecommendSet(data);
      modalClose();
    } catch (e) {
      console.log(e);
    }
  };

  const modalClose = () => {
    onClose(false);
  };

  return mount
    ? createPortal(
        <>
          {isOpen && (
            <ModalContainer>
              <ModalOverlay onClick={modalClose}></ModalOverlay>
              <ModalContent>
                <ModalHeader>
                  <ModalLogo>
                    <AntCoinBigIcon />
                  </ModalLogo>
                  <ModalHeaderTitle>+ 10코인</ModalHeaderTitle>
                </ModalHeader>
                <ModalTitle>
                  {title}에 <br />
                  {calcuteJoinLeaveStatus()}하시겠어요?
                </ModalTitle>
                <ModalInfo>
                  한번 탑승하시면 다음 투표까지 취소할 수 없어요.
                </ModalInfo>
                <ModalCoin>
                  <ModalCoinText>보유코인</ModalCoinText>
                  <ModalMyCoin>
                    <AntCoinSmallIcon />
                    <MyCoinReserve>{user.wallet}</MyCoinReserve>
                  </ModalMyCoin>
                </ModalCoin>
                <ModalClose onClick={modalClose}>아니요</ModalClose>
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
