import {
  useRef,
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { removeCookies } from 'cookies-next';

import { useGetUserInformation } from '@apis/user';

import { SignupCoinIntroduce } from '@assets/icons';

import {
  Background,
  ModalContainer,
  Name,
  Introduce,
  StartButton,
} from '@domains/user/signup/modal/CoinModal.style';

function CoinModal({
  modalStatus,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);

  const [userName, setName] = useState('');

  const { data: user } = useGetUserInformation();

  const onClickOutSide = useCallback(
    (event: any) => {
      if (
        modalRef.current!.contains(event.target) &&
        !innerModalRef.current!.contains(event.target)
      ) {
        setModalStatus(false);
        removeCookies('antoon-signup-status');
      } else {
        setModalStatus(true);
      }
    },
    [setModalStatus],
  );

  useEffect(() => {
    user && setName(user.name);
    document.addEventListener('mousedown', onClickOutSide);

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  }, [onClickOutSide, user]);

  const onClickStart = () => {
    setModalStatus(false);
    removeCookies('antoon-signup-status');
  };

  useEffect(() => {
    if (modalStatus) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [modalStatus]);

  return (
    <Background ref={modalRef}>
      <ModalContainer ref={innerModalRef}>
        <Name>안녕하세요, {userName} 님!</Name>
        <Introduce>
          가입을 축하하는 의미로
          <br />
          30 안트코인을 지급해드렸어요!
        </Introduce>
        <SignupCoinIntroduce />
        <StartButton onClick={onClickStart}>시작하기</StartButton>
      </ModalContainer>
    </Background>
  );
}

export default CoinModal;
