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
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.basic.white};
  width: 31.2rem;
  height: 17.5rem;
  user-select: none;
  text-align: center;
`;

const TitleText = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: 700;
`;

const SubText = styled.div`
  margin: 1rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
  font-weight: 400;
`;

const BtnWrap = styled.div`
  display: flex;
  margin: 2.4rem auto 0;
`;

const CloseBtn = styled.button`
  margin: 0 0.8rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 12.8rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.6rem;
  font-weight: 500;
`;

const SignoutBtn = styled.button`
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 12.8rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 500;
`;

export {
  Background,
  ModalContainer,
  TitleText,
  SubText,
  BtnWrap,
  CloseBtn,
  SignoutBtn,
};
