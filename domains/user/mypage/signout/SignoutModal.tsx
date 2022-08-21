import {
  useRef,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';

import { usePostLogout } from '@apis/user';

import {
  Background,
  ModalContainer,
  TitleText,
  SubText,
  ButtonWrap,
  CloseButton,
  SignoutButton,
} from '@domains/user/mypage/signout/SignoutModal.style';

function SignoutModal({
  modalStatus,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const { mutate: mutateLogout } = usePostLogout();

  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onClickOutSide = useCallback(
    (event: any) => {
      if (
        backgroundRef.current!.contains(event.target) &&
        !containerRef.current!.contains(event.target)
      ) {
        setModalStatus(false);
      } else {
        setModalStatus(true);
      }
    },
    [setModalStatus],
  );

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutSide);

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  }, [onClickOutSide]);

  const onClickClose = () => {
    setModalStatus(false);
  };

  const onClickLogout = () => {
    mutateLogout();
    removeCookies('Access');
    removeCookies('Refresh');
    router.push('/');
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
    <Background ref={backgroundRef}>
      <ModalContainer ref={containerRef}>
        <TitleText>로그아웃</TitleText>
        <SubText>정말 로그아웃 하시겠어요?</SubText>
        <ButtonWrap>
          <CloseButton onClick={onClickClose}>닫기</CloseButton>
          <SignoutButton onClick={onClickLogout}>로그아웃</SignoutButton>
        </ButtonWrap>
      </ModalContainer>
    </Background>
  );
}

export default SignoutModal;
