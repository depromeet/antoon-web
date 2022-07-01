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
  height: 27.2rem;
  user-select: none;
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 1.5rem;
`;

const ModalLogo = styled.span`
  margin: 0 1rem 0 0;
`;

const ModalHeaderTitle = styled.h1`
  align-self: center;
  color: ${(props) => props.theme.colors.chart.point_up_100};
  font-size: 2.4rem;
  font-weight: 700;
`;

const ModalTitle = styled.h2`
  line-height: 2.64rem;
  font-size: 1.8rem;
  font-weight: 700;
`;

const ModalInfo = styled.p`
  margin: 1.2rem 0 2rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.3rem;
`;

const ModalCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  padding: 0 1.6rem;
  width: 26.4rem;
  height: 4rem;
`;

const ModalCoinText = styled.div`
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

const ModalBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0;
`;

const ModalClose = styled.button`
  margin: 0 1rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 12.8rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ModalFunc = styled.button`
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.basic.black};
  width: 12.8rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 500;
`;

export {
  Background,
  ModalContainer,
  ModalHeader,
  ModalLogo,
  ModalHeaderTitle,
  ModalTitle,
  ModalInfo,
  ModalCoin,
  ModalCoinText,
  ModalMyCoin,
  MyCoinReserve,
  ModalBtns,
  ModalClose,
  ModalFunc,
};
