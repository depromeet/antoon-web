import { usePostTopicsById } from '@apis/topics';
import { useGetUserInformation } from '@apis/user';
import { AntCoinIcon, AntCoinSmallIcon } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalFunc,
  ModalInfo,
  ModalCoin,
  ModalBtns,
  ModalOverlay,
  ModalTitle,
  ModalCoinText,
  ModalMyCoin,
  ModalHeader,
  ModalLogo,
  ModalHeaderTitle,
  MyCoinReserve,
} from './Modal.style';

createPortal;

interface Props {
  topicId: number;
  candidateId: number;
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: Function;
}

function Modal(props: Props) {
  const { data: user } = useGetUserInformation();
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);
  const {
    isLoading,
    isSuccess,
    error,
    data,
    mutate: postData,
  } = usePostTopicsById(props.candidateId);

  const { fireToast } = useToast();
  const { candidateId, isOpen, onClose } = props;

  useEffect(() => {
    setMount(true);
    setPortal(document.getElementById('onboard-modal'));
    if (data) {
      fireToast({ joinLeaveStatus: 'VOTING' });
    } else if (error) {
      fireToast({ joinLeaveStatus: 'VOTED' });
    }
  }, [data, error, fireToast]);

  const handleVoteClick = () => {
    try {
      if (candidateId <= 0) fireToast({ joinLeaveStatus: 'VOTE-NO-SELECT' });
      postData();
      onClose(false);
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
                    <AntCoinIcon />
                  </ModalLogo>
                  <ModalHeaderTitle>3코인</ModalHeaderTitle>
                </ModalHeader>
                <ModalTitle>안트코인을 사용해서 투표하시겠어요?</ModalTitle>
                <ModalInfo>
                  3 안트코인을 사용해서 투표를 할 수 있어요.
                </ModalInfo>
                <ModalCoin>
                  <ModalCoinText>보유코인</ModalCoinText>
                  <ModalMyCoin>
                    <AntCoinSmallIcon />
                    <MyCoinReserve>{user.wallet}</MyCoinReserve>
                  </ModalMyCoin>
                </ModalCoin>
                <ModalBtns>
                  <ModalClose onClick={modalClose}>안할래요</ModalClose>
                  <ModalFunc onClick={handleVoteClick}>투표할래요</ModalFunc>
                </ModalBtns>
              </ModalContent>
            </ModalContainer>
          )}
        </>,
        portal!,
      )
    : null;
}

export default Modal;
