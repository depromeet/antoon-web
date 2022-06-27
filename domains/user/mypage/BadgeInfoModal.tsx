/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
} from './BadgeInfoModal.style';

function BadgeInfoModal({
  setModalStatus,
}: {
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
            코인을 얻으면 등급이 상승하고, 코인이 차감되면 등급이 하락합니다.
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
