/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from 'react';

import StepIndicator from '@assets/icons/StepIndicator';
import { Mixpanel } from 'mixpanel';
import { createPortal } from 'react-dom';
import {
  Background,
  ModalContainer,
  SectionWrapper,
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

import {
  onboard_01,
  onboard_02,
  onboard_03,
  onboard_04,
  onboard_05,
} from '@assets/images';
import Image from 'next/image';

createPortal;

type Step = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

function Modal() {
  const [modalOpen, setModalOpen] = useState(true);
  const [step, setStep] = useState<Step>('first');
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * @ref SectionWrapper width is 312
     */
    const sectionWidth = 312;

    const modalContainer = modalContainerRef.current;

    if (!modalContainer) return;

    console.log(step);
    console.log(modalContainerRef.current?.scrollLeft);

    switch (step) {
      case 'first':
        modalContainer.scrollLeft = sectionWidth * 0;
        return;
      case 'second':
        modalContainer.scrollLeft = sectionWidth * 1;
        return;
      case 'third':
        modalContainer.scrollLeft = sectionWidth * 2;
        return;
      case 'fourth':
        modalContainer.scrollLeft = sectionWidth * 3;
        return;
      case 'fifth':
        modalContainer.scrollLeft = sectionWidth * 4;
        return;
    }
  }, [step]);

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
    `;

    setMount(true);
    setPortal(document.getElementById('onboard-modal'));

    if (localStorage.getItem('antoon-onboard-introduce') === 'true') {
      closeModal();
    }
  }, []);

  const closeModal = () => {
    document.body.style.cssText = '';
    setModalOpen(false);
    localStorage.setItem('antoon-onboard-introduce', 'true');
  };

  const onStep = (step: Step) => {
    setStep(step);
  };

  const onSkip = () => {
    Mixpanel.track('온보딩', {
      type: 'modal',
      event: 'skip',
    });

    closeModal();
  };

  const onFinish = () => {
    Mixpanel.track('온보딩', {
      type: 'modal',
      event: 'finish',
    });

    closeModal();
  };

  const First = () => (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src={onboard_01}
          alt="개미의 탑승/하차는 웹툰 차트에 반영돼요!"
          priority
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          개미의 탑승/하차는
          <br />
          웹툰 차트에 반영돼요!
        </DescriptionMain>
        <DescriptionDetail>
          한 웹툰의 탑승/하차는 하루에 한번 가능!
          <br />낮 12시에 투표가 열려요.
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <SkipButton onClick={onSkip}>건너뛰기</SkipButton>
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
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('second')}>다음</NextButton>
      </ButtonContainer>
    </SectionWrapper>
  );

  const Second = () => (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src={onboard_02}
          alt=" 좋아하는 인물과 커플 주식에 탑승할 수 있어요!"
          priority
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          좋아하는 인물과 커플 주식에
          <br />
          탑승할 수 있어요!
        </DescriptionMain>
        <DescriptionDetail>
          댓글에만 존재했던 등장인물 주식,
          <br />
          안트코인으로 직접 탑승해보세요!
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
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('third')}>다음</NextButton>
      </ButtonContainer>
    </SectionWrapper>
  );

  const Third = () => (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src={onboard_03}
          alt="안트코인을 사용해 관심있는 주제에 투표하세요!"
          priority
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          안트코인을 사용해
          <br />
          관심있는 주제에 투표하세요!
        </DescriptionMain>
        <DescriptionDetail>
          댓글로만 소통했던 웹툰 떡밥,
          <br />
          이제는 A/B, 초이스로 해봐요!
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
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('fourth')}>다음</NextButton>
      </ButtonContainer>
    </SectionWrapper>
  );

  const Fourth = () => (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src={onboard_04}
          alt="안트코인은 쉽게 모을 수 있어요!"
          priority
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          안트코인은
          <br />
          쉽게 모을 수 있어요!
        </DescriptionMain>
        <DescriptionDetail>
          웹툰 탑승/하차와 참여한 투표에
          <br />
          이기면 안트코인을 지급해줘요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('third')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('fifth')}>다음</NextButton>
      </ButtonContainer>
    </SectionWrapper>
  );

  const Fifth = () => (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src={onboard_05}
          alt="모든 웹툰의 떡밥을 개미는 툰툰에서!"
          priority
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          모든 웹툰의 떡밥을
          <br />
          개미는 툰툰에서!
        </DescriptionMain>
        <DescriptionDetail>
          댓글을 통해 개미들과
          <br />
          열띤 토론을 나눠보세요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('fourth')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
        </IndicatorContainer>
        <StartButton onClick={onFinish}>시작하기</StartButton>
      </ButtonContainer>
    </SectionWrapper>
  );

  return mount
    ? createPortal(
        <>
          {modalOpen && (
            <Background>
              {/* <ModalContainer>{renderContent()}</ModalContainer> */}
              <ModalContainer ref={modalContainerRef}>
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
              </ModalContainer>
            </Background>
          )}
        </>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        portal!,
      )
    : null;
}

export default Modal;
