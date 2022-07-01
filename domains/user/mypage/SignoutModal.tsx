import {
  useRef,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';

import { usePostUserLogOut } from '@apis/user';

import {
  Background,
  ModalContainer,
  TitleText,
  SubText,
  BtnWrap,
  CloseBtn,
  SignoutBtn,
} from './SignoutModal.style';

function SignoutModal({
  modalStatus,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const { mutate: mutateLogOut } = usePostUserLogOut();

  const modalRef = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);

  const onClickOutSide = useCallback(
    (event: any) => {
      if (
        modalRef.current!.contains(event.target) &&
        !innerModalRef.current!.contains(event.target)
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

  const onClickLogOut = () => {
    mutateLogOut();
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
    <Background ref={modalRef}>
      <ModalContainer ref={innerModalRef}>
        <TitleText>로그아웃</TitleText>
        <SubText>정말 로그아웃 하시겠어요?</SubText>
        <BtnWrap>
          <CloseBtn onClick={onClickClose}>닫기</CloseBtn>
          <SignoutBtn onClick={onClickLogOut}>로그아웃</SignoutBtn>
        </BtnWrap>
      </ModalContainer>
    </Background>
  );
}

export default SignoutModal;
