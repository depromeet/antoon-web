import StepIndicator from '@assets/icons/StepIndicator';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Background,
  ModalContainer,
  ImageWrapper,
  DescriptionWrapper,
  DescriptionMain,
  DescriptionDetail,
  ButtonContainer,
  IndicatorContainer,
  IndicatorWrapper,
  SkipButton,
  NextButton,
  PrevButton,
  StartButton,
} from './Modal.style';

createPortal;

type Step = 'first' | 'second' | 'third';

function Modal() {
  const [modalOpen, setModalOpen] = useState(true);
  const [step, setStep] = useState<Step>('first');
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        width: 100%;
    `;

    setMount(true);
    setPortal(document.getElementById('onboard-modal'));

    if (localStorage.getItem('antoon-onboard-introduce') === 'true') {
      onCloseModal();
    }
  }, []);

  const onStep = (step: Step) => {
    setStep(step);
  };

  const onCloseModal = () => {
    document.body.style.cssText = '';
    setModalOpen(false);
    localStorage.setItem('antoon-onboard-introduce', 'true');
  };

  const First = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_01.png"
          alt="개미의 탑승/하차는 웹툰 차트에 반영돼요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          개미의 탑승/하차는
          <br />
          웹툰 차트에 반영돼요!
        </DescriptionMain>
        <DescriptionDetail>
          재미있는 웹툰에는 탑승!
          <br />
          아쉬운 웹툰에는 하차!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <SkipButton onClick={onCloseModal}>건너뛰기</SkipButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('second')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Second = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_02.png"
          alt="투표는 하루에 한번 가능해요."
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          투표는 하루에 한번
          <br />
          가능해요.
        </DescriptionMain>
        <DescriptionDetail>
          매일 낮 12시에 투표가 갱신돼요.
          <br />
          개미의 한 표로 차트를 움직여봐요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('first')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('third')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Third = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_03.png"
          alt="개미들의 행진에 동참해보세요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          개미들의
          <br />
          행진에 동참해보세요!
        </DescriptionMain>
        <DescriptionDetail>
          댓글을 통해 개미들과
          <br />
          아열띤 토론을 나눠보세요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('second')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
        </IndicatorContainer>
        <StartButton onClick={onCloseModal}>시작하기</StartButton>
      </ButtonContainer>
    </>
  );

  const renderContent = useCallback(() => {
    switch (step) {
      case 'first':
        return First;
      case 'second':
        return Second;
      case 'third':
        return Third;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return mount
    ? createPortal(
        <>
          {modalOpen && (
            <Background>
              <ModalContainer>{renderContent()}</ModalContainer>
            </Background>
          )}
        </>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        portal!,
      )
    : null;
}

export default Modal;
