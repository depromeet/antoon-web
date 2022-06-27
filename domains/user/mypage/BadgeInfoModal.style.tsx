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
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.basic.white};
  width: 31.2rem;
  height: 44.6rem;
  user-select: none;

  svg {
    margin: 0 0 2rem;
  }

  svg:nth-last-of-type(0) {
    margin: 0 0 2.4rem;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 2.4rem 0 0;
`;

const Btn = styled.button`
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

const IconWrap = styled.div`
  text-align: center;
`;

const Line = styled.div`
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 31.2rem;
  height: 0.1rem;
`;

const IntroWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1.2rem 0 0;
  width: 100%;
`;

const Divider = styled.div`
  margin: 0 0.8rem 0 2.4rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_400};
  width: 0.2rem;
  height: 1.2rem;
`;

const IntroduceText = styled.div`
  max-width: 25.6rem;
  text-align: left;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.2rem;
  font-weight: 500;
`;

export {
  Background,
  ModalContainer,
  BtnWrap,
  Btn,
  Title,
  IconWrap,
  Line,
  IntroWrap,
  Divider,
  IntroduceText,
};
