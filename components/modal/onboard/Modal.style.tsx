import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: rgb(0 0 0 / 50%);
`;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1.6rem;
  background: white;
  width: 31.2rem;
  height: 40.9rem;
  max-height: 80%;
  overflow: hidden;
  text-align: center;
  user-select: none;
`;

const SectionWrapper = styled.div`
  min-width: 31.2rem;
`;

const ImageWrapper = styled.div`
  border-radius: 1.6rem;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2.4rem 2.4rem 3.2rem;
  line-height: 1.44;
`;

const DescriptionMain = styled.p`
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 2rem;
  font-weight: bold;
`;

const DescriptionDetail = styled.p`
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.4rem 2.4rem;
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  transition: all 300ms ease-in-out;
`;

const IndicatorWrapper = styled.div<{ currentStep?: boolean }>`
  display: flex;
  cursor: ${(props) => (props.currentStep ? 'default' : 'pointer')};
`;

const button = css`
  width: 4.2rem;
  font-size: 1.2rem;
`;

const SkipButton = styled.button`
  ${button}

  color: ${(props) => props.theme.colors.grayscale.gray_400};
`;

const NextButton = styled.button`
  ${button}
`;

const PrevButton = styled.button`
  ${button}
`;

const StartButton = styled.button`
  ${button}

  color: ${(props) => props.theme.colors.secondary.red};
`;

export {
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
};
