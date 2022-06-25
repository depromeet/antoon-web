import { AntCoinIcon, AntCoinSmallIcon } from '@assets/icons';
import { MouseEventHandler, useEffect, useState } from 'react';
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
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLElement>;
}

function Modal(props: Props) {
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);
  const { topicId, isOpen, onClose } = props;

  useEffect(() => {
    setMount(true);
    setPortal(document.getElementById('onboard-modal'));
  }, []);

  const handleVoteClick = () => {
    console.log('post기능 테스트' + topicId);
  };

  return mount
    ? createPortal(
        <>
          {isOpen && (
            <ModalContainer>
              <ModalOverlay onClick={onClose}></ModalOverlay>
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
                    <MyCoinReserve>2300</MyCoinReserve>
                  </ModalMyCoin>
                </ModalCoin>
                <ModalBtns>
                  <ModalClose onClick={onClose}>안할래요</ModalClose>
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
