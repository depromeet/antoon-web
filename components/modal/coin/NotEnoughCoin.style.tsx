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
  height: 31.3rem;
  user-select: none;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0;
`;

const ModalLogo = styled.span`
  position: absolute;
  top: -3rem;
`;

const ModalHeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 2.8rem;
  font-weight: 800;
`;

const ModalTitle = styled.h2`
  margin: 1rem 0 0;
  line-height: 2.64rem;
  font-size: 1.8rem;
  font-weight: 700;
`;

const ModalInfo = styled.p`
  margin: 0.8rem 0 0;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.3rem;
`;

const ModalCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem auto 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  padding: 0 1.6rem;
  width: 26.4rem;
  height: 4rem;
`;

const ModalCoinText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ModalMyCoin = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

const MyCoinReserve = styled.span`
  margin: 0 0 0 0.4rem;
`;

const ModalClose = styled.button`
  margin: 1.2rem auto 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 26.4rem;
  height: 4.8rem;
`;

export {
  Background,
  ModalContainer,
  ModalClose,
  ModalCoin,
  ModalCoinText,
  ModalHeader,
  ModalHeaderTitle,
  ModalInfo,
  ModalLogo,
  ModalMyCoin,
  ModalTitle,
  MyCoinReserve,
};
