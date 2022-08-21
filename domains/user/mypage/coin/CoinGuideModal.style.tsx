import styled from '@emotion/styled';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(0 0 0 / 50%);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.basic.white};
  padding: 1.6rem 0;
  width: 100%;
  min-width: 25rem;
  max-width: 31.2rem;
  max-height: calc(100vh - 1rem);
  overflow-y: auto;
  user-select: none;
`;

const CloseButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 2.4rem 0 0;
`;

const CloseButton = styled.button`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;

  svg {
    margin: 0;
  }
`;

const Title = styled.p`
  margin: 0 0 1.6rem;
  text-align: center;
  line-height: 2.8rem;
  color: ${(props) => props.theme.colors.basic.black};
  font-size: 2rem;
  font-weight: 800;
`;

const RewardWrap = styled.div`
  margin: 0 auto;
  padding: 0 2.4rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.2rem;
`;

const Text = styled.span`
  width: 6.5rem;
`;

const Plus = styled.span`
  width: 3rem;
  text-align: right;
  color: ${(props) => props.theme.colors.secondary.red};
`;

const Minus = styled.span`
  width: 3rem;
  text-align: right;
  color: ${(props) => props.theme.colors.secondary.blue};
`;

const Line = styled.div`
  margin: 2.4rem 0 1.2rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 0.1rem;
`;

const IntroWrap = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.2rem 2.4rem 0;
`;

const ActiveDivider = styled.div`
  margin: 0.1rem 0.8rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  padding: 0 0.1rem;
  width: 0.1rem;
  height: 1.2rem;
`;

const Divider = styled.div`
  margin: 0.1rem 0.8rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_400};
  padding: 0 0.1rem;
  width: 0.1rem;
  height: 1.2rem;
`;

const IntroduceText = styled.div`
  text-align: left;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.2rem;
  font-weight: 500;
`;

export {
  Background,
  ModalContainer,
  CloseButtonWrap,
  CloseButton,
  Title,
  RewardWrap,
  RowWrap,
  Text,
  Plus,
  Minus,
  Line,
  IntroWrap,
  ActiveDivider,
  Divider,
  IntroduceText,
};
