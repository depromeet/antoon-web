import {
  useRef,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import {
  BadgeLevelOne,
  BadgeLevelTwo,
  BadgeLevelThree,
  ModalClose,
} from '@assets/icons';

import {
  Background,
  ModalContainer,
  BtnWrap,
  Btn,
  IconWrap,
  Title,
  Line,
  IntroWrap,
  Divider,
  IntroduceText,
} from '@domains/user/mypage/badge/BadgeInfoModal.style';

function BadgeInfoModal({
  modalStatus,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}) {
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
        <BtnWrap onClick={onClickClose}>
          <Btn>
            <ModalClose />
          </Btn>
        </BtnWrap>
        <Title>개미 등급제</Title>
        <IconWrap>
          <BadgeLevelOne />
          <BadgeLevelTwo />
          <BadgeLevelThree />
        </IconWrap>
        <Line />
        <IntroWrap>
          <Divider />
          <IntroduceText>
            신규 가입 시 일개미 등급부터 시작합니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            보유 코인수에 따라 실시간으로 등급이 상승 또는 하락됩니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>한 달 단위로 등급이 갱신됩니다.</IntroduceText>
        </IntroWrap>
      </ModalContainer>
    </Background>
  );
}

export default BadgeInfoModal;
